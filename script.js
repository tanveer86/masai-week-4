// add income buttons
var addSalary = document.getElementById('addSalary');
var addRoyalty = document.getElementById('addRoyalty');
var addBonus = document.getElementById('addBonus');
var addOther = document.getElementById('addOther');
var addTotal = document.getElementById('addTotal');

// choose add income divs
var chooseSalary = document.getElementById('chooseSalary');
var chooseRoyalties = document.getElementById('chooseRoyalties');
var chooseBonus = document.getElementById('chooseBonus');
var chooseOther = document.getElementById('chooseOther');

// add income button divs
var salaryDiv = document.getElementById('salaryDiv');
var royaltyDiv = document.getElementById('royaltyDiv');
var bonusDiv = document.getElementById('bonusDiv');
var otherDiv = document.getElementById('otherDiv');
var totalSubmitDiv = document.getElementById('totalSubmitDiv');

// add label elements ids
var salaryLabel = document.getElementById('salaryLabel');
var royaltyLabel = document.getElementById('royaltyLabel');
var bonusLabel = document.getElementById('bonusLabel');
var otherLabel = document.getElementById('otherLabel');


var total = 0;
var salaryValue = 0;
var royaltyValue = 0;
var bonusValue = 0;
var otherValue = 0;

addSalary.addEventListener('click', function(){
    var salaryInput = document.getElementById('salaryInput').value;
    salaryInput = Number(salaryInput);
    if (total < salaryInput) {
        salaryValue = salaryInput;
        chooseSalary.removeAttribute('class');
        chooseRoyalties.setAttribute('class', 'selectedTag');
        salaryDiv.setAttribute('class', 'displayNone');
        royaltyDiv.removeAttribute('class');
        var total1 = document.createElement('p');
        total1.textContent = "Your total income is " + salaryValue;
        royaltyDiv.insertBefore(total1, royaltyLabel);
    }else{
        alert('Please Enter Your Salary')
    }
})

addRoyalty.addEventListener('click', function(){
    var royaltyInput = document.getElementById('royaltyInput').value;
    royaltyInput = Number(royaltyInput);
    royaltyValue = royaltyInput;
    chooseRoyalties.removeAttribute('class');
    chooseBonus.setAttribute('class', 'selectedTag');
    royaltyDiv.setAttribute('class', 'displayNone');
    bonusDiv.removeAttribute('class');
    total = royaltyValue + salaryValue;
    var total2 = document.createElement('p');
    total2.textContent = "Your total income is " + total;
    bonusDiv.insertBefore(total2, bonusLabel);
})

addBonus.addEventListener('click', function(){
    var bonusInput = document.getElementById('bonusInput').value;
    bonusInput = Number(bonusInput);
    bonusValue = bonusInput;
    chooseBonus.removeAttribute('class');
    chooseOther.setAttribute('class', 'selectedTag');
    bonusDiv.setAttribute('class', 'displayNone');
    otherDiv.removeAttribute('class');
    total = bonusInput + royaltyValue + salaryValue;
    var total3 = document.createElement('p');
    total3.textContent = "Your total income is " + total;
    otherDiv.insertBefore(total3, otherLabel);
})

addOther.addEventListener('click', function(){
    var otherInput = document.getElementById('otherInput').value;
    otherInput = Number(otherInput);
    otherValue = otherInput;
    otherDiv.setAttribute('class', 'displayNone');
    totalSubmitDiv.removeAttribute('class');
    total += otherInput;
    var total4 = document.createElement('p');
    total4.textContent = "Your total income is " + total;
    totalSubmitDiv.insertBefore(total4, addTotal);
})

addTotal.addEventListener('click', function(){
    var totalDisplay = document.getElementById('totalDisplay');
    totalDisplay.textContent = "Your total income for this month is " + total;
    var allIncome = document.getElementById('allIncome');
    allIncome.setAttribute('class', 'displayNone');
    var displayExpense = document.getElementById('displayExpense');
    displayExpense.removeAttribute('class');
})

var submitExpense = document.getElementById('submitExpense');

submitExpense.addEventListener('click', function(){
    var rentInput = document.getElementById('rentInput').value;
    rentInput = Number(rentInput);
    var foodInput = document.getElementById('foodInput').value;
    foodInput = Number(foodInput);
    var travelInput = document.getElementById('travelInput').value;
    travelInput = Number(travelInput);
    var emiInput = document.getElementById('emiInput').value;
    emiInput = Number(emiInput);
    var otherExpenseInput = document.getElementById('otherExpenseInput').value;
    otherExpenseInput = Number(otherExpenseInput);
    total -= rentInput + foodInput + travelInput + emiInput + otherExpenseInput;
    var totalSavingNow = document.getElementById('totalSavingNow');
    totalSavingNow.removeAttribute('class');
    var totalSavingall = document.getElementById('totalSavingall');
    totalSavingall.textContent = "Your total savings for this month is " + total;
})