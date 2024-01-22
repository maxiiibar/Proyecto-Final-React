import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJ993y6gxQXWmbzDsMys-QU4xCQW31m-g",
  authDomain: "my-ecommerce-49ffc.firebaseapp.com",
  projectId: "my-ecommerce-49ffc",
  storageBucket: "my-ecommerce-49ffc.appspot.com",
  messagingSenderId: "656967215439",
  appId: "1:656967215439:web:39ef7c72e5a366eb023d3a",
};

initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
