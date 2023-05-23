importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

// todo Copy/paste firebaseConfig from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCmAf_fkgbsxVLdSr6L17kJBoCMCUZnhmc",
  authDomain: "airquality-203b4.firebaseapp.com",
  projectId: "airquality-203b4",
  storageBucket: "airquality-203b4.appspot.com",
  messagingSenderId: "109577398004",
  appId: "1:109577398004:web:f623cca7d5ac1fdd2d60a1",
  measurementId: "G-JGNZ9VG1HZ"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
