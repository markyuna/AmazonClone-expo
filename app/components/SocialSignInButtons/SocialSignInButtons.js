import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import CustomButton from '../CustomButton';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <>
      {/* <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
        style={() => (<AntDesign name="facebook-square" size={24} color="black" />)}
      /> */}

      {/* <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#4765A9"
        fgColor="#e3e3e3"
        renderIcon={() => (<Ionicons name="logo-google" size={24} color="white" style={{marginRight:10}}/>)}
      /> */}

      <TouchableOpacity 
        style={styles.button} 
        onPress={onSignInGoogle}
      >
        <Ionicons name="logo-google" size={24} color="white" style={{marginRight:10}} />
        <Text style={{color: 'white', fontWeight: '800'}}>Sign In with Google</Text>
      </TouchableOpacity>

      {/* <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      /> */}
    </>
  );
};

const styles = StyleSheet.create({
  button:{
    backgroundColor: "#4765A9",
    padding:10,
    margin:30,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  }
});

export default SocialSignInButtons;