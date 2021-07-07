import * as React from 'react';
import {Component} from 'react';
import { StyleSheet,View,Alert, Text,Platform, TextInput, TouchableOpacity,Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
// import './global.js';
  // global.token = "";
class SignInScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      phonenum:"",
      password:"",
      checkLogin:0,
      validate_field:false,
      secureTextEntry:true,
    }
  }
render(){
    return(
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}
}
export default SignInScreen;

  const {height} = Dimensions.get("screen");
  const height_logo = height * 0.28;

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: height,
    },
    header: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        marginTop:35,
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },

    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        marginTop:10,
        padding:10,
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor:'#009387'
    },
    signUp: {
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      backgroundColor:'#fff'
  },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });