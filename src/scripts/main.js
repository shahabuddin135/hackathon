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
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// Download the resume
// // Get the download button
// const downloadButton = document.getElementById('download') as HTMLButtonElement;
// // Function to generate and download PDF
// function downloadPDF() {
//     const resume = document.querySelector('.main') as HTMLElement;
//     // Check if resume and downloadButton exist
//     if (!resume) {
//         console.error('Resume element not found');
//         return;
//     }
//     if (!downloadButton) {
//         console.error('Download button not found');
//         return;
//     }
//     html2canvas(resume).then(canvas => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF({
//             orientation: 'p',
//             unit: 'mm',
//             format: 'a4',
//         });
//         // Calculate dimensions for the PDF
//         const imgWidth = 210; // A4 width in mm
//         const imgHeight = canvas.height * imgWidth / canvas.width;
//         let position = 0;
//         pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//         pdf.save('resume.pdf');
//     }).catch(error => {
//         console.error('Error generating PDF:', error);
//     });
// }
// // Add event listener to the download button
// if (downloadButton) {
//     downloadButton.addEventListener('click', downloadPDF);
// } else {
//     console.error('Download button not found');
// }
