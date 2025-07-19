document.getElementById("resumeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value.split(",").map(s => s.trim());
  const experience = document.getElementById("experience").value;

  const resumeHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Skills</h3>
    <ul>${skills.map(skill => `<li>${skill}</li>`).join("")}</ul>
    <h3>Experience</h3>
    <p>${experience}</p>
  `;

  document.getElementById("resumeOutput").innerHTML = resumeHTML;
  document.getElementById("downloadBtn").style.display = "inline-block";
});

// PDF download using jsPDF
document.getElementById("downloadBtn").addEventListener("click", () => {
  const resumeContent = document.getElementById("resumeOutput").innerHTML;
  const doc = new window.jspdf.jsPDF();
  doc.html(resumeContent, {
    callback: function (pdf) {
      pdf.save("resume.pdf");
    },
    x: 10,
    y: 10
  });
});

// Load jsPDF
const script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
document.head.appendChild(script);