let regExpNumber = /^\d{1,16}$/; //expresion regular para validar que en input tenga entre 1 hasta 16 digitos 
let regExpName = /^([A-ZÑ]{1}[a-zñ]+[\s]*)+$/; //expresion regular que permita ingresar el nombre 

if (document.querySelector('#name')) { //Bloque para validar los datos que entran al input Sí encuentra ese elemento en el HTML detecta que esta en la primer pág
  document.querySelector('#btn').addEventListener('click', function (e) {
    //seleccion del boton y le agregamos un evento que al pasar el evento click entre a la funcion
    e.preventDefault(); //permite que no se recarge la página
    let cardName = document.querySelector('#name').value; //seleccionamos el valor del input de nombre y lo asigno a la variale cardName
    let cardNumber = document.querySelector('#card_number').value; //sellecciono el valor del input del numero de tarjeta y lo asigno a la variable cardNumber
    //console.log(cardName, cardNumber);

    let cardNumberAlert = document.querySelector('#card-number-alert'); //selecciono el contenedor para la alerta de del numero de tajeta invalido
    let cardNameAlert = document.querySelector('#card-name-alert'); //selecciono el contenedor para la alerta de del nombre invalido

    if (regExpName.test(cardName)) { //si el numero ingresado en el input cumple con la expresion regular y el test regresa un true 
      //let correctName = cardName;
      cardNameAlert.classList.remove('red', 'margin'); 
      cardNameAlert.innerHTML = ``;  //quita texto y clases
      localStorage.setItem('nameCard', cardName); //guarda en la memoria del navegador 

      // console.log(correctName);
    } else { //bloque para ingresar alerta de invalido 
      cardNameAlert.innerHTML = `<p>nombre que ingresaste es inválido</p>`;
      cardNameAlert.classList.add('red', 'margin');
    }

    if (regExpNumber.test(cardNumber)) {
      //validamos que la entrada del usuario sea valida conla ER
      //let correctNumber = cardNumber; //guarda en correctNumber el numero que ingreso el usuario
      cardNumberAlert.classList.remove('red', 'margin');
      cardNumberAlert.innerHTML = ``; //quita texto y clases
      localStorage.setItem('numberCard', cardNumber); //guarda en la memoria del navegador  llave->valor para el set 
    } else {
      //bloque para ingresar alerta de invalido
      cardNumberAlert.innerHTML = `<p> el numero de tarjeta es inválido </p>`;
      cardNumberAlert.classList.add('red', 'margin');
    }

    if (regExpName.test(cardName) && regExpNumber.test(cardNumber)) { //si ambos datos ingresados en el input cumplen la expresion regular 
      window.location.href = 'card.html'; //cambiamos de ventana a card.html 
    }
  });
} else {  //si no detecta que esta en la primer pág por lo tanto esta en la segunda 
  let localNumber = localStorage.getItem('numberCard'); //obtener el valor de el numero guardado en la memoria del navegador y asignarlo a la variable 
  let isvalid = validator.isValid(localNumber); //mandamos el numero de tarjeta al objeto validator e invocamos el primer valor que contiene la funcion IsValid
  //console.log(isvalid);

  let validAlert = document.querySelector('#isValidAlert'); //seleccionamos el contenedor para la aleta de si la tajeta es valida o no 

  if (isvalid === true) { //si al invocar la funcion nos regresa un verdadero 
    validAlert.innerHTML = `<h3>Tajeta de crédito válida</h3> `; //agregamos el texto de la alerta --> valida
    validAlert.classList.add('isvalid'); //agregamos su clase para el estilo 
  } else {
    validAlert.innerHTML = `<h3>Tajeta de crédito inválida</h3> `; //agregamos el texto de la alerta -->invalida
    validAlert.classList.add('isinvalid'); //agregamos su clase para el estilo
  }

  let numberMaskify = localStorage.getItem('numberCard'); //obtenemos el valor guardado en la memoria y lo asignamos en la variable 
  let maskify = validator.maskify(numberMaskify); //mandamos el numero de tarjeta al objeto e invocamos la funcion 

  document.querySelector('#cardName').innerHTML =
    localStorage.getItem('nameCard'); //agrega el nombre ingresado en el input 

  document.querySelector('#cardNumber').innerHTML = maskify; //imprimimos el resultado de la funcion maskify 
  //console.log(maskify);
  localStorage.clear(); // limpiamos la memoria del navegador cuando hace todo el proceso 
}

import validator from './validator.js';

//console.log(validator);
