// app/_layout.tsx
import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import HeaderComponent from './components/HeaderComponent';
// import HomeScreen from './(tabs)';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};



export default function RootLayout() {
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
