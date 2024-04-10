import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';
import { router } from 'expo-router';

const Job = () => {

  const [username, setusername] = useState('');
  const [pmail, setpmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setlocation] = useState('');
  const [userLocation, setUserLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    // setLoading(true);
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLoading(false); // Set loading to false here
        return;
      }
      let loca = await Location.getCurrentPositionAsync({});
      setUserLocation({ latitude: loca.coords.latitude, longitude: loca.coords.longitude });
    })() // Set loading to false after the async operation completes
  }, []);
  const handleSubmit = async () => {
    try {
      // Make POST request to your backend API
      const response = await axios.post('https://agriconnect-api.onrender.com/postJob', {
        username: username,
        pmail: pmail,
        phoneNumber: phoneNumber.toString(),
        latitude: userLocation.latitude.toString(),
        longitude: userLocation.longitude.toString(),
        location:location,
      });
      console.log('User details submitted successfully:', response.data);
      Alert.alert("Success", "Your job has been posted");
      router.back();
      // Optionally, navigate to another screen or display a success message
    } catch (error) {
      console.error('Error submitting user details:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name {userLocation.latitude}</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={text => setusername(text)}
      />
      <Text style={styles.label}>Mail</Text>
      <TextInput
        style={styles.input}
        value={pmail}
        onChangeText={text => setpmail(text)}
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={text => setlocation(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:"#e8f7f4"
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
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});

export default Job;
