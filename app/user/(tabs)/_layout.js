import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false
        }}
      />
            <Tabs.Screen
        name="hire"
        options={{
          title: 'Hire',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-plus" color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
          headerShown: false
        }}
      />

    </Tabs>
  );
}
