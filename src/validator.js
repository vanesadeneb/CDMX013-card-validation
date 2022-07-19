const validator = {
  isValid: function(creditCardNumber){
    let reverseNumber = creditCardNumber.split("").reverse().join("");
    let validationCardNumber = [];
    //Algoritmo Luhn
    //Guardando los números invertidos en el array validationCardNumber
    for(let i=0; i < creditCardNumber.length; i++){
      validationCardNumber.push(parseInt(reverseNumber[i]));
    }
    //Operacion de duplicar los números pares
    for(let j=1; j < validationCardNumber.length; j+=2 ){
        let doubled = validationCardNumber[j]*2;
        validationCardNumber[j] = doubled;
        let stringDoubled = doubled.toString();
        //console.log(stringDoubled);
        //Sumar los números que sean mayor a un dígito
        if(stringDoubled.length > 1){
            let newNumber = parseInt(stringDoubled.charAt(0)) + parseInt(stringDoubled.charAt(1));
            validationCardNumber[j] = newNumber;          
        }
    }
    //Sumar todos los dígitos
    const sum = validationCardNumber.reduce((a,b) => a + b, 0)
    console.log(sum);
    console.log(validationCardNumber);
    if(sum % 10 === 0){
      console.log("Es valida!");
      return true;
    }else{
      console.log("No es valida!");
      return false;
    }
    //
    return;
  },
  maskify: function(){

  },
};
export default validator;
