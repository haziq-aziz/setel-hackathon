import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <Text className="text-base text-white">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <View className="bg-secondary p-4 rounded-lg">
        <Link href="/home" className="text-white">Go to Test Page</Link>
      </View>
    </View>
  );
}
