'use strict'

const billTotal = document.getElementById("amount");
const tipBtns = document.querySelectorAll(".tip-btn");
const customTip = document.getElementById("custom-percent-tip");
const numberOfPeople = document.getElementById("number-of-people");
const errorZeroPerson = document.getElementById("zero-num-people");
const tipAmount = document.getElementById("tip-amount");
const totalAmountPerPerson = document.getElementById("amount-per-person");
const resetBtn = document.getElementById("btn-reset");

numberOfPeople.oninput = function() {
  if (Number(numberOfPeople.value) === 0) {
    errorZeroPerson.style.display = 'flex';
    numberOfPeople.style.border = "2px solid #B71C1C";
  } 
  if (Number(numberOfPeople.value) < 0) {
    errorZeroPerson.textContent = "Can't be less than zero";
    numberOfPeople.style.border = "2px solid #B71C1C";
  }
}

resetBtn.addEventListener("click", function(){
  billTotal.value = "";
  numberOfPeople.value = "";
  errorZeroPerson.textContent = "";
  numberOfPeople.style.border = "2px solid transparent";
  tipAmount.textContent = "$0.00";
  totalAmountPerPerson.textContent = "$0.00";
})