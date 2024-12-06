import React from "react";
import { View, Text, SafeAreaView, ScrollView, Dimensions } from "react-native";

const Kyc = () => {
  const data = [
    {
      date: "7/12/2024",
      title: "First Date",
      details: {
        from: "Kuala Lumpur",
        to: "Petaling Jaya",
        distance: "15 km",
        vehicleSensors: [
          { name: "Air Conditioning", usage: "10", range: "Normal" },
          { name: "Engine Power", usage: "40", range: "Normal" },
          { name: "Unlock/Lock Car", usage: "0.2", range: "Moderate" },
          { name: "Car Boot", usage: "1", range: "Excessive" },
          { name: "Lights", usage: "0.6", range: "Moderate" },
        ],
        infotainment: [
          { name: "Tablet Usage", usage: "3", range: "Excessive" },
          { name: "Auto Cruise", usage: "0.6", range: "Moderate" },
          { name: "Voice Control", usage: "0.1", range: "Normal" },
        ],
        weatherConditions: {
          outdoorTemp: { value: "30°C", range: "Normal" },
          indoorTemp: { value: "24°C", range: "Normal" },
        },
        trafficConditions: {
          totalTime: { value: "45 mins", range: "Moderate" },
          delays: { value: "10 mins", range: "Moderate" },
        },
      },
    },
    {
      date: "8/12/2024",
      title: "Heavy Traffic",
      details: {
        from: "Shah Alam",
        to: "Subang Jaya",
        distance: "20 km",
        vehicleSensors: [
          { name: "Air Conditioning", usage: "20", range: "Excessive" },
          { name: "Engine Power", usage: "50", range: "Excessive" },
          { name: "Unlock/Lock Car", usage: "5", range: "Excessive" },
          { name: "Car Boot", usage: "3", range: "Excessive" },
          { name: "Lights", usage: "2", range: "Excessive" },
        ],
        infotainment: [
          { name: "Tablet Usage", usage: "10", range: "Excessive" },
          { name: "Auto Cruise", usage: "1", range: "Excessive" },
          { name: "Voice Control", usage: "0.5", range: "Excessive" },
        ],
        weatherConditions: {
          outdoorTemp: { value: "35°C", range: "Excessive" },
          indoorTemp: { value: "20°C", range: "Excessive" },
        },
        trafficConditions: {
          totalTime: { value: "90 mins", range: "Excessive" },
          delays: { value: "45 mins", range: "Excessive" },
        },
      },
    },
    {
      date: "9/12/2024",
      title: "Extended Road Trip",
      details: {
        from: "Kuala Lumpur",
        to: "Ipoh",
        distance: "200 km",
        vehicleSensors: [
          { name: "Air Conditioning", usage: "25", range: "Excessive" },
          { name: "Engine Power", usage: "75", range: "Excessive" },
          { name: "Unlock/Lock Car", usage: "7", range: "Excessive" },
          { name: "Car Boot", usage: "5", range: "Excessive" },
          { name: "Lights", usage: "4", range: "Excessive" },
        ],
        infotainment: [
          { name: "Tablet Usage", usage: "15", range: "Excessive" },
          { name: "Auto Cruise", usage: "2", range: "Excessive" },
          { name: "Voice Control", usage: "1", range: "Excessive" },
        ],
        weatherConditions: {
          outdoorTemp: { value: "40°C", range: "Excessive" },
          indoorTemp: { value: "28°C", range: "Excessive" },
        },
        trafficConditions: {
          totalTime: { value: "4 hours", range: "Excessive" },
          delays: { value: "1 hour", range: "Excessive" },
        },
      },
    },
    {
      date: "9/12/2024",
      title: "Night Adventure",
      details: {
        from: "Kajang",
        to: "Putrajaya",
        distance: "25 km",
        vehicleSensors: [
          { name: "Air Conditioning", usage: "25", range: "Excessive" },
          { name: "Engine Power", usage: "30", range: "Moderate" },
          { name: "Unlock/Lock Car", usage: "5", range: "Excessive" },
          { name: "Car Boot", usage: "0.1", range: "Normal" },
          { name: "Lights", usage: "15", range: "Excessive" },
        ],
        infotainment: [
          { name: "Tablet Usage", usage: "1", range: "Moderate" },
          { name: "Auto Cruise", usage: "2", range: "Moderate" },
          { name: "Voice Control", usage: "0.2", range: "Normal" },
        ],
        weatherConditions: {
          outdoorTemp: { value: "28°C", range: "Normal" },
          indoorTemp: { value: "18°C", range: "Excessive" },
        },
        trafficConditions: {
          totalTime: { value: "50 mins", range: "Moderate" },
          delays: { value: "5 mins", range: "Normal" },
        },
      },
    },
  ];

  const getColorForRange = (range) => {
    switch (range) {
      case "Normal":
        return "#10B981"; // Green
      case "Moderate":
        return "#FBBF24"; // Yellow
      case "Excessive":
        return "#EF4444"; // Red
      default:
        return "#D1D5DB"; // Default gray for unexpected values
    }
  };

  const calculateTotalEnergyUsage = (details) => {
    const { vehicleSensors, infotainment } = details;
    const totalVehicleSensors = vehicleSensors.reduce(
      (sum, item) => sum + parseFloat(item.usage),
      0
    );
    const totalInfotainment = infotainment.reduce(
      (sum, item) => sum + parseFloat(item.usage),
      0
    );

    return totalVehicleSensors + totalInfotainment;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1F2937" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          horizontal
          pagingEnabled
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {data.map((item, index) => {
            const {
              date,
              details: {
                from,
                to,
                distance,
                vehicleSensors,
                infotainment,
                weatherConditions,
                trafficConditions,
              },
            } = item;

            const totalEnergyUsed = calculateTotalEnergyUsage(item.details);

            return (
              <View
                key={index}
                style={{
                  width: Dimensions.get("window").width,
                  padding: 16,
                  backgroundColor: "#1F2937",
                }}
              >
                {/* Date */}
                <View
                  style={{
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Text
                    style={{
                      color: "#F9FAFB",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    {date}
                  </Text>
                </View>

                {/* Journey Details */}
                <View
                  style={{
                    backgroundColor: "#4B5563",
                    borderRadius: 10,
                    padding: 16,
                    marginBottom: 16,
                  }}
                >
                  <Text
                    style={{
                      color: "#F9FAFB",
                      fontSize: 18,
                      fontWeight: "bold",
                      marginBottom: 8,
                    }}
                  >
                    Journey Details
                  </Text>
                  <Text style={{ color: "#F9FAFB", fontSize: 16 }}>
                    From: {from}
                  </Text>
                  <Text style={{ color: "#F9FAFB", fontSize: 16 }}>
                    To: {to}
                  </Text>
                  <Text style={{ color: "#F9FAFB", fontSize: 16 }}>
                    Distance: {distance}
                  </Text>
                </View>

                {/* Vehicle Sensors */}
                <View
                  style={{
                    backgroundColor: "#374151",
                    borderRadius: 10,
                    padding: 16,
                    marginBottom: 16,
                  }}
                >
                  <Text
                    style={{
                      color: "#F9FAFB",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Vehicle Sensors:
                  </Text>
                  {vehicleSensors.map((sensor, index) => (
                    <Text
                      key={index}
                      style={{
                        color: getColorForRange(sensor.range),
                        fontSize: 14,
                      }}
                    >
                      - {sensor.name}: {sensor.usage} kW/h ({sensor.range})
                    </Text>
                  ))}
                </View>

                {/* Infotainment System */}
                <View
                  style={{
                    backgroundColor: "#374151",
                    borderRadius: 10,
                    padding: 16,
                    marginBottom: 16,
                  }}
                >
                  <Text
                    style={{
                      color: "#F9FAFB",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Infotainment System:
                  </Text>
                  {infotainment.map((feature, index) => (
                    <Text
                      key={index}
                      style={{
                        color: getColorForRange(feature.range),
                        fontSize: 14,
                      }}
                    >
                      - {feature.name}: {feature.usage} kW/h ({feature.range})
                    </Text>
                  ))}
                </View>

                {/* Weather Conditions */}
                <View
                  style={{
                    backgroundColor: "#374151",
                    borderRadius: 10,
                    padding: 16,
                    marginBottom: 16,
                  }}
                >
                  <Text
                    style={{
                      color: "#F9FAFB",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Weather Conditions:
                  </Text>
                  <Text
                    style={{
                      color: getColorForRange(
                        weatherConditions.outdoorTemp.range
                      ),
                    }}
                  >
                    - Outdoor Temperature: {weatherConditions.outdoorTemp.value}{" "}
                    ({weatherConditions.outdoorTemp.range})
                  </Text>
                  <Text
                    style={{
                      color: getColorForRange(
                        weatherConditions.indoorTemp.range
                      ),
                    }}
                  >
                    - Indoor Temperature: {weatherConditions.indoorTemp.value} (
                    {weatherConditions.indoorTemp.range})
                  </Text>
                </View>

                {/* Traffic Conditions */}
                <View
                  style={{
                    backgroundColor: "#374151",
                    borderRadius: 10,
                    padding: 16,
                    marginBottom: 16,
                  }}
                >
                  <Text
                    style={{
                      color: "#F9FAFB",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Traffic Conditions:
                  </Text>
                  <Text
                    style={{
                      color: getColorForRange(
                        trafficConditions.totalTime.range
                      ),
                    }}
                  >
                    - Total Time: {trafficConditions.totalTime.value} (
                    {trafficConditions.totalTime.range})
                  </Text>
                  <Text
                    style={{
                      color: getColorForRange(trafficConditions.delays.range),
                    }}
                  >
                    - Delays: {trafficConditions.delays.value} (
                    {trafficConditions.delays.range})
                  </Text>
                </View>

                {/* Energy Summary */}
                <View
                  style={{
                    backgroundColor: "#4B5563",
                    borderRadius: 10,
                    padding: 16,
                  }}
                >
                  <Text
                    style={{
                      color: "#F9FAFB",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    Total Energy Usage: {totalEnergyUsed.toFixed(1)} kW/h
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Kyc;
