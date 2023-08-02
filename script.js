// Function to handle the click event on the blue button
function handleBlueButtonClick() {
    window.location.href = 'records.html';
  }
  
  // Function to handle the click event on the yellow button
function handleYellowButtonClick() {
    window.location.href = 'instaloan.html'; 
  }
  

const blueButton = document.querySelector('.blue-button');
const yellowButton = document.querySelector('.yellow-button');
  
blueButton.addEventListener('click', handleBlueButtonClick);
yellowButton.addEventListener('click', handleYellowButtonClick);

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


