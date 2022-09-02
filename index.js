import { doc, getDoc, db } from './firebaseConfig.js';

const heroRef = doc(db, 'hero', 'data');
const heroData = await getDoc(heroRef);

const test = document.querySelector("#test");
test.addEventListener('click', () => {
	if (heroData.exists()) {
		console.log("Document data:", heroData.data());
	} else {
		// doc.data() will be undefined in this case
		console.log("No such document!");
	}
});
