const cal = document.getElementById("calculate");
const billInp = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal(){
    const billValue = billInp.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
}

cal.addEventListener("click", calculateTotal);