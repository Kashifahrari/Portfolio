// Open the modal and display the clicked image
function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
  caption.textContent = imgElement.alt;
}

// Close the modal when clicking outside the image or on the close button
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
