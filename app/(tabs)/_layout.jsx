import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redierct } from 'expo-router'

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tile: "Home",
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="demo"
          options={{
            tile: "Demo",
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tile: "Settings",
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="control"
          options={{
            tile: "Control",
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        />
      </Tabs>
    </>
  );
}

export default TabsLayout