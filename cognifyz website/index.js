const featuresSection = document.getElementById("features-section");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const featuresSectionOffsetTop = featuresSection.offsetTop;
  const featuresSectionHeight = featuresSection.offsetHeight;

  if (scrollPosition >= featuresSectionOffsetTop && scrollPosition < featuresSectionOffsetTop + featuresSectionHeight) {
    featuresSection.classList.add("visible");
  } else {
    featuresSection.classList.remove("visible");
  }
});