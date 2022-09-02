import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js'
import { getFirestore, collection, setDoc, doc, addDoc, getDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-storage.js"
// Firebase configuration
const firebaseConfig = {
	
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export {auth, signInWithEmailAndPassword};
export {db, collection, setDoc, doc, addDoc, getDoc};
export { storage, ref, uploadBytes, getDownloadURL };
