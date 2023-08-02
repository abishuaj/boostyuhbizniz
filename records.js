// Function to handle the click event on the grey button...ewwwww should prolly name these better
function handleGreyButtonClick() {
    window.location.href = 'index.html'; 
}
  
const greyButton = document.querySelector('.grey-button');
greyButton.addEventListener('click', handleGreyButtonClick);


document.addEventListener("DOMContentLoaded", function () {
const financialDocumentsButton = document.querySelector(".record-button:nth-of-type(3)");
const popup = document.getElementById("financial-documents-popup");

financialDocumentsButton.addEventListener("click", function () {
  popup.style.display = "block";
});

const closePopupButtons = document.querySelectorAll("#financial-documents-popup .popup-button");
  for (const closeButton of closePopupButtons) {
      closeButton.addEventListener("click", function () {
        popup.style.display = "none";
      });
    }
});


  // Function to close the pop-up when the close button is clicked
function closePopup() {
  const popup = document.querySelector('.popup');
  popup.style.display = 'none';
}

  

  // Function to open the pop-up when the financial documents button is clicked
function openPopup() {
  const popup = document.querySelector('.popup');
  popup.style.display = 'block';
}

  
const financialDocumentsButton = document.querySelector('.record-button:nth-child(3)');
financialDocumentsButton.addEventListener('click', openPopup);

let popup = document.getElementById("popup");

function cashFlowOpen() {
window.location.href = 'https://drive.google.com/file/d/1dGuXf_N6SXy-5F5iulARhkqXSFhg024p/view?usp=sharing';
  }
  
function incomeOpen() {
  window.location.href = 'https://drive.google.com/file/d/1a-58FWRsMlcR789nBzfdrNZI1S4hDrzX/view?usp=sharing';
}
  

// Function to show the Inflows popup
function showInflowsPopup() {
  const inflowsPopup = document.getElementById("inflowsPopup");
  inflowsPopup.style.display = "block";
}

// Function to show the Outflows popup
function showOutflowsPopup() {
  const outflowsPopup = document.getElementById("outflowsPopup");
  outflowsPopup.style.display = "block";
}

// Function to hide both popups
function hidePopups() {
  const inflowsPopup = document.getElementById("inflowsPopup");
  const outflowsPopup = document.getElementById("outflowsPopup");
  inflowsPopup.style.display = "none";
  outflowsPopup.style.display = "none";
}

// Function to hide the Inflows popup
function hideInflowsPopup() {
  const inflowsPopup = document.getElementById("inflowsPopup");
  inflowsPopup.style.display = "none";
}

// Function to hide the Outflows popup
function hideOutflowsPopup() {
  const outflowsPopup = document.getElementById("outflowsPopup");
  outflowsPopup.style.display = "none";
}

const inflowsButton = document.getElementById("inflowsButton");
inflowsButton.addEventListener("click", function() {
  showInflowsPopup();
  hideOutflowsPopup(); // ummmmmm Hides the other popup if visible
});

const outflowsButton = document.getElementById("outlowsButton");
outflowsButton.addEventListener("click", function() {
  showOutflowsPopup();
  hideInflowsPopup(); 
});

// Closes the popups when the user clicks the X button
const inflowsCloseButton = document.querySelector("#inflowsPopup .close-button");
inflowsCloseButton.addEventListener("click", hideInflowsPopup);

const outflowsCloseButton = document.querySelector("#outflowsPopup .close-button");
outflowsCloseButton.addEventListener("click", hideOutflowsPopup);
