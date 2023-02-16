



document.getElementById('deposit-button').addEventListener('click', function () {
   const depositfield = document.getElementById('deposit-field');
   const depositfieldValueSting = depositfield.value;
   const depositfieldElement = parseFloat(depositfieldValueSting);

   const deposittext = document.getElementById('deposit-text')
   const deposittextValueSting = deposittext.innerText
   const deposittextdElement = parseFloat(deposittextValueSting);

   const sum = depositfieldElement + deposittextdElement;

   deposittext.innerText = sum;
})
