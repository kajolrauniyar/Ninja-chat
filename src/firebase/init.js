  // Your web app's Firebase configuration

  import firebase from 'firebase'
  import firestore from 'firebase/firestore'


  // Your web app's Firebase configuration

  var firebaseConfig = {
      apiKey: "AIzaSyDFA2z9XTo9cyZ2msJlVBqoRxMstkBoRC4",
      authDomain: "ninja-chat-caa54.firebaseapp.com",
      databaseURL: "https://ninja-chat-caa54.firebaseio.com",
      projectId: "ninja-chat-caa54",
      storageBucket: "ninja-chat-caa54.appspot.com",
      messagingSenderId: "668574975601",
      appId: "1:668574975601:web:af634c2c9ba8c1f8a53dd0",
      measurementId: "G-4NJKTEFD5L"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // firebaseApp.firestore().settings({ timestampInSnapshots: true })

  export default firebaseApp.firestore()