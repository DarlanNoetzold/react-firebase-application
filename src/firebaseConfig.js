import { initializeApp } from "firebase/app";
import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUWXCq8YhHcP_YpwKbWU6K_45bEXoGY08",
  authDomain: "lpe-login-5922e.firebaseapp.com",
  projectId: "lpe-login-5922e",
  storageBucket: "lpe-login-5922e.appspot.com",
  messagingSenderId: "434479063500",
  appId: "1:434479063500:web:81f937e773e3ab9371bd69",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
//export default firebaseApp;
const googleProvider = new GithubAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export { auth, db, signInWithGoogle, logout };
