import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, FlatList,StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Button from '../../../components/Button';
import { router } from 'expo-router';
export default function Hire() {
  const [userLocation, setUserLocation] = useState({ latitude: null, longitude: null });
  const [loading,setLoading] = useState(false)
  const [availableWorkers, setAvailableWorkers] = useState([]);

  useEffect(() => {
    setLoading(true);
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLoading(false); // Set loading to false here
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude });
    })().finally(() => setLoading(false)); // Set loading to false after the async operation completes
  }, []);

  useEffect(() => {
    setLoading(true)
    if (userLocation.latitude && userLocation.longitude) {
      fetchAvailableWorkers(userLocation.latitude, userLocation.longitude)
        .then(workers => {
          setAvailableWorkers(workers);
        })
        .catch(error => console.error('Error fetching available workers:', error));
    }
    setLoading(false)
  }, [userLocation]);

  const fetchAvailableWorkers = async (latitude, longitude) => {
    // setLoading(true)
    const response = await axios.post('https://agriconnect-api.onrender.com/hireList', { latitude: latitude.toString(), longitude: longitude.toString() });
    // setLoading(false)
    return response.data;
  };

  // const calculateDistance = (lat1, lon1, lat2, lon2) => {
  //   const R = 6371;
  //   const dLat = toRadians(lat2 - lat1);
  //   const dLon = toRadians(lon2 - lon1);
  //   const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //             Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
  //             Math.sin(dLon / 2) * Math.sin(dLon / 2);
  //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //   const distance = R * c;
  //   return distance;
  // };

  // const toRadians = (degrees) => {
  //   return degrees * Math.PI / 180;
  // };
  const handleRefresh = async () => {
    setLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLoading(false); // Set loading to false here
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude });
    } catch (error) {
      console.error('Error while refreshing:', error);
    } finally {
      console.log(availableWorkers)
      setLoading(false); // Set loading to false after the async operation completes
    }
  }
  const handleHiring=(item)=>{

  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.username} </Text>
      <Text style={styles.title1}>Contacts</Text>
      <Text style={styles.description}>{item.pmail}</Text>
      <Text style={styles.description}>{item.phoneNumber}</Text>
      <Button text="Hire" onPress={()=>handleHiring(item)} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {userLocation.latitude && userLocation.longitude &&
        <Text style={{ fontWeight: 'bold', margin: 10 }}>User coords: {userLocation.latitude} {userLocation.longitude}</Text>
      }
    <Button text='Refersh' onPress={handleRefresh} />
    {loading && <ActivityIndicator size='large'/>}
    {availableWorkers && 
      <FlatList
      data={availableWorkers}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      // onEndReached={loadMoreData}
      // onEndReachedThreshold={0.1}
      ListFooterComponent={() => loading && <ActivityIndicator />}
    />
    }
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 3, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 1, height: 1 }, // for iOS shadow
    shadowOpacity: 0.3, // for iOS shadow
    shadowRadius: 2, // for iOS shadow
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title1: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
});
