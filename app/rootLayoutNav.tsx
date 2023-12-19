import React, { useState } from 'react';
import { View, Text } from 'react-native'
import HeaderComponent from './components/HeaderComponent';
import SignInScreen from './auth/sign-in';
import { Stack } from 'expo-router';

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
        <Stack.Screen name="screens/AddressScreen" options={{ title: 'AddressScreen' }} />
     
      </Stack>
    // </SafeAreaView>
    );
}

export default RootLayoutNav