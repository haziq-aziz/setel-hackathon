import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { icons } from "../../constants";

const ControlPage = () => {
  const router = useRouter();
  const [currentControl, setCurrentControl] = useState(0); // Tracks the current control

  const controls = [
    { name: "Vents", description: "Adjust the air vents for optimal airflow." },
    { name: "Tyre Pressure", description: "Check and manage tyre pressure." },
    { name: "Charging", description: "Lock and unock the charging nozzle" },
    {
      name: "Air Conditioning",
      description: "Manage air conditioning settings.",
    },
  ];

  const handleNext = () => {
    setCurrentControl((prev) => (prev + 1) % controls.length); // Cycle to next
  };

  const handlePrev = () => {
    setCurrentControl((prev) =>
      prev - 1 < 0 ? controls.length - 1 : prev - 1
    ); // Cycle to previous
  };

  const [airConditionLevel, setAirConditionLevel] = useState(0);
  const [selectedButton, setSelectedButton] = useState(null);


  return (
    <View className="h-full" style={{ backgroundColor: "#141E27" }}>
      <SafeAreaView className="flex-1 px-4">
        {/* Content Area */}
        <View className="flex-1">
          {/* Top Bar */}
          <View className="flex-row justify-between items-center mb-6">
            {/* Back Button */}
            <TouchableOpacity
              onPress={() => router.back()} // Navigate back
              className="p-2"
            >
              <View className="rounded-lg border border-white p-2">
                <Image
                  source={icons.back} // Replace with your back icon path
                  className="w-6 h-6"
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>

            {/* Page Title */}
            <View className="flex-1 items-center">
              <Text className="text-white text-xl font-bold">Controls</Text>
            </View>

            {/* Placeholder for alignment */}
            <View className="w-6" />
          </View>

          {/* Control Panel */}
          <View className="flex-1 items-center justify-center">
            {/* Container for Buttons */}
            <View className="w-64 h-64 relative bg-gray-800 rounded-2xl">
              {currentControl === 0 && (
                // Vent Layout
                <>
                  {/* Top Left (FL) */}
                  <TouchableOpacity className="absolute top-[15%] left-[15%] w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Text className="text-white font-bold">FL</Text>
                  </TouchableOpacity>

                  {/* Top Right (FR) */}
                  <TouchableOpacity className="absolute top-[15%] right-[15%] w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Text className="text-white font-bold">FR</Text>
                  </TouchableOpacity>

                  {/* Bottom Left (BL) */}
                  <TouchableOpacity className="absolute bottom-[15%] left-[15%] w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Text className="text-white font-bold">BL</Text>
                  </TouchableOpacity>

                  {/* Bottom Right (BR) */}
                  <TouchableOpacity className="absolute bottom-[15%] right-[15%] w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Text className="text-white font-bold">BR</Text>
                  </TouchableOpacity>
                </>
              )}

              {currentControl === 1 && (
                // Tyre Pressure Layout
                <>
                  {/* Top Left (FL) */}
                  <View className="absolute top-[15%] left-[15%] w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                    <Text className="text-white font-bold">240 kPa</Text>
                  </View>

                  {/* Top Right (FR) */}
                  <View className="absolute top-[15%] right-[15%] w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                    <Text className="text-white font-bold">240 kPa</Text>
                  </View>

                  {/* Bottom Left (BL) */}
                  <View className="absolute bottom-[15%] left-[15%] w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                    <Text className="text-white font-bold">240 kPa</Text>
                  </View>

                  {/* Bottom Right (BR) */}
                  <View className="absolute bottom-[15%] right-[15%] w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                    <Text className="text-white font-bold">240 kPa</Text>
                  </View>
                </>
              )}

              {currentControl === 2 && (
                // Charging Layout
                <View className="absolute inset-0 flex items-center justify-center">
                  {/* ON and OFF Buttons */}
                  <View className="flex-row items-center justify-between w-64">
                    {/* ON Button */}
                    <TouchableOpacity
                      onPress={() => setSelectedButton("ON")} // Set ON as selected
                      className={`w-24 h-24 border-2 ${
                        selectedButton === "ON" ? "bg-gray-400" : "border-white"
                      } rounded-full flex items-center justify-center ml-6`}
                    >
                      <Text className="text-white font-semibold mb-2">ON</Text>
                      <Image
                        source={icons.lock} // Replace with the correct lock icon path
                        className="w-12 h-12"
                        resizeMode="contain"
                      />
                    </TouchableOpacity>

                    {/* OFF Button */}
                    <TouchableOpacity
                      onPress={() => setSelectedButton("OFF")} // Set OFF as selected
                      className={`w-24 h-24 border-2 ${
                        selectedButton === "OFF"
                          ? "bg-gray-400"
                          : "border-white"
                      } rounded-full flex items-center justify-center mr-6`}
                    >
                      <Text className="text-white font-semibold mb-2">OFF</Text>
                      <Image
                        source={icons.unlock} // Replace with the correct unlock icon path
                        className="w-12 h-12"
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {currentControl === 3 && (
                // Air Conditioning Layout
                <View className="absolute inset-0 flex items-center justify-center">
                  <Text className="text-white font-bold text-lg">
                    Air Conditioning
                  </Text>

                  {/* Range Adjustment */}
                  <View className="flex-row items-center space-x-6 mt-4">
                    {/* Decrease Button */}
                    <TouchableOpacity
                      onPress={
                        () =>
                          setAirConditionLevel((prev) => Math.max(16, prev - 1)) // Min temp is 16°C
                      }
                      className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4"
                    >
                      <Text className="text-white text-2xl font-bold">-</Text>
                    </TouchableOpacity>

                    {/* Current Level Display */}
                    <Text className="text-white text-2xl font-bold">
                      {airConditionLevel}°C
                    </Text>

                    {/* Increase Button */}
                    <TouchableOpacity
                      onPress={
                        () =>
                          setAirConditionLevel((prev) => Math.min(26, prev + 1)) // Max temp is 26°C
                      }
                      className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center ml-4"
                    >
                      <Text className="text-white text-2xl font-bold">+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>

            {/* Control Name and Description */}
            <Text className="text-white text-2xl font-bold mt-6">
              {controls[currentControl].name}
            </Text>
            <Text className="text-gray-400 text-md mt-2 text-center">
              {controls[currentControl].description}
            </Text>
          </View>

          {/* Navigation Buttons */}
          <View className="flex-row justify-between items-center mb-4">
            {/* Previous Button */}
            <TouchableOpacity
              onPress={handlePrev}
              className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center"
            >
              <Text className="text-white text-lg font-bold">{"<"}</Text>
            </TouchableOpacity>

            {/* Next Button */}
            <TouchableOpacity
              onPress={handleNext}
              className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center"
            >
              <Text className="text-white text-lg font-bold">{">"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ControlPage;
