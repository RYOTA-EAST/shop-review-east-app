import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth"
import { Shop } from '../types/shop';
import { firebaseConfig } from '../../env';
import { initialUser, User } from '../types/user';

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

export const signin = async () => {
  const userCredintial = await firebase.auth().signInAnonymously();
  const { uid } = userCredintial.user;
  const userDoc = await firebase.firestore().collection("users").doc(uid).get();
  if (!userDoc.exists) {
    await firebase.firestore().collection("users").doc(uid).set(initialUser);
    return {
      ...initialUser,
      id: uid,
    } as User;
  }else{
    return {
      id: uid,
      ...userDoc.data(),
    } as User;
  }
};

export const updateUser = async (userId: string, params: any) => {
  await firebase.firestore().collection("users").doc(userId).update(params);
};