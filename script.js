window.onload = loadData;

function generateResume() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const summary = document.getElementById("summary").value;
  const skills = document.getElementById("skills").value;
  const experience = document.getElementById("experience").value;

  document.getElementById("r-name").innerText = name || "Your Name";
  document.getElementById("r-email").innerText = email;
  document.getElementById("r-phone").innerText = phone;
  document.getElementById("r-summary").innerText = summary;
  document.getElementById("r-experience").innerText = experience;

  const skillsList = document.getElementById("r-skills");
  skillsList.innerHTML = "";

  skills.split(",").forEach(skill => {
    if (skill.trim()) {
      const li = document.createElement("li");
      li.innerText = skill.trim();
      skillsList.appendChild(li);
    }
  });

  saveData();
}

function printResume() {
  window.print();
}

function saveData() {
  const data = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    summary: summary.value,
    skills: skills.value,
    experience: experience.value
  };
  localStorage.setItem("resumeData", JSON.stringify(data));
}

function loadData() {
  const data = JSON.parse(localStorage.getItem("resumeData"));
  if (!data) return;

  name.value = data.name;
  email.value = data.email;
  phone.value = data.phone;
  summary.value = data.summary;
  skills.value = data.skills;
  experience.value = data.experience;

  generateResume();
}
