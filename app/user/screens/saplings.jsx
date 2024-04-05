import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Saplings() {
  return (
    <View>
      <Stack.Screen options={{title:'Saplings'}} />

      <Text>Saplings</Text>
    </View>
  )
}