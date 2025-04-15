const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) body.className = savedTheme;

toggleButton.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  }
});

// Typewriter effect
const typeText = "Hello, I'm Mohd Shahwaz Raza";
let i = 0;
const typewriter = document.getElementById("typewriter");
function typing() {
  if (i < typeText.length) {
    typewriter.textContent += typeText.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

// Skill animation
const progressCircles = document.querySelectorAll(".progress");
progressCircles.forEach(circle => {
  const percent = circle.dataset.percent;
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
});
