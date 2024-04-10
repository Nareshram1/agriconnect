import { View, Text,StyleSheet,Image ,Pressable} from 'react-native'
import React from 'react'
import { Stack,router } from 'expo-router'
export default function Machinery() {
  const handleRedirect=(text)=>{
    if(text=="rentout")
    {
      router.push('/user/screens/machinery/rentout')
    }
    else{
      router.push('/user/screens/machinery/buyrental')
    }
  }
  return (
    <View  style={styles.container}>
      <Stack.Screen options={{title:'Machinery'}} />
      <Pressable onPress={()=>handleRedirect("rentout")}>
      <View style={styles.card}>
        <Image
        source={require('../../../../assets/images/rental.jpg')}
        alt='Rental Image'
        style={{width:250}}
        />
      <Text style={styles.title}>Rentout</Text>
      
    </View>
    </Pressable>
    <Pressable onPress={()=>handleRedirect("buy")}>
      <View style={styles.card}>
        <Image
        source={require('../../../../assets/images/buyrental.jpg')}
        alt='Rental Image'
        style={{width:250,height:250}}
        />
      <Text style={styles.title}>Buy Rental</Text>
      {/* <Text style={styles.description}>{item.pmail}</Text> */}
    </View>
    </Pressable>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#e8f7f4",
    alignItems:"center",
    justifyContent:"center"
  },
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
    alignSelf:"center"
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
})