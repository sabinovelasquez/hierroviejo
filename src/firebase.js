import firebase from 'firebase/app'
import 'firebase/firestore'
import private from './config/private'

export const db = firebase
  .initializeApp({
    apiKey: private.FIREBASE_API_KEY,
    authDomain: "hierro-viejo.firebaseapp.com",
    projectId: "hierro-viejo",
    storageBucket: "hierro-viejo.appspot.com",
    messagingSenderId: private.MESSAGING_SENDER_ID,
    appId: private.APP_ID,
    measurementId: private.MEASUREMENT_ID
}).firestore()
