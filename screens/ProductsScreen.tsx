import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {Spinner} from 'native-base';

import ProductItem from '../container/ProductItem';
import ProductList from '../container/ProductList';
import {Product} from '../models/Product';

interface ProductsScreenProp {}

export default function ProductsScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          'https://fakestoreapi.com/products?limit=10',
        );
        const todos = (await !Array.isArray(response.data))
          ? [response.data]
          : response.data;
        setProducts((p: Product[]) => [...p, ...todos]);
        setLoading(false);
      } catch (error) {
        Alert.alert(error);
      }
    })();
    return () => {
      setProducts([]);
    };
  }, []);

  return loading ? (
    <Spinner  style={{flex: 1}} />
  ) : (
    <ProductList
      products={products}
      render={items =>
        items.map(item => <ProductItem product={item} key={item.id} />)
      }
    />
  );
}
