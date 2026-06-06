// 1. Fluid Smooth Scrolling
// This ensures that any scrolling on the page moves with a luxurious, smooth motion
document.documentElement.style.scrollBehavior = "smooth";

// 2. Background Music Controller
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.innerText = "𝄞⨾💿✮˚.⋆";
  } else {
    music.pause();
    musicBtn.innerText = "˖ ݁♬⋆.˚𝄞.";
  }
});

// 3. Scroll Appearance Animation (Intersection Observer)
// This watches for when elements appear on the screen as the user scrolls
const images = document.querySelectorAll('.fade-in-image');

const observerOptions = {
  root: null, // Uses the screen viewport
  threshold: 0.80 // Triggers when 15% of the image is visible on screen
};

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // If the image enters the screen frame
    if (entry.isIntersecting) {
      entry.target.classList.add('appear'); // Add the CSS styling to fade it in
      observer.unobserve(entry.target); // Stop watching this image once animated
    }
  });
}, observerOptions);

// Attach the observer to our images
images.forEach(image => {
  imageObserver.observe(image);
});