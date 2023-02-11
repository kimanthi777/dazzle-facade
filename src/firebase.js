import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCOUXh3dO4AvCz4TWZFnK1egwmUiAATDAk",
  authDomain: "dazzlehr-43c85.firebaseapp.com",
  projectId: "dazzlehr-43c85",
  storageBucket: "dazzlehr-43c85.appspot.com",
  messagingSenderId: "1093660451446",
  appId: "1:1093660451446:web:c51dc9c82ad53ec813f557",
  measurementId: "G-F2WFPNYT8K"
};


/*** Request user permission for notifications:
 *const messaging = firebase.messaging();

messaging
  .requestPermission()
  .then(() => {
    console.log("Notification permission granted.");
  })
  .catch((err) => {
    console.log("Unable to get permission to notify.", err);
  });

// Receive Notifications
messaging.onMessage((payload) => {
  console.log("Message received. ", payload);
});

   
*/


const app = initializeApp(firebaseConfig)