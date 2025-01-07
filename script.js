window.onload = function() {
    alert("Welcome to Terredyme, The Next Contech!");
}

const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
