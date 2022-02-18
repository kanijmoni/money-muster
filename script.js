// expenses
function getInputValue(foodExpenses) {
    const foodInputField = document.getElementById(foodCost);
    const valueInFood = foodInputField.value;
    const value1 = parseFloat(valueInFood);
    if (value1 < 0) {
        return alert('negative number not allowed')
    }
    foodInputField.value = "";
    return value1;
}

getInputValue(foodExpenses);

function getInputValue(rentExpenses) {
    const rentInputField = document.getElementById(rentCost);
    const valueInRent = rentInputField.value;
    const value2 = parseFloat(valueInRent);
    if (value2 < 0) {
        return alert('negative number not allowed')
    }
    rentInputField.value = "";
    return value2;
}
getInputValue(rentExpenses);

function getInputValue(clothsExpenses) {
    const clothsInputField = document.getElementById(clothsCost);
    const valueInCloths = clothsInputField.value;
    const value3 = parseFloat(valueInCloths);
    if (value3 < 0) {
        return alert('negative number not allowed')
    }
    clothsInputField.value = "";
    return value3;
}
getInputValue(clothsExpenses);


function updateTotal(fieldId, amount) {
    const totalCost = document.getElementById('total-expenses');
    const previoustotalInText = totalCost.innerText;
    const previousTotal = parseFloat(previoustotalInText);

    const newtotal = previousTotal + amount;
    totalTag.innerText = newTotal;
    return newTotal;
}
getInputValue('total-expenses', amount);

// calculate button
document.getElementById('calculate-button').addEventListener('click', function () {

    const amount = getInputValue('foodCost');
    updateTotal('total-expenses', amount);
})
const balance = document.getElementById(totalExpenses);
const previousBalance = balance.innerText;
const amount1 = parseFloat(previousBalance);

function updateTotal(fieldId, amount1) {
    const totalIncome = document.getElementById('incomeInput');
    const previoustotalInText = totalIncome.innerText;
    const previousTotal = parseFloat(previoustotalInText);

    const newtotal = previousTotal - amount1;
    totalTag.innerText = newTotal;
    if (amount1 > previousTotal) {
        return alert('huge expenses')
    }
    return newTotal;
}
getInputValue('incomeInput', amount1);

document.getElementById('calculate-button').addEventListener('click', function () {

    const amount1 = getInputValue('incomeInput');
    updateTotal('incomeInput', amount1);
})


const saveBtn = document.getElementById("save-button");

// getting save input
const saveInput = getElementById('save');
const incomeAmount = getInputField('incomeInput');

const savingAmount = document.getElementById('savings');

const totalSavings = saveInput * incomeAmount / 100;
if (totalSavings > incomeAmount) {
    return alert('Insufficient Balance')
}
savingAmount.innerText = totalSavings;


// remaining balance
const remainingBalance = document.getElementById('remaining-balance');
const newRemainingBalance = parseFloat(recentBalance.innerText) - parseFloat(newSavings);
remainingBalance.innerText = newRemainingBalance;


saveField.value = "";
