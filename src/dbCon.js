// import { navbarModifier } from "../components/navbar";
import { changeUserState } from "../pages/blog";

const firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/firebase-auth");

// TODO: move config to .env
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: (`${process.env.REACT_APP_FIREBASE_PROJECT_ID}`),
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.analytics();

//instances
const firestore = firebase.firestore();
const auth = firebase.auth();

//methods
export const authInstance = () => auth;

export const dbInstance = () => firestore;

// auth.onAuthStateChanged(user => {
//   if (user) {
//     console.log(user.email);
//   } else {
//     // console.log("user is signed out");
//     console.log("signed out");
//   }
// });

// check logged in info
export const checkUser = () => {
  // console.log(auth.currentUser);
  if (auth.currentUser === null) {
    return false;
  } else {
    return true;
  }
  return auth.currentUser ? true : false;
};

export var currentUser;

auth.onAuthStateChanged(user => {
  changeUserState(user);
});

//TODO: registerdaki ve signindeki fonkları buraya taşı

// add blog posts to database
export default function addDb(data) {
  const docRef = firestore.collection("blogs").doc(data.blogSlug);

  docRef
    .set({
      blogName: data.blogName,
      blogDetail: data.blogDetail
    })
    .then(() => console.log("Saved"))
    .catch(error => console.log("Got an error:" + error));
}
