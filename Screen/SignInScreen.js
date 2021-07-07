import * as React from 'react';
import {Component} from 'react';
import { StyleSheet,View,Alert, Text,Platform, TextInput, TouchableOpacity,Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import {SignUpSchema} from '../Components/ValidateForm'
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
  
  checkvalidate_field=()=>{
    const { phonenum} = this.state.phonenum;
    const { password} = this.state.phonenum;
    if(phonenum == "" || password == ""){
      this.setState({
        validate_field:false
      })
    } else{
      this.setState({
        validate_field:true
      })
    }
  }

  updateSecureTextEntry  = () =>{
      this.setState({
        secureTextEntry : !this.state.secureTextEntry
      })
  }

  _login = () =>{
              Alert.alert("Logged in successfully!");
              this.props.navigation.navigate("HomeScreen");
  }
  render(){
    const { navigation } = this.props;
    
    return (
      <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#E26E43', '#F8CE0E']}
        style={styles.background}
        />
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
          <Text>{this.state.validate_field}</Text>
        </View>
        <View style={styles.footer}
        >
            <Formik
                initialValues={{    phonenum:"",
                                    password:'',
                                }}
                validationSchema={SignUpSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values ,errors , touched} , secureTextEntry=true) => (
                    <View>
                        <Text style={styles.text_footer}>PhoneNum</Text>
                        <View style={styles.action}>
                            <FontAwesome
                            name="phone"
                            color="#05375a"
                            size={20}
                            style={{marginRight:5}}
                            />
                            <TextInput
                            keyboardType = 'numeric'
                            placeholder="Your Phone Number"
                            style={styles.TextInput}
                            autoCapitalize="none"
                            onChangeText={handleChange('phonenum')}
                            onBlur={handleBlur('phonenum')}
                            value={values.phonenum}
                            />
                        </View>
                        {errors.phonenum && touched.phonenum ? (
                            <Text style={styles.text_error}>{errors.phonenum}</Text>
                        ) : null}    
                        <Text style={styles.text_footer}>Password</Text>
                        <View style={styles.action}>
                            <FontAwesome
                            name="lock"
                            color="#05375a"
                            size={20}
                            style={{marginRight:5}}
                            />
                            <TextInput
                            placeholder="Password"
                            style={styles.TextInput}
                            autoCapitalize="none"
                            secureTextEntry={this.state.secureTextEntry ? true : false}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            />
                            <TouchableOpacity
                            onPress={this.updateSecureTextEntry}>
                            <Feather
                                name="eye-off"
                                color="green"
                                size={20}
                                style={{marginLeft:250}}
                            />
                            </TouchableOpacity>
                        </View>
                        {errors.password && touched.password ? (
                            <Text style={styles.text_error}>{errors.password}</Text>
                        ) : null}
                        <View style={styles.button}>
                            <LinearGradient style={styles.signIn}
                            colors={['#E26E43', '#F8CE0E']}>
                                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} >
                                    <Text style={[styles.textSign,{color:'#fff'}]}>Sign In</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                )}
            </Formik>
            <View style={styles.button}>
                <LinearGradient 
                colors={['#E26E43', '#F8CE0E']}
                style={{marginTop:10,padding:5,borderRadius: 20,width: '50%',
                }}
                >
                    <View style={styles.signUp}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                            <Text style={[styles.textSign,{color:'#E26E43'}]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>   
        </View>
    </View>
     
      
    );
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
    text_error: {
        color: "#FD0000",
        fontSize: 10
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