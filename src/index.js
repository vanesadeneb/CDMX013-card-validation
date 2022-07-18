import validator from './validator.js';
document.getElementById("validar").addEventListener("click", function(e){
    e.preventDefault();
    let creditCardNumber = document.getElementById("cardNumber").value;
    validator.isValid(creditCardNumber);
});

console.log(validator);
