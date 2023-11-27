import { ScrollView, StyleSheet } from 'react-native';

import ShoopingCartScreen from '../../screens/ShoopingCartScreen';
import { Text, View } from '../../components/Themed';
import AddressScreen from '../../screens/AddressScreen';

export default function TabShoopingCartScreen() {
  return (

    <View style={styles.container}>
        <ScrollView >
            <ShoopingCartScreen />
            <AddressScreen />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    
  container: {
    padding: 10,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});