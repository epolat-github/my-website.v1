const firebase = require("firebase/app");
require("firebase/firestore");

var firebaseConfig = {
  
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.analytics();

const firestore = firebase.firestore();

export const dbInstance = () => (firestore);

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
