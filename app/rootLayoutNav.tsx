import { View, Text } from 'react-native'
import React from 'react'



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

export default RootLayoutNav