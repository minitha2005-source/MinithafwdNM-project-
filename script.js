// Project

document.getElementById("viewBtn").addEventListener("click", () => {

  window.open("https://codepen.io/Minitha/pen/ByojEKP");
  });

// Project2

document.getElementById("viewBtn2").addEventListener("click", () => {

  window.open("https://codepen.io/Minitha/pen/azvEJQv");

  });
// Certificate 1

document.getElementById("btn1").addEventListener("click", () => {

  window.open("https://www.credly.com/badges/77b681df-2cca-4518-8bae-39d89bc400f4/public_url");

  });
// Certificate 2

document.getElementById("btn2").addEventListener("click", () => {

  window.open("https://acrobat.adobe.com/id/urn:aaid:sc:AP:e949e167-0312-4246-97cd-cc368b492789");

  });
// Certificate 3

document.getElementById("btn3").addEventListener("click", () => {

  window.open("https://acrobat.adobe.com/id/urn:aaid:sc:AP:c8e38784-389e-4d69-85df-04468b962cf4");

  });
// Handle contact form

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();

  const formMessage = document.getElementById("formMessage");

  if (name && email && message) {

    formMessage.style.color = "green";

    formMessage.textContent = "✅ Message sent successfully!";

    this.reset();

  } else {

    formMessage.style.color = "red";

    formMessage.textContent = "⚠️ Please fill all fields!";

  }

});

// Toggle mobile menu

const menuToggle = document.getElementById("menu-toggle"); 

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("show"); 

});