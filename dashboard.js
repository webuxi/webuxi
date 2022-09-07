import { db, setDoc, doc, ref, storage, uploadBytes, getDownloadURL, collection, addDoc } from "./firebaseConfig.js";

const heroForm =document.querySelector("#heroSection");
const heroRef = doc(db, 'hero', 'data');

// Uploads files to firebase storage and returns the url
const uploadFile = async (file) => {
  const storageRef = ref(storage, file.name);
	await uploadBytes(storageRef, file);
	const url = await getDownloadURL(storageRef);
	return url;
}

// Store Hero Section data in firebase
const heroSection = async (description, title, image, resume) => {
  await setDoc(heroRef, {
		description: description,
		title: title,
		image: image,
		resume: resume,
	 });
}

heroForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const title = document.querySelector("#title").value;
	const description = document.querySelector("#description").value;
	const image = document.querySelector("#heroImage").files[0];
	const resume = document.querySelector("#heroCV").files[0];
	const storedImage = await uploadFile(image);
	const storedResume = await uploadFile(resume);
	heroSection(description, title, storedImage, storedResume);
	heroForm.reset();
});

// Store Experience data in firebase
const experienceForm = document.querySelector("#experienceForm");
const experienceRef = collection(db, 'experience');

const experienceSection = async (company, position, startDate, endDate) => {
	await addDoc(experienceRef, {
			company: company,
			position: position,
			startDate: startDate,
			endDate: endDate,
	});
}

experienceForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const company = document.querySelector("#company").value;
	const position = document.querySelector("#position").value;
	const	startDate = document.querySelector("#startDate").value;
	const	endDate = document.querySelector("#endDate").value;
	experienceSection(company, position, startDate, endDate);
	experienceForm.reset();
});

// Store Projects data in firebase
const projectsForm = document.querySelector("#projectsForm");
const projectsRef = collection(db, 'projects');

const projectsSection = async (projectName, projectImage, projectLink) => {
	await addDoc(projectsRef, {
			projectName: projectName,
			projectImage: projectImage,
			projectLink: projectLink,
	});
}

projectsForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const projectName = document.querySelector("#projectName").value;
	const projectImage = document.querySelector("#projectImage").files[0];
	const projectLink = document.querySelector("#projectLink").value;
	const storedImage = await uploadFile(projectImage);
	projectsSection(projectName, storedImage, projectLink);
	projectsForm.reset();
});

// Store Education data in firebase
const educationForm = document.querySelector("#educationForm");
const educationRef = collection(db, 'education');

const educationSection = async (school, degree, fieldOfStudy) => {
	await addDoc(educationRef, {
			school: school,
			degree: degree,
			fieldOfStudy: fieldOfStudy,
	});
}

educationForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const school = document.querySelector("#school").value;
	const degree = document.querySelector("#degree").value;
	const fieldOfStudy = document.querySelector("#fieldOfStudy").value;
	educationSection(school, degree, fieldOfStudy, startDate, endDate);
	educationForm.reset();
})

// Store Skills data in firebase
const skillsForm = document.querySelector("#skillsForm");
const skillsRef = collection(db, 'skills');

const skillsSection = async (skill, percentage) => {
	await addDoc(skillsRef, {
			skill: skill,
			percentage: percentage,
	});
}

skillsForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const skill = document.querySelector("#skill").value;
	const percentage = document.querySelector("#per").value;
	skillsSection(skill, percentage);
	skillsForm.reset();
});

// Store Contact data in firebase 
const contactForm = document.querySelector("#contactForm");
const contactRef = doc(db, 'contact', 'data');

const contactSection = async (email, phone, address, location) => {
	await setDoc(contactRef, {
			email: email,
			phone: phone,
			address: address,
			location: location,
	});
};

contactForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const email = document.querySelector("#email").value;
	const phone = document.querySelector("#phone").value;
	const address = document.querySelector("#address").value;
	const location = document.querySelector("#location").value;
	contactSection(email, phone, address, location);
	contactForm.reset();
});

// Store Social data in firebase
const socialForm = document.querySelector("#socialForm");
const socialRef = collection(db, 'social');

const socialSection = async (socialName, socialLink) => {
	await addDoc(socialRef, {
			socialName: socialName,
			socialLink: socialLink,
	});
}

socialForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const socialName = document.querySelector("#socialName").value;
	const socialLink = document.querySelector("#socialLink").value;
	socialSection(socialName, socialLink);
	socialForm.reset();
});

// Store About Me data in firebase
const aboutMeForm =document.querySelector("#aboutMeForm");
const aboutMeRef = doc(db, 'aboutMe', 'data');

// Store Hero Section data in firebase
const aboutMeSection = async (about, headline, resume) => {
  await setDoc(aboutMeRef, {
		about: about,
		headline: headline,
		resume: resume,
	 });
}

aboutMeForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const about = document.querySelector("#Aboutme2").value;
	const headline = document.querySelector("#NameAbout").value;
	const resume = document.querySelector("#cv").files[0];
	const storedResume = await uploadFile(resume);
	aboutMeSection(about, headline, storedResume);
	aboutMeForm.reset();
});
