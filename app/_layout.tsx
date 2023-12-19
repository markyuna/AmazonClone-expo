

import { Stack } from 'expo-router';
import React, { useState } from 'react';


import { withAuthenticator } from '@aws-amplify/ui-react-native';

import { Amplify } from 'aws-amplify';
import HeaderComponent from './components/HeaderComponent';


import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);

function RootLayout() {
  const [searchValue, setSearchValue] = useState('');
 
  return (
    <Stack 
      screenOptions={{
        header: () => (
          <HeaderComponent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />
          ),
        }}>
      
      <Stack.Screen name="auth/sign-in" options={{ title: 'SignInScreen' }} />
      <Stack.Screen name="(tabs)" options={{ title: 'Home' }} />
      {/* <Stack.Screen name="screens/AddressScreen" options={{ title: 'AddressScreen' }} /> */}
    </Stack>
  );
}


export default RootLayout;