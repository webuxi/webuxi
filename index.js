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

{/* <div class="timeline-item">
            <div class="tl-icon">
              <i class="fas fa-user-graduate"></i>
            </div>
            <p class="tl-duration">2015 - 2019</p>
            <h5>B.Tech<span> - RIET</span></h5>
            <p>
              Graduated with a Bachelors degree in Computer Science and
              Engineering from Rajamahendri Institue of Engineering and
              Technology.
            </p>
          </div> */}
