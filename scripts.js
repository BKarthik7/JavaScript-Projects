document.body.classList.add("dark-mode");


const toggleButton = document.getElementById("toggle-theme");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    sunIcon.style.display = document.body.classList.contains("dark-mode") ? "none" : "block";
    moonIcon.style.display = document.body.classList.contains("dark-mode") ? "block" : "none";
});
