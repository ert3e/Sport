import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyAYCtLkuuBPh0u1n1dFxIfOPt5BWru6-pY",
    authDomain: "m-city-89f16.firebaseapp.com",
    databaseURL: "https://m-city-89f16.firebaseio.com",
    projectId: "m-city-89f16",
    storageBucket: "m-city-89f16.appspot.com",
    messagingSenderId: "194069097193"
  };
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');
export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebaseDB,
    firebasePlayers
}