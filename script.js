// Get the button and the features section
const learnMoreBtn = document.getElementById("learnMoreBtn");
const featuresSection = document.getElementById("features");

// Add an event listener to the button
learnMoreBtn.addEventListener("click", function() {
  featuresSection.classList.toggle("show"); // Toggle the slide effect
});

