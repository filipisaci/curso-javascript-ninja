(function(win, doc) {
  'use strict';
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

let $inputResultado = doc.querySelector('input[name="resultado"]');
const $buttonsNumbers = doc.querySelectorAll('button[data-js="button-number"]');
const $buttonsOperation = doc.querySelectorAll('[data-js="button-operation"]');

const $buttonNumeroLimpa = doc.querySelector('button[data-js="button-ce"]');
const $buttonNumeroIgual = doc.querySelector('button[data-js="button-equal"]');

Array.prototype.forEach.call($buttonsNumbers, (button) => {
  button.addEventListener('click', handleClickNumber, false);
});

Array.prototype.forEach.call($buttonsOperation, (button) => {
  button.addEventListener('click', handleClickOperation, false);
});

$buttonNumeroLimpa.addEventListener('click', handleClickCE, false);

function handleClickNumber() {
  $inputResultado.value += this.value;
}

function handleClickOperation() {
  $inputResultado.value = removeLastItemIfIsAnOperator($inputResultado.value);
  $inputResultado.value += this.value;
}

function isLastItemAnOperation(number) {
  let operations = ['-', '+', '*', '/'];
  let lastItem = number.split('').pop();
  return operations.some(function (operator) {
    return operator === lastItem;
  });
}

function removeLastItemIfIsAnOperator(number) {
  if (isLastItemAnOperation(number)) {
    return number.slice(0, -1);
  }
  return number;
}

function handleClickCE() {
  $inputResultado.value = 0;
}

$buttonNumeroIgual.addEventListener('click', handleClickEqual, false);

function handleClickEqual() {
  $inputResultado.value = removeLastItemIfIsAnOperator($inputResultado.value);
  let allValues = $inputResultado.value.match(/\d+[+*/-]?/g);
  $inputResultado.value = allValues.reduce((acc, current) => {
    let firtsValue = acc.slice(0, -1);
    let operator = acc.split('').pop();
    let lastValue = removeLastItemIfIsAnOperator(current);
    let lastOperator = isLastItemAnOperation(current) ? current.split('').pop() : '';
    switch(operator) {
      case '+':
        return (Number(firtsValue) + Number(lastValue)) + lastOperator;
      case '-':
        return (Number(firtsValue) - Number(lastValue)) + lastOperator;
      case '/':
        return (Number(firtsValue) / Number(lastValue)) + lastOperator;
      case '*':
        return (Number(firtsValue) * Number(lastValue)) + lastOperator;
    }
  });
}

})(window, document)
