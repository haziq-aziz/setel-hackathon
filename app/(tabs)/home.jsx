import { View, Text, Image, TouchableOpacity, ScrollView, Alert, Modal } from "react-native";
import React, { useState, useEffect } from "react";
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

  const [modalVisible, setModalVisible] = useState(false);

  const [powerConsumption, setPowerConsumption] = useState(45);

  // Show alert on load
  useEffect(() => {
    setModalVisible(true); // Directly show the modal instead of Alert.alert
  }, []);


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

  const handleKYBPress = () => {
    router.push("/(tabs)/kyb"); // Ensure this matches your actual path
  };

  const handlePowerPress = () => {
    setPowerConsumption(25); // Set to 25 kW/h immediately
    router.push(`/power?powerConsumption=25`); // Pass it to Power screen
  };

  useEffect(() => {
    if (router.query && router.query.updatedPower) {
      setPowerConsumption(parseFloat(router.query.updatedPower));
    }
  }, [router.query]);

  const handleKYCPress = () => {
    router.push("/(tabs)/kyc"); // Ensure this matches your actual path
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
          {/* Custom Alert Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            {/* Background Overlay */}
            <View
              className="flex-1 justify-center items-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              {/* Modal Content */}
              <View className="bg-gray-800 rounded-lg p-6 w-4/5">
                <Text className="text-red-500 text-lg font-bold mb-2">
                  High Power Consumption
                </Text>
                <Text className="text-gray-300 mb-4">
                  You're using {powerConsumption} kW/h! This may increase costs
                  and strain your vehicle. Consider optimizing usage.
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  className="bg-secondary py-2 px-4 rounded-lg"
                >
                  <Text className="text-white text-center font-semibold">
                    Got it
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {/* Static Streak Feature */}
            <View className="mt-6">
              <Text className="text-white text-lg font-bold mb-2 text-center">
                Week 1 Streak
              </Text>
              <View className="flex-row justify-between px-4">
                {[
                  { day: "Mon", active: true },
                  { day: "Tue", active: true },
                  { day: "Wed", active: true },
                  { day: "Thu", active: false },
                  { day: "Fri", active: false },
                  { day: "Sat", active: false },
                  { day: "Sun", active: false },
                ].map((streak, index) => (
                  <View key={index} className="flex-col items-center">
                    <Image
                      source={icons.streak}
                      className="w-12 h-12"
                      resizeMode="contain"
                      style={{
                        tintColor: streak.active ? "#FFB400" : "#6B7280",
                      }}
                    />
                    <Text
                      className={`mt-2 text-sm font-semibold ${
                        streak.active ? "text-secondary" : "text-gray-500"
                      }`}
                    >
                      {streak.day}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

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
              {/* Left Container as a static View */}
              <View className="flex-1 border-2 border-secondary rounded-lg p-4 mr-2">
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
              </View>

              {/* Right Container wrapped in TouchableOpacity */}
              <TouchableOpacity
                className="flex-1 border-2 border-secondary rounded-lg p-4 ml-2"
                onPress={handlePowerPress}
              >
                <Text className="text-white text-lg font-semibold">
                  Power Consumption
                </Text>
                <View className="flex-col items-center mt-2">
                  {/* Conditionally Render the Icon */}
                  {powerConsumption > 25 ? (
                    <Image
                      source={icons.warning} // Replace with your warning icon
                      className="w-14 h-14"
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={icons.safe} // Replace with your safe icon
                      className="w-14 h-14"
                      resizeMode="contain"
                    />
                  )}
                  {/* Conditionally Render Text */}
                  <Text
                    className={`text-4xl font-bold ${
                      powerConsumption > 25 ? "text-red-500" : "text-secondary"
                    }`}
                  >
                    {powerConsumption}
                  </Text>
                  <Text className="text-gray-300 text-sm">kW/h</Text>
                </View>
              </TouchableOpacity>
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
                onPress={handleKYBPress}
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
