



document.getElementById('deposit-button').addEventListener('click', function () {
   const depositfield = document.getElementById('deposit-field');
   const depositfieldValueSting = depositfield.value;
   const depositfieldElement = parseFloat(depositfieldValueSting);

   const deposittext = document.getElementById('deposit-text')
   const deposittextValueSting = deposittext.innerText
   const deposittextdElement = parseFloat(deposittextValueSting);

   const sum = depositfieldElement + deposittextdElement;
   deposittext.innerText = sum;


   const balanceText = document.getElementById('balance-text')
   const balanceTextValueString = balanceText.innerText
   const balanceElement = parseFloat(balanceTextValueString);

   const sumOfbalance = balanceElement + depositfieldElement;
   balanceText.innerText = sumOfbalance;



})
