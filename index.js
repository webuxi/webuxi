import { doc, getDoc, db, collection, getDocs } from './firebaseConfig.js';

// Get Hero/Home Section Data
const heroRef = doc(db, 'hero', 'data');
const heroData = await getDoc(heroRef);

const home = document.querySelector("#home");

	if (heroData.exists()) {
		const { title, description, image, resume } = heroData.data();
		home.innerHTML = `
		<div class="header-content">
        <div class="left-header">
          <div class="h-shape"></div>
          <div class="image">
            <img src=${image} alt="" />
          </div>
        </div>
        <div class="right-header">
          <h1 class="name">
            Hi, I'm <span>${title}</span>
          </h1>
          <p>${description}</p>
          <div class="btn-con">
            <a
              href=${resume}
              class="main-btn"
							download
            >
              <span class="btn-text">Download CV</span>
              <span class="btn-icon"><i class="fas fa-download"></i></span>
            </a>
          </div>
        </div>
      </div>
		`;
	} else {
		// doc.data() will be undefined in this case
		home.innerHTML = `<div class="header-content">No Content</di>` ;
	}

	// Get Skills list
	const skillsRef = collection(db, 'skills');
	const skillsDoc = await getDocs(skillsRef);
	
	const skillsList = () => {
		let skills = '';
		skillsDoc.forEach((doc) => {
			const { skill, percentage } = doc.data();
			skills += `
			<div class="progress-bar">
              <p class="prog-title">${skill}</p>
              <div class="progress-con">
                <p class="prog-text">${percentage}%</p>
                <div class="progress">
                  <span class="html" class="skill-percentage" style="width: ${percentage}%"></span>
                </div>
              </div>
            </div>
			`;
		});
		return skills;
	};
	
  // Get Experiences list
	const experiencesRef = collection(db, 'experience');
	const experiencesDoc = await getDocs(experiencesRef);

	const experiencesList = () => {
		let experiences = '';
		experiencesDoc.forEach((doc) => {
			const { position, company, endDate, startDate } = doc.data();
			experiences += `
			<div class="timeline-item">
			<div class="tl-icon">
				<i class="fas fa-briefcase"></i>
			</div>
			<p class="tl-duration">${startDate} - ${endDate}</p>
			<h5>${position}<span> - ${company}</span></h5>
			<p>
				experience description
			</p>
		</div>
			`;
	});
		return experiences;
	};

	// Get Education list
	const educationRef = collection(db, 'education');
	const educationDoc = await getDocs(educationRef);

	const educationList = () => {
		let education = '';
		educationDoc.forEach((doc) => {
			const { degree, school, fieldOfStudy } = doc.data();
			education += `
			<div class="timeline-item">
			<div class="tl-icon">
				<i class="fas fa-graduation-cap"></i>
			</div>
			<h5>${degree}<span> - ${school}</span></h5>
			<p>
			field Of Study: ${fieldOfStudy}
			</p>
		</div>
			`;
	});
		return education;
	};

	// Get About Me Section Data
	const aboutMe = document.querySelector("#about");
	const aboutRef = doc(db, 'aboutMe', 'data');
	const aboutData = await getDoc(aboutRef);

if (aboutData.exists()) {
	const { about, resume } = aboutData.data();
	aboutMe.innerHTML = `
	<div class="main-title">
          <h2>About <span>me</span></h2>
        </div>
        <div class="about-container">
          <div class="left-about">
            <h4>Information About me</h4>
            <p>${about}</p>
            <div class="btn-con">
              <a href="#" class="main-btn">
                <span class="btn-text">Download CV</span>
                <span class="btn-icon"><i class="fas fa-download"></i></span>
              </a>
            </div>
          </div>
          
        <div class="about-stats">
          <h4 class="stat-title">My Skills</h4>
          <div class="progress-bars">  
            ${skillsList()}
          </div>
        </div>
        <h4 class="stat-title">My Experience</h4>
        <div class="timeline">${experiencesList()}</div>

        <h4 class="stat-title">Education</h4>
        <div class="timeline">${educationList()}</div>
	`;
} else {
	// doc.data() will be undefined in this case
	aboutMe.innerHTML = `<div class="header-content">No Content</di>` ;
}

// Get Projects Section Data
const projects = document.querySelector("#portfolio");
const projectsRef = collection(db, 'projects');
const projectsDoc = await getDocs(projectsRef);

const projectsList = () => {
	let projects = '';
	projectsDoc.forEach((doc) => {
		const { projectName, projectImage, projectLink } = doc.data();
		projects += `
		<div class="portfolio-item">
            <div class="image">
              <img
                src=${projectImage}
                alt="project"
              />
              <h5>${projectName}</h5>
            </div>
            <div class="hover-items">
              <h3>Project Source</h3>
              <div class="icons">
                <a
                  href=${projectLink}
                  class="icon"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
		`;
	});
	return projects;
};

if(projectsDoc.size > 0) {
	projects.innerHTML = `
	<div class="main-title">
      <h2>My <span>Portfolio</span></h2>
  </div>
	<p class="port-text">
     Here is some of my work that I've done in various programming languages.
  </p>
	<div class="portfolios">
		${projectsList()}
	</div>
	`;
} else {
	projects.innerHTML = `<div class="header-content">No Content</di>` ;
}

// Get Social Media list
const socialMediaRef = collection(db, 'social');
const socialMediaDoc = await getDocs(socialMediaRef);

const socialMediaList = () => {
	let socialMedia = '';
	socialMediaDoc.forEach((doc) => {
		const { socialName, socialLink } = doc.data();
		socialMedia += `
		<a href=${socialLink} target="_blank">
					<i class="fab fa-${socialName}"></i>
		</a>
		`;
	});
	return socialMedia;
};

// Get Contact Section Data
const contact = document.querySelector("#contact");
const contactRef = doc(db, 'contact', 'data');
const contactData = await getDoc(contactRef);

if (contactData.exists()) {
	const { email, phone, address, location } = contactData.data();
   contact.innerHTML = `
	 <div class="contact-container">
	 <div class="main-title">
		 <h2>Contact <span>Me</span></h2>
	 </div>
	 <div class="contact-content-con">
		 <div class="left-contact">
			 <h4>Contact me here</h4>
			 <p>
				 I'm interested in new Opportunities- especially
				 ambitious or large projects. However if you have any other
				 request or question, don't hesitate to use the form.
			 </p>
			 <div class="contact-info">
				 <div class="contact-item">
					 <div class="icon">
						 <i class="fas fa-map-marker-alt"></i>
						 <span>Location: </span>
					 </div>
					 <p>${location}</p>
				 </div>
				 <div class="contact-item">
					 <div class="icon">
						 <i class="fas fa-envelope"></i>
						 <span>Email: </span>
					 </div>
					 <p>
						 <span>${email}</span>
					 </p>
				 </div>
				 <div class="contact-item">
					 <div class="icon">
						 <i class="fas fa-user-graduate"></i>
						 <span>Mobile Number: </span>
					 </div>
					 <p>
						 <span>${phone}</span>
					 </p>
				 </div>
			 </div>
			 <div class="contact-icons">
				 <div class="contact-icon">
					 ${socialMediaList()}
				 </div>
			 </div>
		 </div>
		 <div class="right-contact">
			 <form
				 action=${email}
				 method="post"
				 enctype="text/plain"
				 class="contact-form"
			 >
				 <div class="input-control i-c-2">
					 <input type="text" required placeholder="YOUR NAME" />
					 <input type="email" required placeholder="YOUR EMAIL" />
				 </div>
				 <div class="input-control">
					 <input type="text" required placeholder="ENTER SUBJECT" />
				 </div>
				 <div class="input-control">
					 <textarea
						 name=""
						 id=""
						 cols="15"
						 rows="8"
						 placeholder="Message Here..."
					 ></textarea>
				 </div>
				 <div class="submit-btn">
					 <button class="myButton" type="submit">Submit</button>
				 </div>
			 </form>
		 </div>
	 </div>
 </div>
	 `;
} else {
	contact.innerHTML = `<div class="header-content">No Content</di>` ;
}

