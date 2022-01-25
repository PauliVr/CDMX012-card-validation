const validator = {
  isValid: function isValid(creditCardNumber) {
    let num = [];
    let cardnum = [],
      cardconvert = [],
      aux = []; //definimos arreglos auxiliares
    let flagA,
      flagB,
      suma = 0; //definimos vaiables auxiliares
    let valid = false;
    //console.log('entrada del usuario' + creditCardNumber);
    let array = creditCardNumber.split(''); // convertimos en arreglo el string del usuario
    //console.log('Array' + array);
    for (let i = creditCardNumber.length - 1; i >= 0; i--) {
      //recorre el arreglo desde el ultimo valor al primero
      num.push(array[i]); //creamos el arreglo invertido
    }
    //console.log(num);
    for (let i = 0; i < num.length; i++) {
      //recorre el arreglo y hace las multiplicaciones
      if (i % 2) {
        num[i] = num[i] * 2;
        if (num[i] >= 10) {
          aux = num[i].toString();
          flagA = aux.charAt(0);
          flagB = aux.charAt(1);
          cardnum[i] = parseInt(flagA) + parseInt(flagB);
          cardconvert.push(cardnum[i]);
        } else {
          cardconvert.push(parseInt(num[i]));
        }
      } else {
        cardconvert.push(parseInt(num[i]));
      }
      //console.log(cardconvert);
      //console.log(5);

      suma = suma + cardconvert[i];
      //console.log(suma);
    }
    if (suma >= 0 && suma <= 999) {
      suma % 10 === 0 ? (valid = true) : (valid = false);
    }
    return valid;
  },
  maskify: function maskify(creditCardNumber) {
    let creditNumber = creditCardNumber.split('');
    let array = [];
    let res;
    //console.log(creditCardNumber);

    for (let i = 0; i < creditNumber.length; i++) {
      if (i >= 0 && i < creditNumber.length - 4) {
        array.push('#');
      } else {
        array.push(creditNumber[i]);
      }
    }
    res = array.join('');

    return res;
  },
};

export default validator;
