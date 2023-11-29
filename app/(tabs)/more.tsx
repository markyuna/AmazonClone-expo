import React from 'react';
import {View} from 'react-native';
import Button from '../components/Button';

import { Auth } from 'aws-amplify';
const MenuScreen = () => {
  const onLogout = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };

  return (
    <View>
      <Button text="Sign out" onPress={onLogout} />
    </View>
  );
};

export default MenuScreen;