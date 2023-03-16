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

tipBtns.forEach(tipBtn => {
  tipBtn.addEventListener("click", function() {
    tipBtn.classList.add("tip-btn-selected");
    // let tipValue = parseFloat(tipBtn.textContent);
  })
  tipBtn.classList.remove("tip-btn-selected");
})

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