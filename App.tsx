import React, { useEffect, useState } from 'react';
import { LogBox, StyleSheet, FlatList, SafeAreaView } from 'react-native';
/* lib */
import { getShops } from './src/lib/firebase';
/* components */
import { ShopReviewItem } from './src/components/ShopReviewItem';
/* types */
import { Shop } from './src/types/shop';

LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  const [shops, setShops] = useState<Shop[]>([]);
  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const shops = await getShops()
    setShops(shops);
  }

  const shopItems = shops.map((shop, index) => (
    <ShopReviewItem shop={shop} key={index.toString()} />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={shops}
        renderItem={({ item }: {item: Shop }) => (
          <ShopReviewItem shop={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
