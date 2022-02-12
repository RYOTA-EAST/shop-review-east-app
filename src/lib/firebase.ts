import * as firebase from 'firebase';
import "firebase/firestore";
import Constants from 'expo-constants';
import { Shop } from '../types/shop';
import { firebaseConfig } from '../../env';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const getShops = async () => {
  const snapshot = await firebase
    .firestore()
    .collection("shops")
    // .where("place", "==", "品川")
    .orderBy("score", "desc")
    .get();
  const shops = snapshot.docs.map((doc) => doc.data() as Shop);
  return shops;
};