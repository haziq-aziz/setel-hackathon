import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

import "../global.css";


const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default RootLayout