// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import 'firebase/auth'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBwJtlYbZboGfFIld5mspm0sw9lbJ3ygz4",
  authDomain: "collectxn-84a52.firebaseapp.com",
  projectId: "collectxn-84a52",
  storageBucket: "collectxn-84a52.appspot.com",
  messagingSenderId: "599267275357",
  appId: "1:599267275357:web:daf6da3f24e874c63793b4",
  measurementId: "G-0ZMEHW9718"
};

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

facebookProvider.setCustomParameters({
  display: 'popup',
})

export const auth = getAuth(firebaseApp)

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithFacebook = () => signInWithPopup(auth, facebookProvider)
