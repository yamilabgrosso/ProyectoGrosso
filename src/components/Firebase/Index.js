import firebase from 'firebase/app'
import "firebase/firestore"

const app = firebase.initializeApp({

    apiKey: "AIzaSyCpbRzPSFOjYX-hgllqlq5ED_6y1Khpv2k",
    authDomain: "lebronjames-store.firebaseapp.com",
    projectId: "lebronjames-store",
    storageBucket: "lebronjames-store.appspot.com",
    messagingSenderId: "504937548472",
    appId: "1:504937548472:web:aa5812a2e1cfd09495024d",
    measurementId: "G-KC9BS8S2XL"
}) 

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)

