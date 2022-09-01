
// Firebase configuration
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
	location.href = './index.html';
}

form.addEventListener('submit', function(e) {
		e.preventDefault();
		const name = nameInput.value;
		const password = passwordInput.value;
		signIn(name, password);
})

