// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCoixMu7gJXEbnKGKwlpoW4UlnsWI8oYmQ",
	authDomain: "portfolio-site4u.firebaseapp.com",
	projectId: "portfolio-site4u",
	storageBucket: "portfolio-site4u.appspot.com",
	messagingSenderId: "168326222731",
	appId: "1:168326222731:web:c4badb2b3601a8c4c1d58e",
	measurementId: "G-44G9LRSGJZ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);


// Sign in with email and password

const nameInput = document.getElementById('user');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const form = document.getElementById('form');

async function signIn(email, password) {
	const promise = auth.signInWithEmailAndPassword(email, password);
	console.log(await promise);
	promise.catch(e => console.log(e.message));
}

form.addEventListener('submit', function(e) {
		e.preventDefault();
		const name = nameInput.value;
		const password = passwordInput.value;
		
		
		signIn(name, password);
})

