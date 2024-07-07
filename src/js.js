function showModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.classList.remove("hidden");
}

function hideModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.classList.add("hidden");
}
