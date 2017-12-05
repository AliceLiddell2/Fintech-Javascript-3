/* eslint-disable linebreak-style */

window.addEventListener('DOMContentLoaded', function() {
  let number = document.getElementById('number');
  const getById = document.getElementById('num');

  number.addEventListener('click', () => {
    number.defaultValue = '+_(___)___-__-__';
  });
  function setCursorPosition(pos, elem) {
    elem.focus();
    elem.setSelectionRange(pos, pos);
  }

  function mask(event) {
    let matrix = number.defaultValue;
    let i = 0;
    let def = matrix.replace(/\D/g, '');
    let val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) { val = def; }
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || '_';
    });
    this.value = matrix;
    getById.innerHTML = 'Позвонить на ' + number.value;
    getById.href = 'tel:' + number.value.replace(/[^+0-9]/g, '');
    i = matrix.lastIndexOf(val.substr(-1));
    if (i < matrix.length && matrix !== this.defaultValue) {
      i++;
    } else {
      i = matrix.indexOf('_');
    }
    setCursorPosition(i, number);
  }

  let input = document.querySelector('input');

  input.addEventListener('input', mask, false);
});
