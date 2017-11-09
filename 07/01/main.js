window.addEventListener('DOMContentLoaded', function() {
  let change = document.getElementById('number');
  
  change.onclick = function() {
            number.defaultValue = '+_(___)___-__-__';
        }
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select()
    }
  }

  function mask(event) {
    let matrix = number.defaultValue;
    let i = 0;
    let def = matrix.replace(/\D/g, '');
    let val = this.value.replace(/\D/g, '');

    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_/g\d]/g, function(a) {
      return val.charAt(i++) || '_'
    });
    this.value = matrix;
    document.getElementById('num').innerHTML = 'Позвонить на ' + number.value;
    document.getElementById('num').href = 'check'
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf('_');
    setCursorPosition(i, number);
  }

  let input = document.querySelector('input');

  input.addEventListener('input', mask, false);
  
});
