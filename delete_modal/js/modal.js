// Get the modal element
const deleteModal = document.getElementById("delete-modal");

// Get the button that opens the modal
const deleteBtn = document.getElementById("delete-button");

// Get the button elements within the modal
const cancelBtn = document.getElementById("cancel-button");
const closeBtn = document.getElementById("close");
const confirmBtn = document.getElementById("confirm-button");

// When the user clicks the delete button, open the modal
deleteBtn.addEventListener("click", function() {
    deleteModal.style.display = "block";
});

// When the user clicks the cancel button, close the modal
cancelBtn.addEventListener("click", function() {
    deleteModal.style.display = "none";
});

closeBtn.addEventListener("click", function() {
  deleteModal.style.display = "none";
});

// When the user clicks the confirm button, perform the delete action and close the modal
confirmBtn.addEventListener("click", function() {
  // TODO: Perform delete action
  deleteModal.style.display = "none";
});
