// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB12hQf4MO57OvuMSx3GgKuBz5Jk12gpsg",
    authDomain: "course-sera.firebaseapp.com",
    projectId: "course-sera",
    storageBucket: "course-sera.appspot.com",
    messagingSenderId: "875982050591",
    appId: "1:875982050591:web:5492345c742d1d58fa8c2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;