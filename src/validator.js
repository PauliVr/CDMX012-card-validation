const validator = {
  isValid: function isValid(creditCardNumber) {  //creamos la funcion como atributo del objeto 
    let num = []; //creamos el primer arreglo 
    let cardnum = [], 
      cardconvert = [],
      aux = []; //definimos arreglos auxiliares
    let flagA,
      flagB, 
      suma = 0; //definimos vaiables auxiliares
    let valid = false; //creamos una variable para los return
    //console.log('entrada del usuario' + creditCardNumber);
    let array = creditCardNumber.split(''); // convertimos en arreglo el string del usuario y lo asignamos a array
    //console.log('Array' + array);
    for (let i = creditCardNumber.length - 1; i >= 0; i--) { //recorremos el arreglo desde la ultima posicion a la primera para invertilo 
      //recorre el arreglo desde el ultimo valor al primero
      num.push(array[i]); //agregamos el valor al arreglo 
    }
    //console.log(num);
    for (let i = 0; i < num.length; i++) { //recorremos el arreglo desde 0 hasta su longitud
      //recorre el arreglo y hace las multiplicaciones
      if (i % 2) { //si la posicion es impar 
        num[i] = num[i] * 2;  //multiplica el valor por 2 y asigna a su posicion 
        if (num[i] >= 10) { //si el numero multiplicado es mayor a 10 
          aux = num[i].toString(); //convertimos el valor a u string y lo guardamos en aux
          flagA = aux.charAt(0); //asignamos el valor de la posicion 0 a flagA
          flagB = aux.charAt(1); //asignamos el valor de la posicion 1 a flagB
          cardnum[i] = parseInt(flagA) + parseInt(flagB); //guardamos en cardnum la suma de ambos digitos previamente convertidos a entero 
          cardconvert.push(cardnum[i]); //agregamos el valor al arreglo final num 
        } else { 
          cardconvert.push(parseInt(num[i])); //si no es mayor a 10 se agrega al arreglo final num directamente 
        }
      } else { //si no es un valor impar
        cardconvert.push(parseInt(num[i])); //agrega directamente el numero al arreglo final 
      }
      //console.log(cardconvert);
      //console.log(5);

      suma = suma + cardconvert[i]; //sumamos cada digito del arreglo 
      //console.log(suma);
    }
    if (suma >= 0 && suma <= 999) {
      suma % 10 === 0 ? (valid = true) : (valid = false); //condicion -> suma sea multiplo de 10 if-> asigna un true else-> asigna un false 
    }
    return valid; //regresamos el valor de valid ya sea true o false 
  },
  maskify: function maskify(creditCardNumber) { //creamos la funcion como valor del atributo del obj
    let creditNumber = creditCardNumber.split(''); //creamos el numero un arreglo 
    let array = []; 
    let res;
    //console.log(creditCardNumber);

    for (let i = 0; i < creditNumber.length; i++) { //recorremos el arreglo hasta su longitud 
      if (i >= 0 && i < creditNumber.length - 4) { //si la posicion es de 0 a la longitud menos 4
        array.push('#'); //agremos al arreglo un #
      } else { 
        array.push(creditNumber[i]); //agreamos numero 
      }
    }
    res = array.join(''); //le quita las , al arreglo y regresa string

    return res; //retormanos el valor que tenga la variable 
  },
};

export default validator;
