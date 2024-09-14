const NameEle = document.getElementById("First-name");
const dateEle = document.getElementById("D-O-B");
const emailEle = document.getElementById("Email");
const numberEle = document.getElementById("Number");
const pictureEle = document.getElementById("Picture");
const educationEle = document.getElementById("Education");
const experienceEle = document.getElementById("Experience");
const skillEle = document.getElementById("Skills");


const output = document.getElementById("resumeOutput");
const submitBtn = document.getElementById("sub-btn");

function generateResume() {
  if (NameEle && emailEle && numberEle && pictureEle && dateEle && educationEle && experienceEle && skillEle) {
    const userDetails = {
      name: NameEle.value,
      date: dateEle.value,
      number: numberEle.value,
      email: emailEle.value,
      picture: pictureEle.value,
      education: educationEle.value,
      experience: experienceEle.value,
      skill: skillEle.value,

    };
    let img;
    pictureEle.addEventListener("change", (event) => {
      const file = event.target.file[0];
      console.log(file);

      const reader = new FileReader();
      reader.addEventListener("load", () => {
        img = reader.result;
        console.log(img);

      });
      reader.readAsDataURL(file);
    });

    let skill = userDetails.skill.trim().split(",");
    let education = userDetails.education.trim().split(",");
    let experience = userDetails.experience.trim().split(",");

    let resume = ` <div class="subdiv">
        <h2>Resume</h2>
        <div class="Personal">
          <h2>Personal Information</h2><hr />
          <div class="grid">
            <div>
              <h4>Full Name : </h4><p>${userDetails.date}</p><br />
              <h4>Date of Birth : </h4><p>${userDetails.date}</p><br />
              <h4>Cell Number : </h4><p>${userDetails.number}</p><br />
              <h4>Email : </h4><p>${userDetails.email}</p><br />
            </div>
            <img
              class="img"
              src="${img}"
              alt="profile Picture"
              width="50%"
              height="100%"
            />
          </div>
        </div>
        <div class="Education">
          <h2>Education</h2><hr />
	  <h4><ul>${education.map((s) => `<li>${s}</li>`).join("")}</ul></h4>
        </div>
        <div class="Experience">
          <h2>Experience</h2><hr />
	  <h4><ul>${experience.map((s) => `<li>${s}</li>`).join("")}</ul></h4>
        </div>
        <div class="Skills">
          <h2>Skills</h2> <hr />
          <h4><ul>${skill.map((s) => `<li>${s}</li>`).join("")}</ul></h4>
        </div>
      </div>`;


    if (userDetails.date !== "" && userDetails.education !== "" && userDetails.email !== "" && userDetails.experience !== "" && userDetails.name !== "" && userDetails.number !== "" && userDetails.picture !== "" && userDetails.skill !== "") {
      output.innerHTML = resume;
    } else {
      alert("Fill Complete Information");
    }
  }


}
submitBtn.addEventListener("click", generateResume);