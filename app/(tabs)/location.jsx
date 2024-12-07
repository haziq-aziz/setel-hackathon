import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { icons } from "../../constants";

const MapScreen = () => {
  const navigation = useNavigation(); // Hook for navigation

  const kualaLumpur = {
    latitude: 3.139,
    longitude: 101.6869,
  };

  const putrajaya = {
    latitude: 2.9264,
    longitude: 101.6964,
  };

  // Example coordinates for EV charging stations (replace with real ones)
  const evChargingStations = [
    {
      id: 1,
      coordinate: { latitude: 3.100, longitude: 101.666 },
      title: "EV Charging Station 1",
      description: "Nearby Charging Point",
    },
    {
      id: 2,
      coordinate: { latitude: 3.096, longitude: 101.787 },
      title: "EV Charging Station 2",
      description: "Fast Charging Available",
    },
    {
      id: 3,
      coordinate: { latitude: 3.067, longitude: 101.684 },
      title: "EV Charging Station 3",
      description: "Public Access Charging",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        className="mt-2"
        onPress={() => navigation.goBack()} // Go back to the previous screen
      >
        <Image
          source={icons.back} // Replace with the correct path to your back icon
          style={styles.backIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 3.0,
          longitude: 101.7,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {/* Marker for Kuala Lumpur */}
        <Marker
          coordinate={kualaLumpur}
          title="Kuala Lumpur"
          description="Starting Point"
        />

        {/* Marker for Putrajaya */}
        <Marker
          coordinate={putrajaya}
          title="Putrajaya"
          description="Destination"
        />

        {/* Polyline for the route */}
        <Polyline
          coordinates={[kualaLumpur, putrajaya]} // Array of coordinates for the route
          strokeColor="#FF0000" // Route color
          strokeWidth={4} // Route thickness
        />

        {/* EV Charging Station Markers */}
        {evChargingStations.map((station) => (
          <Marker
            key={station.id}
            coordinate={station.coordinate}
            title={station.title}
            description={station.description}
            pinColor="green" // Color to differentiate EV stations
          />
        ))}
      </MapView>
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
    top: 40, // Adjust to your preference
    left: 10, // Adjust to your preference
    padding: 10,
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Background for better visibility
    borderRadius: 5,
  },
  backIcon: {
    width: 24, // Adjust the size of your back icon
    height: 24,
    tintColor: "#FFF", // Optional: Tint the icon to match your theme
  },
});

export default MapScreen;
