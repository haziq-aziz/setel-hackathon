import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const Kyb = () => {
  return (
    <View className="bg-primary h-full">
          <SafeAreaView className="flex-1 px-4">
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="mt-6 flex-row items-center border-2 border-secondary rounded-xl p-6">
                    <Text className="text-white">Test</Text>
                </View>
                  
              </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Kyb