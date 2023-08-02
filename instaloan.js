// Function to handle the click event on the grey button
function handleGreyButtonClick() {
  window.location.href = 'index.html'; // Replace 'index.html' with the actual filename of your home page
}

// Add event listener to the grey button
const greyButton = document.querySelector('.grey-button');
greyButton.addEventListener('click', handleGreyButtonClick);

let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

// Declare the balance variable globally
let balance = 2340000.65; // Initial balance

// Function to open the custom amount popup
function openCustomAmountPopup() {
  let customAmountPopup = document.getElementById("custom-amount-popup");
  customAmountPopup.classList.add("open-popup");
}

function closeCustomAmountPopup() {
  let customAmountPopup = document.getElementById("custom-amount-popup");
  customAmountPopup.classList.remove("open-popup");
}


// Function to handle the click event on the "CONFIRM" button
// Function to handle the click event on the "CONFIRM" button
// Add a variable to keep track of whether the custom amount button has been clicked
let customAmountButtonClicked = false;

// Function to handle the click event on the "CONFIRM" button
function confirmCustomAmount() {
  // Show the agreement message when the "CONFIRM" button is clicked
  showAgreementMessage(); // Function to show the agreement message

  // Check if the custom amount button has been clicked before
  if (!customAmountButtonClicked) {
    // Disable the custom amount button after the first click
    const customAmountButton = document.getElementById("custom-amount-button");
    customAmountButton.disabled = true;
    customAmountButtonClicked = true;
  } else {
    // Show the message that the user already has an InstaLoan
    showInstaLoanMessage();
  }
}


// Function to show the agreement message
function showAgreementMessage() {
  let agreementMessage = document.getElementById("agreement-message");
  agreementMessage.classList.add("open-popup");
}

// Function to close the agreement message
function closeAgreementMessage() {
  let agreementMessage = document.getElementById("agreement-message");
  agreementMessage.classList.remove("open-popup");
}

// Function to show the InstaLoan message
function showInstaLoanMessage() {
  let instaLoanMessage = document.getElementById("insta-loan-message");
  instaLoanMessage.classList.add("open-popup");
}

// Function to close the InstaLoan message
function closeInstaLoanMessage() {
  let instaLoanMessage = document.getElementById("insta-loan-message");
  instaLoanMessage.classList.remove("open-popup");
}

function updateBalanceAndClosePopup() {
  // Update the balance immediately when the "OK" button is clicked
  let amountInput = document.getElementById("amount-input");
  let customAmount = parseFloat(amountInput.value);

  if (!isNaN(customAmount) && customAmount > 0) {
    balance += customAmount; // Update the balance with the custom amount
    document.getElementById("account-balance").textContent = balance.toFixed(2);
  }

  // Close the agreement message popup after clicking "OK"
  closeAgreementMessage();
}