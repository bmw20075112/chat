import firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAoSFY3gXmH24vwpzATWM6oyv3AO3qWL_M",
    authDomain: "chat-91fcd.firebaseapp.com",
    databaseURL: "https://chat-91fcd.firebaseio.com",
    projectId: "chat-91fcd",
    storageBucket: "chat-91fcd.appspot.com",
    messagingSenderId: "136825626022",
    appId: "1:136825626022:web:42799685da0fd973578367"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();