import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Link, useNavigation} from 'expo-router';
// import {DataStore, Auth} from 'aws-amplify';
import CartProductItem from '../components/CartProductItem';
import Button from '../components/Button';

import products from '../data/cart';

const ShoopingCartScreen = () => {
  // const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);


  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );
  

  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal ({products.length} items):{' '}
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Link href="/screens/AddressScreen/" asChild>
              <Button
                text="Proceed to checkout"
                onPress={() => console.warn('go to checkout')}
                containerStyles={{
                  backgroundColor: '#f7e300',
                  borderColor: '#c7b702',
                }}
              />
            </Link>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    // marginVertical: 50,
  },
});

export default ShoopingCartScreen;