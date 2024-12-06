import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { icons } from "../../constants";

const SettingsPage = () => {
  const router = useRouter();

  return (
    <View className="h-full" style={{ backgroundColor: "#141E27" }}>
      <SafeAreaView className="flex-1 px-4">
        <ScrollView className="flex-1">
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
              <Text className="text-white text-xl font-bold">Settings</Text>
            </View>

            {/* Placeholder for alignment */}
            <View className="w-6" />
          </View>

          {/* Settings Sections */}
          <View className="space-y-6">
            {/* Security & Privacy */}
            <TouchableOpacity
              className="p-4 rounded-lg mb-2"
              style={{ backgroundColor: "#1F2937" }}
            >
              <Text className="text-white text-lg font-semibold">
                Security & Privacy
              </Text>
            </TouchableOpacity>

            {/* Vehicle Settings */}
            <TouchableOpacity
              className="p-4 rounded-lg mb-2"
              style={{ backgroundColor: "#1F2937" }}
            >
              <Text className="text-white text-lg font-semibold">
                Vehicle Settings
              </Text>
            </TouchableOpacity>

            {/* Language */}
            <TouchableOpacity
              className="p-4 rounded-lg mb-2"
              style={{ backgroundColor: "#1F2937" }}
            >
              <Text className="text-white text-lg font-semibold">Language</Text>
            </TouchableOpacity>

            {/* Notifications */}
            <TouchableOpacity
              className="p-4 rounded-lg mb-2"
              style={{ backgroundColor: "#1F2937" }}
            >
              <Text className="text-white text-lg font-semibold">
                Notifications
              </Text>
            </TouchableOpacity>

            {/* Theme */}
            <TouchableOpacity
              className="p-4 rounded-lg mb-2"
              style={{ backgroundColor: "#1F2937" }}
            >
              <Text className="text-white text-lg font-semibold">Theme</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* Logout Button */}
        <View className="justify-end mb-4">
          <TouchableOpacity
            className="p-4 rounded-lg flex-row justify-center items-center"
            style={{ backgroundColor: "#307EF3" }}
          >
            <Text className="text-white text-lg font-semibold">Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SettingsPage;
