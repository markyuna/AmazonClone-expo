import React from 'react';
import {View} from 'react-native';
import { Auth } from 'aws-amplify/auth';
import Button from '../components/Button';

const MenuScreen = () => {
  const onLogout = () => {
    Auth.signOut();
  };

  return (
    <View>
      <Button text="Sign out" onPress={onLogout} />
    </View>
  );
};

export default MenuScreen;