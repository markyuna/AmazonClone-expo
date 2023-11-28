// app/(tabs)/shoopingcart.tsx

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Link, useNavigation } from 'expo-router';
// import ExternalLink from '../components/ExternalLink';
import CartProductItem from '../components/CartProductItem';
import Button from '../components/Button';
import products from '../data/cart';

const ShoopingCartScreen = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const calculatedTotalPrice = products.reduce(
      (summedPrice, product) =>
        summedPrice + product.item.price * product.quantity,
      0,
    );

    setTotalPrice(calculatedTotalPrice);
  }, [products]);

  // const navigateToAddressScreen = () => {
  //   navigation.navigate('AddressScreen');
  // };

  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({ item }) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{ fontSize: 18 }}>
              Subtotal ({products.length} items):{' '}
              <Text style={{ color: '#e47911', fontWeight: 'bold' }}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
       
              <Button
                text="Proceed to checkout"
                onPress={() => navigation.navigate('screens/AddressScreen/index')}
                containerStyles={{
                  backgroundColor: '#f7e300',
                  borderColor: '#c7b702',
                }}
              />
        
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default ShoopingCartScreen;
