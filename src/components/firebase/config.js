import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCJRMsor1Kdp9zclZ4j3oQt7WvwV-dqS3s",
    authDomain: "facebook-clone-react-a2bf2.firebaseapp.com",
    projectId: "facebook-clone-react-a2bf2",
    storageBucket: "facebook-clone-react-a2bf2.appspot.com",
    messagingSenderId: "988073215838",
    appId: "1:988073215838:web:da0ae68ac094badf4eb1cf",
    measurementId: "G-JQYE7S1D9W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth , provider }
  export default db