/**
 * Loading animation logic
 */
window.onload = function() {
  // Hide the loader
  document.getElementById("loader").style.display = "none";
};

const baseURL = window.location.origin + "/";

const absolutify = href =>
  href.startsWith('#') ? `https://www.aetheres.xyz${href}` : href;

document.querySelectorAll(".nav-link").forEach(link => {
  link.href = absolutify(link.getAttribute("href"));
});

document.getElementById('switch-btn').addEventListener('click', () => {
  document.getElementById('generated-image').classList.add('active');
});