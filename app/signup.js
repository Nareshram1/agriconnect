import { View, Text, StyleSheet,Image, TextInput,ScrollView,Alert,DatePickerIOS, DatePickerAndroid} from 'react-native'
import Button from '../components/Button';
import React,{useState} from 'react'
import { router } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SignUp() {
    // const inputRef = React.useRef(null);
    const [username,setUserName] = useState('');
    const [pmail,setPmail] = useState('');
    const [dob,setDob] = useState('');
    const [Password,setPassword] = useState('');
    const [conpwd,setConPwd] = useState('');
    // const [loading,setLoading] = useState(false);
    // const navigation = useNavigation();
    const handleLogin=async()=>{
    // Basic validation
    if (!username || !Password) {
      console.log("nope")
      Alert.alert('Error', 'Please enter both username/email and password');
      router.replace('/user/')
      return;
    }
    try{
        // 
        await axios.post('https://agriconnect-api.onrender.com/signup',{username:username,pmail:pmail,password:Password})
        await AsyncStorage.setItem("UserToken",JSON.stringify({"pmail":pmail}))
        router.replace('/user/')
    }
    catch(error){
        console.log("E")
        console.log("ERR", error.message)
        Alert.alert('Error', error.message);
    }


    }

  return (
    <View style={styles.container}>
    <ScrollView keyboardShouldPersistTaps={'handled'}>
    <View>
        {/* <Image source={require('../assets/images/farmlogo.png')} 
        alt="FarmLogo"
        style = {{ width: 350, height: 200,marginTop:100 }}
        /> */}
      </View>

      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Sign Up</Text>
      </View>
      {/* <View style={styles.text2}>
        <Text>Don't have an account? </Text>
        <Pressable onPress={() => navigation.navigate("SignUp")} ><Text style={styles.signupText}> Sign up</Text></Pressable>
      </View> */}
      {/*  */}

      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput}>
        <TextInput
        placeholder='Full Name'
        style={styles.input}
        value={username}
        onChangeText={text=>setUserName(text)}
      />
        </View>
      </View>

      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
        <TextInput
        placeholder='Email/Phone'
        style={styles.input}
        value={pmail}
        onChangeText={text=>setPmail(text)}
          
      />
        </View>
      </View>

      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
        <TextInput
        placeholder='DOB'
        style={styles.input}
        value={dob}
        onChangeText={text=>setDob(text)}
        
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

      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
        <TextInput
        placeholder='Confirm Password'
        style={styles.input}
        value={conpwd}
        onChangeText={text=>setConPwd(text)}
        secureTextEntry
      />
        </View>
      </View>

      <View style={styles.buttonStyle}>
      <Button
        onPress={handleLogin}
        // disabled={loading}
        // text={loading ? 'Signing in...' : 'Sign in'}
        text='Sign up'
      />
    </View>

    </ScrollView>
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