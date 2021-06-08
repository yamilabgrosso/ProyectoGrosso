import firebase from 'firebase/app'
import "firebase/firestore"

const app = firebase.initializeApp({

    apiKey:  process.env.REACT_APP_FIRESTORE_APIKEY ,
    authDomain: process.env.REACT_APP_FIRESTORE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIRESTORE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIRESTORE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIRESTORE_APPID,
    measurementId: process.env.REACT_APP_FIRESTORE_MEASUREMENTID
}) 

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)

