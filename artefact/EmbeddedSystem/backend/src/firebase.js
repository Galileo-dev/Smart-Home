const firebase = require("firebase/app");
// Required for side-effects
let firestore = require("firebase/firestore");

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBevHW18aJZPbuYdAtM0nYksto_pEzr_g0",
  authDomain: "smart-home-dc0d6.firebaseapp.com",
  projectId: "smart-home-dc0d6",
  storageBucket: "smart-home-dc0d6.appspot.com",
  messagingSenderId: "39200188667",
  appId: "1:39200188667:web:af3dd01b5e217874af285e",
  measurementId: "G-D9WE0M2N00"
};

// Initialize Firebase
function initialize() {
  const app = firebase.initializeApp(firebaseConfig);

  // When app starts send an im up to the firebase database to better understand if there are many events  causing the pi to restart or the server to restart
  let db = firestore.getFirestore();

  // let docRef = db
  //   .collection("backend_im_up_ping")
  //   .add({
  //     message: "Im up ¯_(ツ)_/¯"
  //   })
  //   .then(docRef => {
  //     console.log("Document written with ID: ", docRef.id);
  //   })
  //   .catch(error => {
  //     console.error("Error adding document: ", error);
  //   });

  let time = Date.now();
  console.log("Sending to firebase");
  let docRef = firestore
    .addDoc(firestore.collection(db, "backend_im_up_ping"), {
      message: "Im up ¯_(ツ)_/¯",
      time: Date.now()
    })
    .then(docRef => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
}

module.exports = {
  initialize
};
