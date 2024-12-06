import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"; // Importing useRouter correctly
import React, { useState, useEffect } from "react"; // Importing useState and useEffect from React
import { LineChart } from "react-native-chart-kit";
import { icons } from "../../constants"; // Assuming icons are defined here

const Power = ({ route }) => {
  const router = useRouter();
  const [powerConsumption, setPowerConsumption] = useState(45); // Default value

  // Accessing the query safely
  const { powerConsumption: queryPowerConsumption } = router.query || {};

  useEffect(() => {
    if (queryPowerConsumption) {
      setPowerConsumption(parseFloat(queryPowerConsumption)); // Set the power consumption from the query param
    }
  }, [queryPowerConsumption]);

  const handleBackPress = () => {
    setPowerConsumption(25); // Update power consumption on back press
    router.back(); // Navigate back
  };

  return (
    <View className="h-full bg-primary">
      <SafeAreaView className="flex-1 px-4">
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          {/* Header */}
          <View className="flex-row justify-between items-center mb-6">
            <TouchableOpacity onPress={handleBackPress} className="p-2">
              <View className="rounded-lg border border-white p-2">
                <Image
                  source={icons.back}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>

            <Text className="text-white text-xl font-semibold">
              Power Management
            </Text>

            <View className="w-6" />
          </View>

          {/* AI Overview Section */}
          <View className="border-2 border-secondary rounded-lg p-4 mb-6">
            <Text className="text-white text-lg font-semibold mb-2">
              AI Optimization at Work
            </Text>
            <Text className="text-gray-300 text-sm">
              Your car’s power usage is being optimized for maximum efficiency.
              Adjustments are being made dynamically to extend battery life.
            </Text>
          </View>

          {/* Stats Section */}
          <View className="flex-row justify-between mb-6">
            {/* Stat Card: Current Usage */}
            <View className="flex-1 bg-gray-800 rounded-lg p-4 mr-2">
              <Text className="text-gray-400 text-sm">Current Usage</Text>
              <Text className="text-white text-3xl font-bold">
                {powerConsumption} kW/h
              </Text>
            </View>

            {/* Stat Card: Suggested Daily Usage */}
            <View className="flex-1 bg-gray-800 rounded-lg p-4 ml-2">
              <Text className="text-gray-400 text-sm">Suggested Usage</Text>
              <Text className="text-secondary text-3xl font-bold">25 kW/h</Text>
            </View>
          </View>

          {/* Graph Section */}
          <View className="bg-gray-800 rounded-lg p-4 mb-6">
            <Text className="text-white text-lg font-semibold mb-4">
              Power Usage (Last 30 Days)
            </Text>
            <LineChart
              data={{
                labels: [
                  "Day 1",
                  "Day 5",
                  "Day 10",
                  "Day 15",
                  "Day 20",
                  "Day 30",
                ],
                datasets: [
                  {
                    data: [45, 50, 40, 60, 35, 25], // Example power consumption data
                  },
                ],
              }}
              width={300} // from react-native
              height={200}
              yAxisSuffix=" kW"
              chartConfig={{
                backgroundColor: "#000",
                backgroundGradientFrom: "#1E2923",
                backgroundGradientTo: "#08130D",
                decimalPlaces: 1, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0, 191, 177, ${opacity})`, // Secondary color
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#00BFB1",
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>

          {/* AI Actionable Insights */}
          <View className="border-2 border-secondary rounded-lg p-4">
            <Text className="text-white text-lg font-semibold mb-2">
              AI Actionable Insights
            </Text>
            <Text className="text-gray-300 text-sm mb-2">
              AI has analyzed your current usage patterns and recommends:
            </Text>
            <View className="flex-row justify-between mb-4">
              {/* Insight 1 */}
              <View className="flex-1 bg-gray-800 rounded-lg p-4 mr-2">
                <Text className="text-secondary text-lg font-semibold">
                  Save 10%
                </Text>
                <Text className="text-gray-300 text-sm">
                  By reducing heavy power drain during peak hours.
                </Text>
              </View>

              {/* Insight 2 */}
              <View className="flex-1 bg-gray-800 rounded-lg p-4 ml-2">
                <Text className="text-white text-lg font-semibold">
                  Optimize Charging
                </Text>
                <Text className="text-gray-300 text-sm">
                  Use AI scheduling to charge during off-peak hours.
                </Text>
              </View>
            </View>

            <Text className="text-secondary text-sm font-semibold">
              Implement these changes to improve efficiency!
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Power;
