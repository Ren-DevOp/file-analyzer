// Dark/Light Mode Toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade-in Sections on Scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

async function loadProjects() {
  try {
    const response = await fetch("http://127.0.0.1:8000/projects");
    const projects = await response.json();

    const grid = document.querySelector(".project-grid");
    grid.innerHTML = "";

    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.github}" target="_blank">View on GitHub</a>
      `;
      grid.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load projects:", error);
  }
}

window.addEventListener("DOMContentLoaded", loadProjects);
