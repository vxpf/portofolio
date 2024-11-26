function updateClock() {
  const clockElement = document.getElementById('digital-clock');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');


  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();




function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // dit controlleert of er een andere thema is gekozen 
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
  }

  

  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const hamburgerLinks = document.querySelector('.hamburger-links');

  // het laten zien van het menu als je er op klikt
  hamburgerBtn.addEventListener('click', () => {
    hamburgerLinks.classList.toggle('hidden');
  });
});

// kijken of cookie al geacceepteerd is 
if (localStorage.getItem('cookiesAccepted')) {
  document.getElementById('cookie-banner').style.display = 'none';
}

// voor het accepteren van de cookies
document.getElementById('accept-cookies').addEventListener('click', function() {
  // slaat de keuze op van de gebruiker
  localStorage.setItem('cookiesAccepted', 'true');
  // Verbergt de banner door display style none te gebruiken
  document.getElementById('cookie-banner').style.display = 'none';
});

