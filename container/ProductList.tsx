import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {Button} from 'native-base';

import {Product} from '../models/Product';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

interface ProductListProp {
  products: Product[];
  render: (products: Product[]) => JSX.Element[];
}

export default function ProductList({products, render}: ProductListProp) {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Button
        style={{width: '100%'}}
        block
        danger
        onPress={() => navigation.goBack()}>
        <Text>GotoBookList</Text>
      </Button>
      {render(products)}
    </ScrollView>
  );
}
