let regExpNumber = /^\d{1,16}$/;
let regExpName = /^([A-ZÑ]{1}[a-zñ]+[\s]*)+$/;

if (document.querySelector('#name')) {
  document.querySelector('#btn').addEventListener('click', function (e) {
    e.preventDefault();
    let cardName = document.querySelector('#name').value;
    let cardNumber = document.querySelector('#card_number').value;
    console.log(cardName, cardNumber);

    let cardNumberAlert = document.querySelector('#card-number-alert');
    let cardNameAlert = document.querySelector('#card-name-alert');

    if (regExpName.test(cardName)) {
      let correctName = cardName;
      cardNameAlert.classList.remove('red');
      cardNameAlert.innerHTML = ``;
      localStorage.setItem('nameCard', cardName);

      console.log(correctName);
    } else {
      cardNameAlert.innerHTML = `<p>nombre que ingresaste es inválido</p>`;
      cardNameAlert.classList.add('red');
    }

    if (regExpNumber.test(cardNumber)) {
      //validamos que la entrada del usuario sea valida conla ER
      let correctNumber = cardNumber; //guarda en correctNumber el numero que ingreso el usuario
      cardNumberAlert.classList.remove('red');
      cardNumberAlert.innerHTML = ``;
      localStorage.setItem('numberCard', cardNumber);
    } else {
      cardNumberAlert.innerHTML = `<p> el numero de tarjeta es inválido </p>`;
      cardNumberAlert.classList.add('red');
    }

    if (regExpName.test(cardName) && regExpNumber.test(cardNumber)) {
      window.location.href = 'card.html';
    }
  });
} else {
  let localNumber = localStorage.getItem('numberCard');
  let isvalid = validator.isValid(localNumber);
  console.log(isvalid);

  let validAlert = document.querySelector('#isValidAlert');

  if (isvalid === true) {
    validAlert.innerHTML = `<h3>Tajeta de crédito válida</h3> `;
    validAlert.classList.add('isvalid');
  } else {
    validAlert.innerHTML = `<h3>Tajeta de crédito inválida</h3> `;
    validAlert.classList.add('isinvalid');
  }

  let numberMaskify = localStorage.getItem('numberCard');
  let maskify = validator.maskify(numberMaskify);

  document.querySelector('#cardName').innerHTML =
    localStorage.getItem('nameCard');

  document.querySelector('#cardNumber').innerHTML = maskify;
  console.log(maskify);
  localStorage.clear();
}

import validator from './validator.js';

//console.log(validator);
