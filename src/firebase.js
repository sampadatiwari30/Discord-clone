import firebase from 'firebase'

const firebaseConfig = {
    // your firebase config
 /*  apiKey: "AIzaSyANmWtmIeHeQd8YswXMSu5n4ruLE3VOVsI",
  authDomain: "discord-clone-f893e.firebaseapp.com",
  projectId: "discord-clone-f893e",
  storageBucket: "discord-clone-f893e.firebasestorage.app",
  messagingSenderId: "721360652620",
  appId: "1:721360652620:web:51f8e955368aaa030ae7e9", */
  // measurementId: "G-F3QSQ0HVF8"
  
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db