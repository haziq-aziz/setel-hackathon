import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { images, icons } from "../../constants";

// Add animated progress bars
const AnimatedProgressBar = ({ progress, color }) => {
  const [width, setWidth] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(width, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View
      className="h-2 mt-2 rounded-full"
      style={{ backgroundColor: "#2D3748" }}
    >
      <Animated.View
        className="h-full rounded-full"
        style={{
          width: width.interpolate({
            inputRange: [0, 100],
            outputRange: ["0%", "100%"],
          }),
          backgroundColor: color,
        }}
      />
    </View>
  );
};

const CheckCar = () => {
  const router = useRouter();

  const aiSuggestion =
    "Your brakes need urgent attention! It's recommended to visit a service center for immediate maintenance.";

  const maintenanceHistory = [
    { date: "2024-11-01", task: "Tire Rotation", status: "Completed" },
    { date: "2024-10-15", task: "Battery Check", status: "Completed" },
    { date: "2024-09-25", task: "Motor Coolant Change", status: "Pending" },
  ];

  return (
    <View
      className="h-full"
      style={{
        backgroundColor: "#141E27",
        background: "linear-gradient(to bottom, #141E27, #1F2937)",
      }}
    >
      <SafeAreaView className="flex-1 px-4">
        <ScrollView className="flex-1">
          {/* Top Bar */}
          <View className="flex-row justify-between items-center mb-6">
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

            <View className="flex-1 items-center">
              <Text className="text-white text-2xl font-bold">
                AI Maintenance Monitor
              </Text>
            </View>

            <View className="w-6" />
          </View>

          {/* Car Body Image */}
          <View className="mb-6">
            <Image
              source={images.maintenance} // Replace with your maintenance image source
              className="w-full h-40 rounded-lg shadow-xl"
              resizeMode="contain"
            />
          </View>

          {/* AI Monitor EV Maintenance Section */}
          <View className="space-y-6">
            {/* Motor Coolant */}
            <View
              className="p-4 rounded-lg flex-row items-center mb-2"
              style={{
                backgroundColor: "#1F2937",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 6,
              }}
            >
              <Image
                source={icons.coolant}
                className="w-14 h-14 mr-4"
                resizeMode="contain"
              />
              <View className="flex-1">
                <Text className="text-white font-semibold text-lg">
                  Motor Coolant
                </Text>
                <Text className="text-yellow-500 text-sm">Check in 2000km</Text>
                <AnimatedProgressBar progress={80} color="#FFB400" />
              </View>
            </View>

            {/* Tires */}
            <View
              className="p-4 rounded-lg flex-row items-center mb-2"
              style={{
                backgroundColor: "#1F2937",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 6,
              }}
            >
              <Image
                source={icons.tyre}
                className="w-14 h-14 mr-4"
                resizeMode="contain"
              />
              <View className="flex-1">
                <Text className="text-white font-semibold text-lg">Tires</Text>
                <Text className="text-yellow-500 text-sm">
                  Rotate in 1000km
                </Text>
                <AnimatedProgressBar progress={50} color="#FFB400" />
              </View>
            </View>

            {/* Brakes */}
            <View
              className="p-4 rounded-lg flex-row items-center mb-2"
              style={{
                backgroundColor: "#1F2937",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 6,
              }}
            >
              <Image
                source={icons.brake}
                className="w-14 h-14 mr-4"
                resizeMode="contain"
              />
              <View className="flex-1">
                <Text className="text-white font-semibold text-lg">Brakes</Text>
                <Text className="text-red-500 text-sm">Urgent</Text>
                <AnimatedProgressBar progress={20} color="#FF0000" />
              </View>
            </View>

            {/* Battery Health */}
            <View
              className="p-4 rounded-lg flex-row items-center mb-2"
              style={{
                backgroundColor: "#1F2937",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 6,
              }}
            >
              <Image
                source={icons.battery}
                className="w-14 h-14 mr-4"
                resizeMode="contain"
              />
              <View className="flex-1">
                <Text className="text-white font-semibold text-lg">
                  Battery
                </Text>
                <Text className="text-green-500 text-sm">Healthy</Text>
                <AnimatedProgressBar progress={90} color="#00FF00" />
              </View>
            </View>
          </View>

          {/* AI Analysis Section */}
          <View
            className="p-4 rounded-lg mt-6 border-2 border-secondary"
            style={{
              backgroundColor: "#2D3748",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 6,
            }}
          >
            <Text className="text-white text-lg font-semibold">
              AI Maintenance Analysis
            </Text>
            <Text className="text-white mt-2">{aiSuggestion}</Text>
          </View>

          {/* Maintenance History Section */}
          <View
            className="p-4 rounded-lg mt-6"
            style={{ backgroundColor: "#2D3748" }}
          >
            <Text className="text-white text-lg font-semibold">
              Maintenance History
            </Text>
            <View className="mt-2">
              {maintenanceHistory.map((item, index) => (
                <View key={index} className="flex-row justify-between mb-2">
                  <Text className="text-white text-sm">{item.date}</Text>
                  <Text className="text-gray-300 text-sm">{item.task}</Text>
                  <Text
                    className={
                      item.status === "Completed"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {item.status}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Maintenance Tips Section */}
          <View
            className="p-4 rounded-lg mt-6"
            style={{
              backgroundColor: "#2D3748",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 6,
            }}
          >
            <Text className="text-white text-lg font-semibold">
              Maintenance Tips
            </Text>
            <Text className="text-white mt-2">
              Check your tire pressure regularly to ensure smooth driving and
              avoid accidents.
            </Text>
            <Text className="text-white mt-2">
              Don't wait for your battery to die; check its health periodically
              for optimal performance.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default CheckCar;
