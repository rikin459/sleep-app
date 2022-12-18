// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDds4mMIlJR21IFnoJYR8A3A6v58J3ZjUg",
  authDomain: "sleep-app-198d4.firebaseapp.com",
  projectId: "sleep-app-198d4",
  storageBucket: "sleep-app-198d4.appspot.com",
  messagingSenderId: "169567590116",
  appId: "1:169567590116:web:df22cba4f0e220b0f07ef1",
  measurementId: "G-JC53DRW125"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
 
export const auth = firebase.auth();




export default firebaseConfig;


