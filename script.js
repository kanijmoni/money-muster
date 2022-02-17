



// income
const incomeInput = document.getElementById('incomeInput')
const incomeAmount = incomeInput.value;
const totalIncome = parseFloat(incomeAmount);

// food
const totalFoodCost = document.getElementById('food-cost');
const foodCost = totalFoodCost.value;
const totalFoodCostAmount = parseFloat(totalFoodCost);

// rent

const totalRentCost = document.getElementById('rent-cost');
const rentCost = totalRentCost.value;
const totalRentCostAmount = parseFloat(totalRentCost);

// cloths

const totalClothsCost = document.getElementById('cloths-cost');
const clothsCost = totalClothsCost.value;
const totalClothsCostAmount = parseFloat(totalClothsCost);

// total expenses
const totalExpenses = document.getElementById('total-expenses');
const totalExpensesAmount = totalFoodCostAmount + totalRentCostAmount + totalClothsCostAmount;
const 
// balance
const balance = document.getElementById('balance');
const previousBalanceText = balance.innerText;
const previousBalance = parseFloat(previousBalanceText);
const newBalance = newIncomeValue - newExpenses;
balance.innerText = newBalance;
const recentBalance = balance.innerText;

// remaining balance
const remainingBalance = document.getElementById('remaining-balance');
const newRemainingBalance = parseFloat(recentBalance) - parseFloat(newSavings);
remainingBalance.innerText = newRemainingBalance;

// save
saveField.value = "";


// document.getElementById('calculate-button').addEventListener('click'),function(){
//     const calculateInput = document.getElementById('food');
//     const
// }

// document.getElementById('calculate-button').addEventListener('click', function () {
//     const totalExpenses = food + rent + cloths;
//     console.log(totalExpenses);
// })