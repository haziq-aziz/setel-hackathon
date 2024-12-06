import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { icons } from "../../constants";
import { images } from "../../constants";

const Home = () => {
  const [lockActive, setLockActive] = useState(false);
  const [acActive, setAcActive] = useState(false);
  const [engineActive, setEngineActive] = useState(false);
  const [bootActive, setBootActive] = useState(false);

  const router = useRouter();

  const handleDemoPress = () => {
    router.push("/(tabs)/demo"); // Ensure this matches your actual path
  };

  const handleBatteryPress = () => {
     router.push("/(tabs)/battery");
  };

  const handleControlPress = () => {
    router.push("/(tabs)/control"); // Ensure this matches your actual path
  };

  const handleLocationPress = () => {
    router.push("/(tabs)/location"); // Ensure this matches your actual path
  };

  const toggleButton = (buttonName) => {
    switch (buttonName) {
      case "lock":
        setLockActive(!lockActive);
        break;
      case "ac":
        setAcActive(!acActive);
        break;
      case "engine":
        setEngineActive(!engineActive);
        break;
      case "boot":
        setBootActive(!bootActive);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <View className="bg-primary h-full">
        <SafeAreaView className="flex-1 px-4">
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {/* Car Details */}
            <View className="mt-6 flex-row items-center border-2 border-secondary rounded-xl p-6">
              <View className="flex-1 flex-col justify-between mr-4">
                <View className="mb-4">
                  <Text className="text-white text-xl font-bold">
                    Perodua My-Evee
                  </Text>
                  <Text className="text-gray-400 text-sm">SU541</Text>
                </View>
                {/* Action Button */}
                <TouchableOpacity className="bg-secondary py-2 px-4 rounded-lg">
                  <Text className="text-primary text-lg font-bold text-center">
                    Change Car
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="flex-1 items-center">
                <Image
                  source={images.myvi}
                  className="w-full h-32"
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* New Containers Section */}
            <View className="mt-4 flex-row justify-between">
              {/* Left Container wrapped in TouchableOpacity */}
              <TouchableOpacity
                className="flex-1 border-2 border-secondary rounded-lg p-4 mr-2"
                onPress={handleBatteryPress}
              >
                <Text className="text-white text-lg font-semibold">
                  Battery
                </Text>
                <Text className="text-gray-300 text-sm">
                  Last charge 6 days ago
                </Text>

                {/* Image and Details Section */}
                <View className="flex-row justify-between items-center mt-4">
                  {/* Left Section: Battery Image */}
                  <Image
                    source={images.battery} // Replace with your image source
                    className="w-12 h-12"
                    resizeMode="contain"
                  />

                  {/* Right Section: Battery Percentage and Distance */}
                  <View className="flex-col items-end">
                    <Text className="text-white text-lg font-bold">54%</Text>
                    <View className="w-full h-[1px] bg-gray-500 my-2" />
                    <Text className="text-white text-lg font-bold">130km</Text>
                    <Text className="text-gray-300 text-sm">Moved</Text>
                    <View className="w-full h-[1px] bg-gray-500 my-2" />
                    <Text className="text-white text-lg font-bold">~145km</Text>
                    <Text className="text-gray-300 text-sm">Left</Text>
                  </View>
                </View>
              </TouchableOpacity>

              {/* Right Container */}
              <View className="flex-1 border-2 border-secondary rounded-lg p-4 ml-2">
                <Text className="text-white text-lg font-semibold">
                  Power Consumption
                </Text>

                {/* Power Consumption Details */}
                <View className="flex-col items-center mt-2">
                  {/* Warning Image */}
                  <Image
                    source={icons.warning} // Replace with your icon or image source
                    className="w-14 h-14 mb-2"
                    resizeMode="contain"
                  />
                  <Text className="text-red-500 text-4xl font-bold">60</Text>
                  <Text className="text-gray-300 text-sm">kW/h</Text>
                </View>
              </View>
            </View>

            {/* Car Control Section */}
            <View className="mt-8">
              <View className="flex-row justify-between">
                <TouchableOpacity
                  className={`${
                    lockActive ? "bg-secondary" : "bg-gray-800"
                  } w-20 h-20 rounded-lg justify-center items-center`}
                  onPress={() => toggleButton("lock")}
                >
                  <Text className="text-white text-sm">Lock</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`${
                    acActive ? "bg-secondary" : "bg-gray-800"
                  } w-20 h-20 rounded-lg justify-center items-center`}
                  onPress={() => toggleButton("ac")}
                >
                  <Text className="text-white text-sm">A/C</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`${
                    engineActive ? "bg-secondary" : "bg-gray-800"
                  } w-20 h-20 rounded-lg justify-center items-center`}
                  onPress={() => toggleButton("engine")}
                >
                  <Text className="text-white text-sm">Engine</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`${
                    bootActive ? "bg-secondary" : "bg-gray-800"
                  } w-20 h-20 rounded-lg justify-center items-center`}
                  onPress={() => toggleButton("boot")}
                >
                  <Text className="text-white text-sm">Boot</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Additional Sections as Buttons */}
            <View className="mt-8 space-y-4">
              <TouchableOpacity
                className="bg-gray-900 p-4 rounded-lg flex-row justify-between items-center"
                style={{ marginBottom: 12 }}
                onPress={handleControlPress}
              >
                <Text className="text-white text-lg font-semibold">
                  Controls
                </Text>
                <Image
                  source={icons.menu}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-gray-900 p-4 rounded-lg flex-row justify-between items-center"
                style={{ marginBottom: 12 }}
              >
                <Text className="text-white text-lg font-semibold">
                  Climate
                </Text>
                <Image
                  source={icons.menu}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-gray-900 p-4 rounded-lg flex-row justify-between items-center"
                style={{ marginBottom: 12 }}
                onPress={handleLocationPress}
              >
                <Text className="text-white text-lg font-semibold">
                  Location
                </Text>
                <Image
                  source={icons.menu}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-gray-900 p-4 rounded-lg flex-row justify-between items-center"
                style={{ marginBottom: 12 }}
              >
                <Text className="text-white text-lg font-semibold">
                  Know Your Behavior
                </Text>
                <Image
                  source={icons.menu}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-gray-900 p-4 rounded-lg flex-row justify-between items-center"
                style={{ marginBottom: 12 }}
              >
                <Text className="text-white text-lg font-semibold">
                  Know Your Car
                </Text>
                <Image
                  source={icons.menu}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                className="bg-secondary p-4 rounded-lg flex-row justify-center items-center w-full mb-2"
                onPress={handleDemoPress}
              >
                <Text className="text-white text-lg font-semibold">
                  Demo Driving
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Home;
