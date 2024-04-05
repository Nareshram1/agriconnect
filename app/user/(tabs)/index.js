import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
// import { Tabs } from 'expo-router';
import { router } from 'expo-router';


export default function Home() {
  const handleCardClick=(text)=>{
    if(text==='hire')
    router.replace('/user/'+ text)
    else
    router.push('/user/screens/'+ text);
  }
  return (
    <View style={styles.container}>
      {/* <Text>User</Text> */}

      <View>
            <LinearGradient
            colors={['#ffffff','#ffe8cb']}
            locations={[0, 1]}
            start={{ x: 0.45, y: 0.19 }}
            style={styles.weatherCard}
            >
              <View style={styles.weatherCardTop}>
              <Text style={{marginLeft:5,fontStyle:'normal',fontWeight:'bold',fontSize:15}}>Cbe</Text>
              <Text style={{marginLeft:5,fontStyle:'normal',fontWeight:'bold',fontSize:18}}>31 °C</Text>
              </View>
              <View style={styles.weatherCardBottom}>
                <Image
                source={require('../../../assets/images/sun.png')}
                alt='weather'
                style={{width:110,height:110,alignSelf:"flex-end", marginVertical:-30, marginHorizontal:20}}
                />
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around',width:'60%',fontWeight:'bold'}}>
                <Text style={{marginLeft:10,fontWeight:400}}>30°C</Text>
                <Text style={{marginLeft:10,fontWeight:400}}>31°C</Text>
                <Text style={{marginLeft:10,fontWeight:400}}>28°C</Text>
                <Text style={{marginLeft:10,fontWeight:400}}>27°C</Text>
                </View>

              </View>
            </LinearGradient>
            
                    {/*  Tasks list */}
        <View style={styles.buy}>
          {/* 4 items */}
                  {/* Top Row */}
      <View style={styles.row}>
        <Pressable style={styles.card} onPress={()=>handleCardClick("machinery")}>
          <Image source={require('../../../assets/images/machinery.png')} alt='machinery' style={styles.image} />
          <Text style={styles.text}>Machinery</Text>
        </Pressable>
        <Pressable style={styles.card} onPress={()=>handleCardClick("saplings")}>
          <Image source={require('../../../assets/images/saplings.png')} alt='saplings' style={styles.image} />
          <Text style={styles.text}>Saplings</Text>
        </Pressable>
      </View>

      {/* Bottom Row */}
      <View style={styles.row}>
        <Pressable style={styles.card} onPress={()=>handleCardClick('hire')}>
          <Image source={require('../../../assets/images/hire.png')} alt='hire' style={styles.image} />
          <Text style={styles.text}>Hire people</Text>
        </Pressable>
        <Pressable style={styles.card} onPress={()=>handleCardClick("fertilizers")}>
          <Image source={require('../../../assets/images/fertilizers.png')} alt='fertilizers' style={styles.image} />
          <Text style={styles.text}>Fertilizers</Text>
        </Pressable>
      </View>
        </View>

        </View>
    </View>
  )
}


const styles= StyleSheet.create({
    container: {
      flex: 1,
      height:'100%',
      backgroundColor: '#e8f7f4',
      // marginBottom: '6%'
    },
    scrollContainer: {
      flexGrow: 1,
      // padding: 20,
      justifyContent: 'space-between',
      
    },
    emailView:{
      display:'flex',
      alignItems:'center',
      
      marginLeft:15,
      marginRight:10,
      // backgroundColor:'red',
    },
    email:{
      marginTop:100,
      marginRight:5,
      width:"90%",
      backgroundColor:'#fff',
      marginBottom:5,
      borderRadius:10,
    },
    search:{
      width:'95%',
      marginTop:80,
    },
    weatherCard:{
      height:120,
      // background: rgb(255,255,255),
      // background: linear-gradient(133deg, rgba(255,255,255,1) 0%, rgba(255,161,39,1) 100%, rgba(0,212,255,1) 100%),
      margin:25,
      backgroundColor: 'rgba(255, 255, 255, 0.21)',
      borderRadius: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.9,
      shadowRadius: 30,
      elevation: 5,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.67)',
    },
    weatherCardTop:{
      display: 'flex',
      justifyContent:'space-around',
      alignItems:'center',
      flexDirection:'row',
      marginTop:10,
      height:30,
      width:'65%'
    },
    weatherCardBottom:{
      // backgroundColor:'red',
      height:'65%'
    },
    buy:{
      height:390,
      // marginTop:5,
      // backgroundColor:'red'
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between', // Aligns content horizontally with space between
      marginBottom: 20, // Spacing between rows
      margin: 10, 
    },
    card: {
      width: '48%', // Adjust the width as needed
      backgroundColor: '#1ea988',
      height: 165,
      borderRadius: 20,
      // shadowColor: '#000',
      // shadowOffset: {
      //   width: 0,
      //   height: 4,
      // },
      // shadowOpacity: 0.3,
      // shadowRadius: 30,
      elevation: 5,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.67)',
      alignItems: 'center', // Center the content horizontally
    },
    image: {
      width: 130, // Adjust the image width as needed
      height: 100, // Adjust the image height as needed
      borderRadius: 50, // Make the image circular
      marginTop: 20, // Add margin to separate image from text
    },
    text: {
      marginTop: 10, // Add margin to separate text from image
      fontSize: 16, // Adjust the font size as needed
      color: '#fff', // Change the text
      fontSize:16
    },
    bottomBar:{
      // height:'100%',
      flexDirection:'row',
      justifyContent:'space-evenly',
      borderTopWidth:1,
      borderTopColor:'green',
      paddingTop:5,
      // paddingVertical: 10,
      position:"absolute",
      left:0,
      right:0,
      bottom:0,
      backgroundColor:'#74c7b3',
    }
  })