import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { router, Stack } from 'expo-router';
const VehicleForm = () => {
  const [owner, setOwner] = useState('');
  const [model, setModel] = useState('');
  const [location, setLocation] = useState('');
  const [available, setAvailable] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://agriconnect-api.onrender.com/addRental', {
        owner:owner,
        model:model,
        location:location,
        available:true
      });
      console.log('Vehicle details submitted successfully:', response.data);
      router.push('/user/')
      // Optionally, navigate to another screen or display a success message
    } catch (error) {
      console.error('Error submitting vehicle details:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <View style={styles.container}>
        <Stack.Screen options={{title:'RentOut'}} />
      <Text style={styles.label}>Owner</Text>
      <TextInput
        style={styles.input}
        value={owner}
        onChangeText={text => setOwner(text)}
      />
      <Text style={styles.label}>Model</Text>
      <TextInput
        style={styles.input}
        value={model}
        onChangeText={text => setModel(text)}
      />
      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={text => setLocation(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    alignSelf:"flex-start"
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VehicleForm;
