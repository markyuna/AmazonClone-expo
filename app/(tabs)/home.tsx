import * as React from 'react';
import { StyleSheet } from 'react-native';

import HomeScreen from '../../screens/HomeScreen';
import { Text, View } from '../../components/Themed';

export default function TabHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <HomeScreen searchValue={'/home'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    marginTop: -80,
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    // marginTop: 10,
  },
  separator: {
    marginTop: 30,
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
});
