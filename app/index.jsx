import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-base">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-blue-700">Go to Test Page</Link>
    </View>
  );
}
