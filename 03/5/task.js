/**
 * Изменить поведение чисел таким образом, чтобы указанные конструкции были эквивалетны при условии,
 * что римские цифры могут быть любыми.
 * 0..V => [0, 1, 2, 3, 4]
 * 0..VII => [0, 1, 2, 3, 4, 5, 6]
 * 0..X => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * Подсказка - необходимо использовать Proxy - объекты
 * */
function toDecimal(s) {
  let n = 0;
  let res = [];
  let X = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
  };

  s.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, (d) => n += X[d]);

  for (let i = 0; i < n; i++) {
    res[i] = i;
  }
  return res;
};

let handler = {
  get: (target, prop) => { return prop in target ? target[prop] : toDecimal(prop);}
}

let p = new Proxy(/0./, handler);

Object.setPrototypeOf(Number.prototype, p);
