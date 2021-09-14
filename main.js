const billInput = document.getElementById("bill-amount");
const numberOfPeopleInput = document.getElementById("number-of-people");
const tipsItems = document.querySelectorAll(".tips-item");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");

let hasError = false;
let checkedRadio = null;
let billAmount = 0;
let numberOfPeople = 0;
let tipPercent = 0;

window.onload = () => {
  billAmount = parseInt(billInput.value);
  numberOfPeople = parseInt(numberOfPeopleInput.value);
  tipPercent = checkedRadio?.children.tip.value;
};

const calculate = () => {
  if (
    isNaN(billAmount) ||
    isNaN(tipPercent) ||
    isNaN(numberOfPeople) ||
    numberOfPeople < 1
  ) {
    console.log("leaving");
    return;
  }
  const tip = (billAmount * tipPercent) / 100;
  const total = billAmount + tip;
  tipAmount.textContent = `$${Number(tip / numberOfPeople).toFixed(2)}`;
  totalAmount.textContent = `$${Number(total / numberOfPeople).toFixed(2)}`;
};

billInput.onfocus = (e) => {
  e.target.parentNode.classList.add("focused");
};

billInput.onblur = (e) => {
  e.target.parentNode.classList.remove("focused");
};

numberOfPeopleInput.onfocus = (e) => {
  e.target.parentNode.classList.add("focused");
};

numberOfPeopleInput.onblur = (e) => {
  e.target.parentNode.classList.remove("focused");
};

numberOfPeopleInput.onchange = (e) => {
  numberOfPeople = parseInt(e.target.value);
  if (isNaN(numberOfPeople) || numberOfPeople === 0) {
    hasError = true;
    e.target.parentNode.parentNode.classList.add("error");
    numberOfPeople = 0;
  } else {
    hasError = false;
    e.target.parentNode.parentNode.classList.remove("error");
    calculate();
  }
};

billInput.onchange = (e) => {
  billAmount = parseInt(e.target.value);
  if (isNaN(billAmount)) billAmount = 0;
  else calculate();
};

tipsItems.forEach((tipsItem) => {
  tipsItem.addEventListener("click", () => {
    tipsItem.children.tip.checked = true;
    tipsItem.children.tip.focus();
  }),
    tipsItem.children.tip.addEventListener("focus", () => {
      if (checkedRadio != tipsItem) {
        if (checkedRadio) checkedRadio.classList.remove("checked");
        checkedRadio = tipsItem;
        checkedRadio.classList.add("checked");
        tipPercent = checkedRadio.children.tip.value;
        if (isNaN(tipPercent)) tipPercent = 0;
        else calculate();
      }
    });
});
