import firebase from "firebase";

export type User = {
  id?: string;
  name: string;
  updateAt: firebase.firestore.Timestamp;
  createdAt: firebase.firestore.Timestamp;
};

export const initialUser: User = {
  name: "",
  updateAt: firebase.firestore.Timestamp.now(),
  createdAt: firebase.firestore.Timestamp.now(),
};