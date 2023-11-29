// app/_layout.tsx
import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import HeaderComponent from './components/HeaderComponent';

import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react-native';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);


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

  return <RootLayoutNav />;
}
export default withAuthenticator(RootLayout);

function RootLayoutNav() {
  const [searchValue, setSearchValue] = useState('');

  return (
    // <SafeAreaView style={{ flex: 1 }}>
      <Stack 
        screenOptions={{
          header: () => (
            <HeaderComponent
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          ),
        }}>
        
        <Stack.Screen name="(tabs)" options={{ title: 'Home' }} />
        <Stack.Screen name="screens/AddressScreen/index" options={{ title: 'AddressScreen' }} />
     
      </Stack>
    // </SafeAreaView>
  );
}
