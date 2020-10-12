import firebase from "firebase/app";
import "firebase/messaging";

const config = {
  apiKey: "AIzaSyD57M6Xw4b6CU6QQY524_oLGQ0ZzY_7XtU",
  authDomain: "social-app-89067.firebaseapp.com",
  databaseURL: "https://social-app-89067.firebaseio.com",
  projectId: "social-app-89067",
  storageBucket: "social-app-89067.appspot.com",
  messagingSenderId: "1059015506110",
  appId: "1:1059015506110:web:d8eeb3d64aa1eee97f46ef",
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
