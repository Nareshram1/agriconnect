import { View, Text } from 'react-native'
import React from 'react'
import Button from '../../../components/Button'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {
  const handleLogOut=async()=>{
    await AsyncStorage.removeItem('UserToken')
    router.replace('/')
  }
  return (
    <View>
      <Text>Profile</Text>
      
      <Button text='Logout' onPress={handleLogOut}/>
    </View>
  )
}