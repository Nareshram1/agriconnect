import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Fertilizers() {
  return (
    <View>
     <Stack.Screen options={{title:'Fertilizers'}} />
      <Text>Fertilizers</Text>
    </View>
  )
}