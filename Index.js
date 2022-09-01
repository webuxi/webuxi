import { db, setDoc, doc, ref, storage, uploadBytes, getDownloadURL } from "./firebaseConfig.js";

const aboutMeForm =document.querySelector("#aboutMeForm");
const heroRef = doc(db, 'sections', 'heroSection');

// Uploads files to firebase storage and returns the url
const uploadFile = async (file) => {
  const storageRef = ref(storage, file.name);
	await uploadBytes(storageRef, file);
	const url = await getDownloadURL(storageRef);
	return url;
}

// Store Hero Section data in firebase
const heroSection = async (about, headline, image, resume) => {
  await setDoc(heroRef, {
		about: about,
		headline: headline,
		image: image,
		resume: resume,
	 });
}

aboutMeForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const about = document.querySelector("#Aboutme2").value;
	const headline = document.querySelector("#NameAbout").value;
	const image = document.querySelector("#imageAbout").files[0];
	const resume = document.querySelector("#cv").files[0];
	const storedImage = await uploadFile(image);
	const storedResume = await uploadFile(resume);
	heroSection(about, headline, storedImage, storedResume);
});

// Store Experience data in firebase

const experienceForm = document.querySelector("#Experiance");
const experienceRef = doc(db, 'sections', 'experience');

const experienceSection = async (company, position, startDate, endDate) => {
	await setDoc(experienceRef, {
		[company]: {
			position: position,
			startDate: startDate,
			endDate: endDate,
		},
	});
}

experienceForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const company = document.querySelector("#company").value;
	const position = document.querySelector("#position").value;
	const	startDate = document.querySelector("#startDate").value;
	const	endDate = document.querySelector("#endDate").value;
	experienceSection(company, position, startDate, endDate);
});
