import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUky1Jb4dAuChUltgD-rkkzs59Dxix_y8",
  authDomain: "chat-app-8f2a9.firebaseapp.com",
  projectId: "chat-app-8f2a9",
  storageBucket: "chat-app-8f2a9.appspot.com",
  messagingSenderId: "1122119937",
  appId: "1:1122119937:web:a575c3c8a95e8c37522b00",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
