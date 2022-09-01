import { auth, signInWithEmailAndPassword } from './firebaseConfig.js';
// Sign in with email and password
const nameInput = document.getElementById('user');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const form = document.getElementById('form');

async function signIn(email, password) {
	await signInWithEmailAndPassword(auth, email, password);
	location.href = './index.html';
}

form.addEventListener('submit', function(e) {
		e.preventDefault();
		const name = nameInput.value;
		const password = passwordInput.value;
		signIn(name, password);
})

