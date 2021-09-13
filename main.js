const billInput = document.getElementById("bill-amount");
const numberOfPeopleInput = document.getElementById("number-of-people");
const tipsItems = document.querySelectorAll(".tips-item");

const colorStrongCyan = "hsl(172, 67%, 45%)";
const colorSoftRed = "hsl(0, 93%, 68%)";
const colorTransparent = "transparent";

let hasError = false;
let billAmount = 0;
let numberOfPeople = 0;
let checkedRadio = null;

const changeBorderColor = (elem, borderColor) =>
  (elem.style.borderColor = borderColor);

billInput.onfocus = (e) => {
  changeBorderColor(e.target.parentNode, colorStrongCyan);
};

billInput.onblur = (e) => {
  changeBorderColor(e.target.parentNode, colorTransparent);
};

numberOfPeopleInput.onfocus = (e) => {
  changeBorderColor(e.target.parentNode, colorStrongCyan);
};

numberOfPeopleInput.onblur = (e) => {
  changeBorderColor(
    e.target.parentNode,
    hasError ? colorSoftRed : colorTransparent
  );
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
