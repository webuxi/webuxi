import { auth } from './firebaseConfig.js';

const logOut = document.querySelector('#logOut');
logOut.addEventListener('click', function(e) {
	e.preventDefault();
	auth.signOut();
	location.href = './login.html';
});

// Track user sign in status
const dashboard = document.querySelector('#body');

auth.onAuthStateChanged(function(user) {
	if (user) {
		dashboard.style.display = 'flex';
	} else {
		dashboard.style.display = 'none';
		location.href = './login.html';
	}
})
