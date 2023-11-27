import { StyleSheet } from 'react-native';

import ShoopingCartScreen from '../../screens/ProductScreen';
import { Text, View } from '../../components/Themed';

export default function TabMoreScreen() {
  return (
    <View style={styles.container}>
      <ShoopingCartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});