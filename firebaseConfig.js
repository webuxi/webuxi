import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

// Firebase configuration
const firebaseConfig = {
	
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export {auth, signInWithEmailAndPassword}
