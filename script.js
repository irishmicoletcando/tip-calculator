'use strict'

const billTotal = document.getElementById("amount");
const tipBtns = document.querySelectorAll(".tip-btn");
const tipSelected = document.getElementsByClassName(".tip-btn-selected");
const customTip = document.getElementById("custom-percent-tip");
const numberOfPeople = document.getElementById("number-of-people");
const errorZeroPerson = document.getElementById("zero-num-people");
const tipAmount = document.getElementById("tip-amount");
const totalAmountPerPerson = document.getElementById("amount-per-person");
const resetBtn = document.getElementById("btn-reset");

let percent = 0;

// Add input event listener to bill and number of people input fields
billTotal.addEventListener("input", updateTip);
numberOfPeople.addEventListener("input", updateTip);

tipBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    // Remove "tip-btn-selected" class from all tip buttons
    tipBtns.forEach(btn => {
      btn.classList.remove("tip-btn-selected");
    });
    
    // Add "tip-btn-selected" class to the clicked tip button
    btn.classList.add("tip-btn-selected");
    
    // Update the percent variable and call the updateTip function
    percent = Number(btn.textContent.slice(0, -1));
    customTip.value = "";
    updateTip();
  });
});

customTip.addEventListener("input", function () {
  // Update the percent variable and call the updateTip function
  percent = Number(customTip.value);
  tipBtns.forEach(btn => {
    btn.classList.remove("tip-btn-selected");
  });
  updateTip();
});

// Validate inputs for number of people
numberOfPeople.addEventListener("input", function() {
  let numPeople = Number(numberOfPeople.value)
  if (numPeople === 0) {
    errorZeroPerson.style.display = 'flex';
    errorZeroPerson.textContent = "Can't be zero";
    numberOfPeople.style.border = "2px solid #B71C1C";
  } else if (numPeople < 0) {
    errorZeroPerson.textContent = "Can't be less than zero";
    numberOfPeople.style.border = "2px solid #B71C1C";
  } else {
    errorZeroPerson.style.display = "none"
    numberOfPeople.style.border = "2px solid var(--strong-cyan)";
  }
})

// Add click event listener to reset button
resetBtn.addEventListener("click", function(){
  billTotal.value = "";
  tipBtns.forEach(tipBtn => {
    tipBtn.classList.remove("tip-btn-selected");
  })
  customTip.value = "";
  numberOfPeople.value = "";
  errorZeroPerson.textContent = "";
  numberOfPeople.style.border = "2px solid transparent";
  tipAmount.textContent = "$0.00";
  totalAmountPerPerson.textContent = "$0.00";
})

// Update the tip and total amount
function updateTip() {
  const bill = Number(billTotal.value);
  const numPeople = Number(numberOfPeople.value);

  // Check if the inputs are all valid numbers and not equal to 0
  if (isNaN(bill) || isNaN(numPeople) || bill === 0 || numPeople === 0 || numPeople < 0) {
    // Exit the function if bill or numPeople is not a number or is zero
    return;
  }

  // Check if customTip contains a valid value, and use it if it does, otherwise use the percent variable
  let tipPercentage = customTip.value ? Number(customTip.value) : percent;

  let tipTotal = bill * (tipPercentage / 100);
  let tipPerson = tipTotal / numPeople;
  let totalPerson = (bill + tipTotal) / numPeople;

  tipAmount.textContent = "$" + tipPerson.toFixed(2);
  totalAmountPerPerson.textContent = "$" + totalPerson.toFixed(2);
}