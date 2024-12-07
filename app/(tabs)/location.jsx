import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { icons } from "../../constants";

// Example AI-Based Traffic & Battery Estimation functions
const getTrafficCondition = (start, end) => {
  return "Heavy traffic ahead! Suggesting an alternate route.";
};

const getBatteryEstimation = (batteryLevel, distanceToStation) => {
  const estimatedConsumption = 0.1; 
  const estimatedBatteryRequired = distanceToStation * estimatedConsumption;

  if (batteryLevel < estimatedBatteryRequired) {
    return `Battery might not be sufficient! Consider charging at a closer station.`;
  }
  return `Battery is sufficient for the trip.`;
};

const MapScreen = () => {
  const navigation = useNavigation();
  const [selectedStation, setSelectedStation] = useState(null);
  const [trafficCondition, setTrafficCondition] = useState(null);
  const [batteryEstimation, setBatteryEstimation] = useState(null);

  const kualaLumpur = { latitude: 3.139, longitude: 101.6869 };
  const putrajaya = { latitude: 2.9264, longitude: 101.6964 };
  const batteryLevel = 80;

  const evChargingStations = [
    {
      id: 1,
      coordinate: { latitude: 3.13, longitude: 101.68 },
      title: "Tesla Supercharger",
      address: "Petronas Station, Kuala Lumpur",
      connectionType: "Type 1",
      powerOutput: "50kW",
      imageUrl: "https://via.placeholder.com/70",
    },
    {
      id: 2,
      coordinate: { latitude: 3.10, longitude: 101.73 },
      title: "EV Connection",
      address: "Mid Valley Megamall, Kuala Lumpur",
      connectionType: "Type 3",
      powerOutput: "20kW",
      imageUrl: "https://via.placeholder.com/70",
    },
    {
      id: 3,
      coordinate: { latitude: 3.05, longitude: 101.65 },
      title: "Shell Recharge",
      address: "IOI City Mall, Putrajaya",
      connectionType: "Type 2",
      powerOutput: "35kW",
      imageUrl: "https://via.placeholder.com/70",
    },
    // Add other stations...
  ];

  useEffect(() => {
    const findNearestStation = () => {
      let nearest = null;
      let shortestDistance = Infinity;

      evChargingStations.forEach((station) => {
        const distance = haversineDistance(kualaLumpur, station.coordinate);
        if (distance < shortestDistance) {
          shortestDistance = distance;
          nearest = station;
        }
        station.distance = distance.toFixed(2);
      });

      if (nearest) {
        setSelectedStation(nearest);
        setTrafficCondition(
          getTrafficCondition(kualaLumpur, nearest.coordinate)
        );
        setBatteryEstimation(
          getBatteryEstimation(batteryLevel, shortestDistance)
        );
      }
    };

    findNearestStation();
  }, []);

  const haversineDistance = (start, end) => {
    const R = 6371;
    const dLat = ((end.latitude - start.latitude) * Math.PI) / 180;
    const dLon = ((end.longitude - start.longitude) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((start.latitude * Math.PI) / 180) *
        Math.cos((end.latitude * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const getBoundingCoordinates = () => {
    const coordinates = [
      kualaLumpur,
      putrajaya,
      ...evChargingStations.map((station) => station.coordinate),
    ];

    let minLat = Math.min(...coordinates.map((coord) => coord.latitude));
    let maxLat = Math.max(...coordinates.map((coord) => coord.latitude));
    let minLon = Math.min(...coordinates.map((coord) => coord.longitude));
    let maxLon = Math.max(...coordinates.map((coord) => coord.longitude));

    return {
      latitudeDelta: maxLat - minLat + 0.05,
      longitudeDelta: maxLon - minLon + 0.05,
    };
  };

  const region = {
    latitude: (kualaLumpur.latitude + putrajaya.latitude) / 2,
    longitude: (kualaLumpur.longitude + putrajaya.longitude) / 2,
    ...getBoundingCoordinates(),
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={icons.back}
          style={styles.backIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <MapView
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
      >
        <Marker
          coordinate={kualaLumpur}
          title="Kuala Lumpur"
          description="Starting Point"
        />
        <Marker
          coordinate={putrajaya}
          title="Putrajaya"
          description="Destination"
        />
        <Polyline
          coordinates={[kualaLumpur, putrajaya]}
          strokeColor="#FF0000"
          strokeWidth={4}
        />

        {evChargingStations.map((station) => (
          <Marker
            key={station.id}
            coordinate={station.coordinate}
            title={station.title}
            description={station.description}
            pinColor="green"
            onPress={() => setSelectedStation(station)}
          />
        ))}
      </MapView>

      {selectedStation && (
        <View style={styles.stationDetailsContainer}>
          <View style={styles.stationCard}>
            <Image
              source={{ uri: selectedStation.imageUrl }}
              style={styles.stationImage}
            />
            <View style={styles.stationTextContainer}>
              <Text style={styles.stationTitle}>{selectedStation.title}</Text>
              <Text style={styles.stationAddress}>
                {selectedStation.address}
              </Text>
              <View style={styles.stationInfo}>
                <Text style={styles.stationDetails}>
                  <Text style={styles.boldText}>Distance: </Text>
                  {selectedStation.distance} km
                </Text>
                <Text style={styles.stationDetails}>
                  <Text style={styles.boldText}>Connection: </Text>
                  {selectedStation.connectionType}
                </Text>
                <Text style={styles.stationDetails}>
                  <Text style={styles.boldText}>Power Output: </Text>
                  {selectedStation.powerOutput}
                </Text>
              </View>

              <View style={styles.aiSection}>
                <Text style={styles.stationDetails}>
                  <Text style={styles.boldText}>Traffic: </Text>
                  {trafficCondition}
                </Text>
              </View>
              <View style={styles.aiSection}>
                <Text style={styles.stationDetails}>
                  <Text style={styles.boldText}>Battery: </Text>
                  {batteryEstimation}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.navigateButton}
                onPress={() =>
                  navigation.navigate("Directions", {
                    station: selectedStation,
                  })
                }
              >
                <Text style={styles.navigateButtonText}>Get Directions</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 10,
    padding: 10,
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#FFF",
  },
  stationDetailsContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 10,
    zIndex: 1,
  },
  stationCard: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  stationImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  stationTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  stationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  stationAddress: {
    fontSize: 14,
    color: "#CCC",
    marginTop: 5,
  },
  stationInfo: {
    marginTop: 10,
  },
  stationDetails: {
    fontSize: 14,
    color: "#FFF",
    marginTop: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  aiSection: {
    marginTop: 10,
  },
  navigateButton: {
    marginTop: 15,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
  },
  navigateButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MapScreen;

