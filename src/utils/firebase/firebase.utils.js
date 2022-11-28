// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import 'firebase/auth'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDbZo8fgiQWef9chdiRRfQLamut86xjKMM',
  authDomain: 'collection-user-web.firebaseapp.com',
  projectId: 'collection-user-web',
  storageBucket: 'collection-user-web.appspot.com',
  messagingSenderId: '736461859685',
  appId: '1:736461859685:web:e55ddd62d66d4dc286cf8c',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth(firebaseApp)
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
