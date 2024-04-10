import { View, Text, StyleSheet,Image, TextInput,ScrollView,Alert,Pressable,ActivityIndicator} from 'react-native'
import Button from '../components/Button';
import React,{useState,useContext,useEffect} from 'react'
import { router ,Redirect} from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { LoadingContext } from './LoadingContext';
// import LoadingIndicator from '../components/LoadingIndicator'
export default function Login() {
    // const inputRef = React.useRef(null);
    const [pmail,setUserName] = useState('');
    const [Password,setPassword] = useState('');
    const [loading,setLoading] = useState(false)
    // const { isLoading, startLoading, stopLoading } = useContext(LoadingContext);
    useEffect(() => {
      async function  getData(){
       const d = await AsyncStorage.getItem("UserToken") 
      if (d != null){
        Alert.alert("Already Logged in");
        router.replace('/user')
        }
      }
      getData();
    }, [])
    
    const handleLogin=async()=>{
    // Basic validation
    if (!pmail || !Password) {
      Alert.alert('Error', 'Please enter both username/email and password');
      router.replace('/user/')

      return;
    }
    // check login
    try {  
      setLoading(true) 
      await axios.post('https://agriconnect-api.onrender.com/login', {
        pmail: pmail,
        password: Password
      });
      await AsyncStorage.setItem("UserToken", JSON.stringify({"pmail": pmail}));
      Alert.alert('Login successful');
      // Redirect 
      router.replace('/user/')
      
    } catch (error) {
      Alert.alert('Error', error.message);
      // stopLoading()
    }
    finally{
      setLoading(false)
    }


    }
    const handleInputUser=(text)=>{
        setUserName(text);
    }
  return (
    <View style={styles.container}>

    <ScrollView keyboardShouldPersistTaps={'handled'}>
    <View>
        <Image source={require('../assets/images/farmlogo.png')} 
        alt="FarmLogo"
        style = {{ width: 350, height: 200,marginTop:100 }}
        />
      </View>

      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Login</Text>
      </View>
      <View style={styles.text2}>
        <Text>Don't have an account? </Text>
        <Pressable onPress={() => router.push('/signup')} ><Text style={styles.signupText}> Sign up</Text></Pressable>
      </View>
      {/*  */}

      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput}>
        <TextInput
        placeholder='Email Address/phone'
        style={styles.input}
        value={pmail}
        onChangeText={handleInputUser}
      />
        </View>
      </View>

      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
        <TextInput
        placeholder='Password'
        style={styles.input}
        value={Password}
        onChangeText={text=>setPassword(text)}
        secureTextEntry
      />
        </View>
      </View>

      <View style={styles.buttonStyle}>
      <Button
        onPress={handleLogin}
        disabled={loading}
        // text={loading ? 'Signing in...' : 'Sign in'}
        text='Login'
      />
    </View>

    </ScrollView>
    {loading && <ActivityIndicator size="large" />}
    {/* <ActivityIndicator /> */}
  </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius:20,
        paddingLeft: 10,
      },
    container: {
      flex: 1,
      backgroundColor: '#e8f7f4',
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      
    },
    LoginText: {
      marginTop:50,
      fontSize:30,
      fontWeight:'bold',
    },
    Middle:{
      alignItems:'center',
      justifyContent:'center',
    },
    text2:{
      flexDirection:'row',
      justifyContent:'center',
      paddingTop:5
    },
    signupText:{
      fontWeight:'bold'
    },
    emailField:{
      marginTop:30,
      marginLeft:15
    },
    emailInput:{
      marginTop:10,
      marginRight:5,
    //   backgroundColor:'#fff'
    },
    buttonStyle:{
      marginTop:30,
      marginLeft:15,
      marginRight:15
    },
    buttonStyleX:{
      marginTop:12,
      marginLeft:15,
      marginRight:15
    },
    buttonDesign:{
      borderRadius:20,
      width:"45%",
      alignSelf:'center',
      backgroundColor:'#1ea988'
    },
    lineStyle:{
      flexDirection:'row',
      marginTop:30,
      marginLeft:15,
      marginRight:15,
      alignItems:'center'
    },
    imageStyle:{
      width:80,
      height:80,
      marginLeft:20,
    },
    imageStyleIcon:{
      height:10,
      width:10
    },
    boxStyle:{
      flexDirection:'row',
      marginTop:30,
      marginLeft:15,
      marginRight:15,
      justifyContent:'space-around'
    },
  });