import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCFUwG0eemaZ60ZxqVTJWb3Jjp61Qz1d6k',
    authDomain: 'pelatihan-kominfo-react.firebaseapp.com',
    projectId: 'pelatihan-kominfo-react',
    storageBucket: 'pelatihan-kominfo-react.appspot.com',
    messagingSenderId: '65919384767',
    appId: '1:65919384767:web:1e4df85c76801337e59a0a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const doLogin = async (userEmail, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            userEmail,
            password
        );
        const { displayName, email, phoneNumber, photoURL } = userCredential.user;
        return {msg: "ok" , user:{ displayName, email, phoneNumber, photoURL }};
    } catch (error) {
        return {msg: "error", code:error.code};
    }
};
const doRegister = async (userEmail, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            userEmail,
            password
        );
        const { displayName, email, phoneNumber, photoURL } = userCredential.user;
        return {msg: "ok" , user:{ displayName, email, phoneNumber, photoURL }};
    } catch (error) {
        console.log("errorrrrr")
        return {msg: "error", code:error.code};
    }
};

const doLogout = async () => {
    try {
        await signOut(auth);
        return {msg: "ok", code: null};
    } catch (error) {
        return {msg: "error", code:error.code};
    }
};

export { auth, doLogin, doLogout, doRegister }