import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { Stack } from 'expo-router';
const RentalVehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchRentalVehicles();
  }, []);

  const fetchRentalVehicles = async () => {
    try {
      const response = await axios.post('https://agriconnect-api.onrender.com/listRental');
      setVehicles(response.data);
    } catch (error) {
      console.error('Error fetching rental vehicles:', error);
    }
  };

  const renderVehicleItem = ({ item }) => (
    <View style={styles.vehicleItem}>
      <Text style={styles.vehicleText}>Owner: {item.owner}</Text>
      <Text style={styles.vehicleText}>Model: {item.model}</Text>
      <Text style={styles.vehicleText}>Location: {item.location}</Text>
      <Text style={styles.vehicleText}>Available: {item.available ? 'Yes' : 'No'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
        <Stack.Screen options={{title:'List of rental'}} />
      <Text style={styles.title}>Rental Vehicles</Text>
      <FlatList
        data={vehicles}
        renderItem={renderVehicleItem}
        keyExtractor={item => item.id}
        style={styles.vehicleList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  vehicleList: {
    flex: 1,
    marginTop: 10,
  },
  vehicleItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  vehicleText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default RentalVehicleList;
