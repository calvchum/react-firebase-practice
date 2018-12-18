import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyD5mAEMxonjQypR0JkBlEzQJff1m9KeJWk",
  authDomain: "fun-food-friends-9399c.firebaseapp.com",
  databaseURL: "https://fun-food-friends-9399c.firebaseio.com",
  projectId: "fun-food-friends-9399c",
  storageBucket: "",
  messagingSenderId: "59145286826"
};

firebase.initializeApp(config);

export default firebase;