import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    
    apiKey: "AIzaSyArXdVKPnC55YqoaZQM1HhIYEjjLWLm_sM",
    authDomain: "datn-ecommerce-23cba.firebaseapp.com",
    projectId: "datn-ecommerce-23cba",
    storageBucket: "datn-ecommerce-23cba.appspot.com",
    messagingSenderId: "1032700934905",
    appId: "1:1032700934905:web:76b6caae860f5677728028",
    measurementId: "G-VLJFMEPBEF"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };