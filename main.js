const billInput = document.getElementById("bill-amount");
const numberOfPeopleInput = document.getElementById("number-of-people");
const tipsItems = document.querySelectorAll(".tips-item");

let hasError = false;
let billAmount = 0;
let numberOfPeople = 0;
let checkedRadio = null;

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
  }
};

billInput.onchange = (e) => {
  billAmount = parseInt(e.target.value);
  if (isNaN(billAmount)) billAmount = 0;
};

tipsItems.forEach((tipsItem) => {
  tipsItem.addEventListener("click", (e) => {
    e.preventDefault();
    tipsItem.children.tip.checked = true;
    if (checkedRadio) checkedRadio.classList.remove("checked");
    checkedRadio = tipsItem;
    checkedRadio.classList.add("checked");
  });
});
