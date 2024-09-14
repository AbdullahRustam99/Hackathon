const toggleBtn = document.getElementById("toggle-btn");
const toggle = document.getElementById("toggle");

function togglediv() {
	toggle.style.display = toggle.style.display === "none" ? "block" : "none";
	toggleBtn.textContent = toggleBtn.textContent === "arrow_downward" ? "arrow_upward" : "arrow_downward";
}

toggleBtn.addEventListener("click", togglediv);