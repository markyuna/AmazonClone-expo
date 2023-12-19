import React from 'react';
import {View} from 'react-native';
import Button from '../components/Button';
import { signOut } from 'aws-amplify/auth';
// import { useAuthenticator } from '@aws-amplify/ui-react-native';

const MenuScreen = () => {
  // const { signOut } = useAuthenticator();

  async function handleSignOut() {
    try {
      await signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  return (
    <View>
      <Button text="Sign out" onPress={handleSignOut} />
    </View>
  );
};

export default MenuScreen;