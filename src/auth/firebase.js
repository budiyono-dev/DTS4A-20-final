import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { useNavigate } from 'react-router-dom';
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
const doLogin = async (email, password) => {
    
    let user = "";
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log(userCredential);
        user = userCredential.user;
    //   navigate("/login")

    } catch (error) {
        user=error.code
        console.log("error login ", error.code, "==", error.message);
        
    }
    return user;
};
const doRegister = async (email, password) => {
    let user = "";
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log(userCredential.user);
        user = userCredential.user;
    } catch (error) {
        console.log("error login ", error.code, "==", error.message);
    }
    return user;
};

const doLogout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
    }
};

export { auth, doLogin, doLogout, doRegister }