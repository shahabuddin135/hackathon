"use strict";
// inputs
let Name = document.getElementById("name");
let jobTitle = document.getElementById("job-title");
//textarea
let summary = document.getElementById("summary");
let skills = document.getElementById("skills");
let experience = document.getElementById("experience");
let education = document.getElementById("education");
let phone = document.getElementById("phone");
let website = document.getElementById("web-url");
let email = document.getElementById("email");
Name.addEventListener('input', () => {
    document.getElementById('template-name').innerText = Name.value;
});
jobTitle.addEventListener('input', () => {
    document.getElementById('template-job-title').innerText = jobTitle.value;
});
summary.addEventListener('input', () => {
    document.getElementById('template-summary').innerText = summary.value;
});
skills.addEventListener('input', () => {
    document.getElementById('template-skills').innerText = skills.value;
});
experience.addEventListener('input', () => {
    document.getElementById('template-experience').innerText = experience.value;
});
education.addEventListener('input', () => {
    document.getElementById('template-education').innerText = education.value;
});
phone.addEventListener('input', () => {
    document.getElementById('template-phone').innerText = phone.value;
});
website.addEventListener('input', () => {
    document.getElementById('template-website').innerText = website.value;
});
email.addEventListener('input', () => {
    document.getElementById('template-email').innerText = email.value;
});
//////////////
// code to downlaod cv as pdf
///////////
