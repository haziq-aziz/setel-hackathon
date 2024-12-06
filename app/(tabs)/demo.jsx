import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { database } from "../../firebase"; // Update this path if needed
import { ref, push } from "firebase/database";

import { icons } from "../../constants";

// Function to get a random sensor reading (Normal, Moderate, Excessive)
const getRandomSensorReading = (data) => {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
};

const DemoPage = () => {
  const router = useRouter();

  // Sensor data
  const airConData = [
    { label: "Normal", value: "5–15 kW/h" },
    { label: "Moderate", value: "15–25 kW/h" },
    { label: "Excessive", value: ">25 kW/h" },
  ];

  const enginePowerData = [
    { label: "Normal", value: "20–50 kW" },
    { label: "Moderate", value: "50–70 kW" },
    { label: "Excessive", value: ">70 kW" },
  ];

  const unlockLockData = [
    { label: "Normal", value: "0.1–0.2 kW per operation" },
    { label: "Moderate", value: "0.2–0.4 kW per operation" },
    { label: "Excessive", value: ">0.4 kW per operation" },
  ];

  const carBootData = [
    { label: "Normal", value: "0.5–1 kW/h" },
    { label: "Moderate", value: "1–1.5 kW/h" },
    { label: "Excessive", value: ">1.5 kW/h" },
  ];

  const lightsData = [
    { label: "Normal", value: "0.2–0.5 kW/h" },
    { label: "Moderate", value: "0.5–0.7 kW/h" },
    { label: "Excessive", value: ">0.7 kW/h" },
  ];

  // Infotainment System data
  const tabletUsageData = [
    { label: "Normal", value: "1–2 kW/h" },
    { label: "Moderate", value: "2–4 kW/h" },
    { label: "Excessive", value: ">4 kW/h" },
  ];

  const autoCruiseData = [
    { label: "Normal", value: "0.2–0.5 kW" },
    { label: "Moderate", value: "0.5–0.7 kW" },
    { label: "Excessive", value: ">0.7 kW" },
  ];

  const voiceControlData = [
    { label: "Normal", value: "0.05–0.1 kW/h" },
    { label: "Moderate", value: "0.1–0.2 kW/h" },
    { label: "Excessive", value: ">0.2 kW/h" },
  ];
  const outdoorTempData = [
    { label: "Cool", value: "15–20°C" },
    { label: "Warm", value: "20–30°C" },
    { label: "Hot", value: ">30°C" },
  ];

  const indoorTempData = [
    { label: "Cool", value: "18–22°C" },
    { label: "Comfortable", value: "22–25°C" },
    { label: "Warm", value: ">25°C" },
  ];

  const totalTimeOnRoadData = [
    { label: "Short", value: "0–30 minutes" },
    { label: "Moderate", value: "30–60 minutes" },
    { label: "Long", value: ">60 minutes" },
  ];

  const trafficDelaysData = [
    { label: "Light", value: "0–10 minutes" },
    { label: "Moderate", value: "10–30 minutes" },
    { label: "Heavy", value: ">30 minutes" },
  ];

  // State for random readings
  const [randomReadings, setRandomReadings] = useState({
    airCon: null,
    enginePower: null,
    unlockLock: null,
    carBoot: null,
    lights: null,
    tabletUsage: null,
    autoCruise: null,
    voiceControl: null,
    outdoorTemp: null,
    indoorTemp: null,
    timeOnRoad: null,
    trafficDelays: null,
  });

  const handleRandomButtonClick = () => {
    // Get random readings for each sensor
    const newReadings = {
      airCon: getRandomSensorReading(airConData),
      enginePower: getRandomSensorReading(enginePowerData),
      unlockLock: getRandomSensorReading(unlockLockData),
      carBoot: getRandomSensorReading(carBootData),
      lights: getRandomSensorReading(lightsData),
      tabletUsage: getRandomSensorReading(tabletUsageData),
      autoCruise: getRandomSensorReading(autoCruiseData),
      voiceControl: getRandomSensorReading(voiceControlData),
      outdoorTemp: getRandomSensorReading(outdoorTempData),
      indoorTemp: getRandomSensorReading(indoorTempData),
      timeOnRoad: getRandomSensorReading(totalTimeOnRoadData),
      trafficDelays: getRandomSensorReading(trafficDelaysData),
    };

    // Helper function to extract numerical values
    const extractNumericValue = (value) => {
      const match = value.match(/[\d.]+/);
      return match ? parseFloat(match[0]) : null; // Extract the first numeric value
    };

    // Transform readings to include only numerical values
    const processedReadings = Object.fromEntries(
      Object.entries(newReadings).map(([key, reading]) => [
        key,
        reading ? extractNumericValue(reading.value) : null,
      ])
    );

    // Push data to Firebase
    const dataRef = ref(database, "sensorReadings");
    push(dataRef, processedReadings)
      .then(() => {
        console.log("Data pushed to Firebase successfully!");
      })
      .catch((error) => {
        console.error("Error pushing data to Firebase:", error);
      });

    setRandomReadings(newReadings); // Update state with original readings for UI display
  };

  // Extract value function
  const extractValue = (value) => {
    const match = value.match(/[\d.]+/); // Extracts the first numeric value
    return match ? match[0] : "N/A"; // Returns the numeric value or "N/A" if none found
  };

  return (
    <View className="bg-primary h-full">
      <SafeAreaView className="flex-1 px-4">
        <ScrollView className="flex-1">
          {/* Top Bar */}
          <View className="flex-row justify-between items-center mb-6">
            {/* Back Button */}
            <TouchableOpacity
              onPress={() => router.back()} // Navigate back
              className="p-2"
            >
              <View className="rounded-lg border-[1px] border-white p-2">
                <Image
                  source={icons.back} // Replace with your back icon path
                  className="w-6 h-6"
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>

            {/* Page Title */}
            <View className="flex-1 items-center">
              <Text className="text-white text-xl font-bold">Demo Test</Text>
            </View>

            {/* Placeholder for alignment */}
            <View className="w-6" />
          </View>

          {/* Location Section */}
          <View className="bg-gray-900 rounded-lg p-4 mb-6">
            <View>
              <Text className="text-gray-400 text-sm">From:</Text>
              <Text className="text-white text-base font-semibold mb-2">
                Kuala Lumpur, Malaysia
              </Text>
              <Text className="text-gray-400 text-sm">To:</Text>
              <Text className="text-white text-base font-semibold">
                Putrajaya, Malaysia
              </Text>
              {/* Distance */}
              <View className="border-t border-gray-700 my-4" />
              <View className="flex-row items-center justify-between bg-secondary rounded-lg p-4">
                <Text className="text-white text-lg font-bold">Distance:</Text>
                <Text className="text-white text-xl font-extrabold">25 KM</Text>
              </View>
            </View>
          </View>

          {/* Vehicle Sensors Section */}
          <View className="bg-gray-900 rounded-lg p-4 mb-6">
            <Text className="text-white text-xl font-bold mb-4">
              Vehicle Sensors
            </Text>

            {/* Air Conditioning */}
            <View className="mb-4">
              <Text className="text-white text-lg font-semibold">
                Air Conditioning (kW/h)
              </Text>
              <Text className="text-green-400 text-sm">
                {randomReadings.airCon
                  ? extractValue(randomReadings.airCon.value)
                  : "N/A"}{" "}
                kW/h
              </Text>
            </View>

            {/* Engine Power */}
            <View className="mb-4">
              <Text className="text-white text-lg font-semibold">
                Engine Power (kW)
              </Text>
              <Text className="text-yellow-400 text-sm">
                {randomReadings.enginePower
                  ? extractValue(randomReadings.enginePower.value)
                  : "N/A"}{" "}
                kW
              </Text>
            </View>

            {/* Unlock/Lock Car */}
            <View className="mb-4">
              <Text className="text-white text-lg font-semibold">
                Unlock/Lock Car (kW per operation)
              </Text>
              <Text className="text-red-400 text-sm">
                {randomReadings.unlockLock
                  ? extractValue(randomReadings.unlockLock.value)
                  : "N/A"}{" "}
                kW per operation
              </Text>
            </View>

            {/* Car Boot */}
            <View className="mb-4">
              <Text className="text-white text-lg font-semibold">
                Car Boot (kW/h)
              </Text>
              <Text className="text-green-400 text-sm">
                {randomReadings.carBoot
                  ? extractValue(randomReadings.carBoot.value)
                  : "N/A"}{" "}
                kW/h
              </Text>
            </View>

            {/* Lights */}
            <View className="mb-4">
              <Text className="text-white text-lg font-semibold">
                Lights (kW/h)
              </Text>
              <Text className="text-yellow-400 text-sm">
                {randomReadings.lights
                  ? extractValue(randomReadings.lights.value)
                  : "N/A"}{" "}
                kW/h
              </Text>
            </View>
          </View>

          {/* Infotainment System Section */}
          <View className="bg-gray-900 rounded-lg p-4 mb-6">
            <Text className="text-white text-xl font-bold mb-4">
              Infotainment System
            </Text>

            {/* Tablet Usage */}
            <View className="mb-4">
              <Text className="text-white text-lg font-semibold">
                Tablet Usage (kW/h)
              </Text>
              <Text className="text-green-400 text-sm">
                {randomReadings.tabletUsage
                  ? extractValue(randomReadings.tabletUsage.value)
                  : "N/A"}{" "}
                kW/h
              </Text>
            </View>

            {/* Auto Cruise */}
            <View className="mb-4">
              <Text className="text-white text-lg font-semibold">
                Auto Cruise (kW)
              </Text>
              <Text className="text-yellow-400 text-sm">
                {randomReadings.autoCruise
                  ? extractValue(randomReadings.autoCruise.value)
                  : "N/A"}{" "}
                kW
              </Text>
            </View>

            {/* Voice Control */}
            <View className="mb-4">
              <Text className="text-white text-lg font-semibold">
                Voice Control (kW/h)
              </Text>
              <Text className="text-red-400 text-sm">
                {randomReadings.voiceControl
                  ? extractValue(randomReadings.voiceControl.value)
                  : "N/A"}{" "}
                kW/h
              </Text>
            </View>
          </View>

          {/* Weather Conditions Section */}
          <View className="bg-gray-900 rounded-lg p-4 mb-6">
            <Text className="text-white text-xl font-bold mb-4">
              Weather Conditions
            </Text>

            {/* Average Outdoor Temperature */}
            <View className="mb-4">
              <Text className="text-white text-lg font-semibold">
                Average Outdoor Temperature (°C)
              </Text>
              <Text className="text-green-400 text-sm">
                {randomReadings.outdoorTemp
                  ? extractValue(randomReadings.outdoorTemp.value)
                  : "N/A"}
                °C
              </Text>
            </View>

            {/* Average Indoor Temperature */}
            <View className="mb-4">
              <Text className="text-white text-lg font-semibold">
                Average Indoor Temperature (°C)
              </Text>
              <Text className="text-yellow-400 text-sm">
                {randomReadings.indoorTemp
                  ? extractValue(randomReadings.indoorTemp.value)
                  : "N/A"}
                °C
              </Text>
            </View>
          </View>

          {/* Traffic Conditions Section */}
          <View className="bg-gray-900 rounded-lg p-4 mb-6">
            <Text className="text-white text-xl font-bold mb-4">
              Traffic Conditions
            </Text>

            {/* Total Time on Road */}
            <View className="mb-4">
              <Text className="text-white text-lg font-semibold">
                Total Time on Road (minutes)
              </Text>
              <Text className="text-green-400 text-sm">
                {randomReadings.timeOnRoad
                  ? extractValue(randomReadings.timeOnRoad.value)
                  : "N/A"}{" "}
                minutes
              </Text>
            </View>

            {/* Traffic Delays */}
            <View className="mb-4">
              <Text className="text-white text-lg font-semibold">
                Traffic Delays (minutes)
              </Text>
              <Text className="text-yellow-400 text-sm">
                {randomReadings.trafficDelays
                  ? extractValue(randomReadings.trafficDelays.value)
                  : "N/A"}{" "}
                minutes
              </Text>
            </View>
          </View>

          {/* Random Button at the Bottom */}
          <TouchableOpacity
            onPress={handleRandomButtonClick}
            className="bg-secondary rounded-lg p-4 mt-6 mb-4"
          >
            <Text className="text-white text-center text-lg font-bold">
              Random
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default DemoPage;
