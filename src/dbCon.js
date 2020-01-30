const firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/firebase-auth");

// TODO: move config to .env 
var firebaseConfig = {
  
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

auth.onAuthStateChanged(user => {
  if (user) {
    console.log(user.email);
  } else {
    // console.log("user is signed out");
    alert("signed out");
  }
});

// check logged in info
export const checkUser = () => {
  return (auth.currentUser ? true : false);
}

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
