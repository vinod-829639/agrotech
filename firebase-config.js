import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// ✅ Correct Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyArbQSbeNYPBao1tgV2mMWWta7ThBSCJFw",
    authDomain: "agrotech-a1327.firebaseapp.com",
    databaseURL: "https://agrotech-a1327-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "agrotech-a1327",
    storageBucket: "agrotech-a1327.firebasestorage.app",
    messagingSenderId: "909449543844",
    appId: "1:909449543844:web:416b79478f03529480a631",
    measurementId: "G-CBYNL5X1GR"
  };

// ✅ Properly Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Ensure `app` is passed

export { app, auth };
