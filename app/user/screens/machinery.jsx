import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
export default function Machinery() {
  return (
    <View>
      <Stack.Screen options={{title:'Machinery'}} />
      <Text>Machinery</Text>
    </View>
  )
}