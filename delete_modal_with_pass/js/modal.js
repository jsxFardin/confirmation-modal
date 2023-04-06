// Get the modal element
const deleteModal = document.getElementById("delete-modal");

// Get the button that opens the modal
const deleteBtn = document.getElementById("delete-button");

//
const correctPassword = '123';
const passwordContainer = document.getElementById('password-container');


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
    passwordContainer.innerHTML = '';
});

closeBtn.addEventListener("click", function() {
  deleteModal.style.display = "none";
  passwordContainer.innerHTML = '';
});

// When the user clicks the confirm button, perform the delete action and close the modal
confirmBtn.addEventListener("click", function() {
   if (!passwordContainer.hasChildNodes()) {
    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Please enter your password:';
    passwordLabel.setAttribute('for', 'password-input');
    
    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('id', 'password-input');
    
    passwordContainer.appendChild(passwordLabel);
    passwordContainer.appendChild(passwordInput);
    return;
  }

  const passwordInput = document.getElementById('password-input');
  const password = passwordInput.value.trim();

  if (password === '') {
    alert('Please enter your password');
    return;
  }

  if (password !== correctPassword) {
    alert('Incorrect password. Please try again.');
    return;
  }

  // Password is correct, proceed with deletion
  deleteModal.style.display = 'none';
  passwordInput.value = '';
  passwordContainer.innerHTML = '';
});
