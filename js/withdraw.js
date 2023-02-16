


document.getElementById('withdraw-button').addEventListener('click', function () {
   const withdrawField = document.getElementById('withdraw-field');
   const withdrawFieldString = withdrawField.value
   const withdrawFieldElement = parseFloat(withdrawFieldString);

   const withdrawText = document.getElementById('withdraw-text')
   const withdrawTextvalueString = withdrawText.innerText
   const withdrawTextElement = parseFloat(withdrawTextvalueString);

   const sumTotal = withdrawTextElement + withdrawFieldElement;
    withdrawText.innerText = sumTotal;


    const balanceText = document.getElementById('balance-text')
    const balanceTextValueString = balanceText.innerText
    const balanceElement = parseFloat(balanceTextValueString);

    const sumTotalBalance = balanceElement - withdrawFieldElement
    balanceText.innerText = sumTotalBalance;
})
