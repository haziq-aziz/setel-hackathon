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

  const handleSettingPress = () => {
     router.push("/(tabs)/settings");
  };

  const handleControlPress = () => {
    router.push("/(tabs)/control"); // Ensure this matches your actual path
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
            {/* Top Bar */}
            <View className="flex-row justify-between items-center w-full p-2">
              <TouchableOpacity onPress={handleSettingPress}>
                <View className="border border-white rounded-lg p-2">
                  <Image
                    source={icons.menu}
                    className="w-6 h-6"
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>

              <View className="absolute inset-x-0 items-center">
                <Text className="text-white text-2xl font-semibold">
                  Produa e-MyVee
                </Text>
              </View>
              <View className="border-[1px] border-white p-2 rounded-lg">
                <Image
                  source={icons.profile}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Temperature and Location Section */}
            <View className="mt-2 items-center">
              <Text className="text-white text-xl font-bold">34°C</Text>
              <Text className="text-gray-300 text-lg font-medium">
                Kuala Lumpur, MY
              </Text>
            </View>

            {/* Battery, Range, and Car Image Section */}
            <View className="mt-6 flex-row items-center">
              <View className="flex-[0.25] flex-col justify-between mr-4">
                <View className="mb-6">
                  <Text className="text-white text-3xl font-bold">85%</Text>
                  <Text className="text-gray-400 text-xs">Battery</Text>
                </View>
                <View>
                  <Text className="text-white text-3xl font-bold">320 km</Text>
                  <Text className="text-gray-400 text-xs">Estimated Range</Text>
                </View>
              </View>

              <View className="flex-1 h-48 justify-center items-center">
                <Image
                  source={images.myvi}
                  className="h-full w-full"
                  resizeMode="contain"
                />
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
