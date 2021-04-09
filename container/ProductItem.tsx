import React from 'react';
import {StyleSheet, Dimensions, Image} from 'react-native';
import {View, Text, Card, CardItem, Left} from 'native-base';
import {Product} from '../models/Product';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  imageContainer: {
    height: height / 3,
    width: width / 2.2,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    padding: 5,
    marginVertical: 10,
    marginTop: 5,
    width: '100%',
    height: '80%',
  },
});

function ProductItem({
  product: {title, image, price},
}: {
  product: Product;
}): JSX.Element {
  return (
    <Card>
      <CardItem style={styles.imageContainer}>
        <Image
          source={{uri: image}}
          resizeMode="contain"
          style={styles.image}
        />
        <Left>
          <View>
            <Text numberOfLines={1}>{title}</Text>
            <Text>${price}</Text>
          </View>
        </Left>
      </CardItem>
    </Card>
  );
}

export default ProductItem;
