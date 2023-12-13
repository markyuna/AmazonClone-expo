// app/_layout.tsx

import React, { useEffect, useState } from 'react';
// import { Button, Image, StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import HeaderComponent from './components/HeaderComponent';
import SignInScreen from './screens/SignInScreen/index';

import RootLayoutNav from './rootLayoutNav';

import { Amplify } from 'aws-amplify';
import { Authenticator, useTheme, withAuthenticator } from '@aws-amplify/ui-react-native';
// import { SignUpInput, signUp } from 'aws-amplify/auth';

import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RootLayoutNav />
  );
}

export default withAuthenticator(RootLayout);



