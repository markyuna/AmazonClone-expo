import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    // alignContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  image: {
    flex: 2,
    height: 120,
    // width: 130,
    // resizeMode: 'contain',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightContainer: {
    padding: 10,
    flex: 2,
  },
  title: {
    fontSize: 15,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 15,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
});

export default styles;