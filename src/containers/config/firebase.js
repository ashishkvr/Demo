import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA3UINLeTjR4X1zEKc8bj9Qm1FBYi3FWvw",
  authDomain: "scadape.firebaseapp.com",
  databaseURL: "https://scadape.firebaseio.com",
}

export const firebaseRef = firebase.initializeApp(config)
