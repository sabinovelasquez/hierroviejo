import firebase from 'firebase/app'
import 'firebase/firestore'
import congif from './config/private.js'

export const db = firebase.initializeApp({
  apiKey: congif.FIREBASE_API_KEY,
  authDomain: 'hierro-viejo.firebaseapp.com',
  projectId: 'hierro-viejo',
  storageBucket: 'hierro-viejo.appspot.com',
  messagingSenderId: congif.MESSAGING_SENDER_ID,
  appId: congif.APP_ID,
  measurementId: congif.MEASUREMENT_ID
}).firestore()
