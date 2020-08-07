  import * as firebase from "firebase";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBJf1PmEgtTToQCGjfbE8ak2a1KEJJ4pW4",
    authDomain: "torontot-7cb68.firebaseapp.com",
    databaseURL: "https://torontot-7cb68.firebaseio.com",
    projectId: "torontot-7cb68",
    storageBucket: "torontot-7cb68.appspot.com",
    messagingSenderId: "652855772203",
    appId: "1:652855772203:web:0f268719c5d85588b1566e"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
