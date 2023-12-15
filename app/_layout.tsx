import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_400Regular,
} from '@expo-google-fonts/inter';
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from '@expo-google-fonts/amatic-sc';

import * as SplashScreen from 'expo-splash-screen';
import Animated, { FadeIn } from 'react-native-reanimated';
import { ThemeProvider, Theme } from '@aws-amplify/ui-react-native';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react-native';
import ampplifyconfig from '../src/amplifyconfiguration.json';
import HeaderComponent from './components/HeaderComponent';
Amplify.configure(ampplifyconfig);

const theme: Theme = {
  tokens: {
    colors: {
      brand: {
        primary: 'red',
      },

      background: {
        primary: '{colors.gray}',
      },
      font: {
        primary: 'black',
      },
    },
  },
};

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [searchValue, setSearchValue] = useState('');
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterBlack: Inter_900Black,

    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);

  // const showAnimatedSplash = !appReady || !splashAnimationFinished;
  // if (showAnimatedSplash) {
  //   return (
  //     <AnimatedSplashScreen
  //       onAnimationFinish={(isCancelled) => {
  //         if (!isCancelled) {
  //           setSplashAnimationFinished(true);
  //         }
  //       }}
  //     />
  //   );
  // }

  return (
    // <BiometricProvider>
      <Authenticator.Provider>
        <ThemeProvider theme={theme}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Animated.View style={{ flex: 1 }} entering={FadeIn}>
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
            </Animated.View>
          </GestureHandlerRootView>
        </ThemeProvider>
      </Authenticator.Provider>
    // </BiometricProvider>
  );
}


 