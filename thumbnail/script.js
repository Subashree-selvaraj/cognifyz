const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modal-image');
const closeButton = document.getElementsByClassName('close')[0];

galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = image.src;
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});