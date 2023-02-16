


document.getElementById('withdraw-button').addEventListener('click', function () {
   const withdrawField = document.getElementById('withdraw-field');
   const withdrawFieldString = withdrawField.value
   const withdrawFieldElement = parseFloat(withdrawFieldString);

   const withdrawText = document.getElementById('withdraw-text')
   const withdrawTextvalueString = withdrawText.innerText
   const withdrawTextElement = parseFloat(withdrawTextvalueString);

   const sumTotal = withdrawTextElement + withdrawFieldElement;
    withdrawText.innerText = sumTotal;
})
