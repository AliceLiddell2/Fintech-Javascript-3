/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (var i = 0; i < 10; i++) {
    (function(index) { setTimeout(() => { logger(index);}, 100);})(i);
  }
}

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */

/**
function customBind(func, context, ...args) {

}
*/

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(firstNum) {
  let currentSum;

  if (firstNum !== undefined) {
    currentSum = firstNum;
  } else {
    return 0;
  }
  return function counter(secNum) {
    if (secNum !== undefined) {
      currentSum += secNum;
      return counter;
    }
    return currentSum;
  };
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  first = first.split('').sort().join('');
  second = second.split('').sort().join('');
  if (first === second) {
    return true;
  }
  return false;
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(mass) {
  let k = 0;
  const result = [];

  mass = mass.sort(function(a, b) { return a - b; });
  result[k] = mass[0];
  for (let i = 1; i < mass.length; i++) {
    if (mass[i] !== result[k]) {
      result[k + 1] = mass[i];
      k += 1;
    }
  }
  return result;
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  let indx = 0;
  let intersec = [];

  for (let i = 0; i < second.length; i++) {
    indx = first.indexOf(second[i]);
    if (indx >= 0) {
      intersec.push(second[i]);
    }
  }
  intersec = intersec.sort(function(a, b) { return a - b; });
  return intersec;
}

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  let letterL, letterR, countChanges = 0, letterCheck = {};

  if (left.length !== right.length) {
    return false;
  }
  for (let i = 0; i < left.length; i++) {
    letterL = left[i];
    letterR = right[i];
    if (letterCheck[letterL] !== undefined) {
      if (letterCheck[letterL] !== letterR) {
        return false;
      }
    } else {
      letterCheck[letterL] = letterR;
      if (letterL !== letterCheck[letterL]) {
        countChanges += 1;
      }
    }
  }
  if (countChanges <= 1) {
    return true;
  }
  return false;
}

module.exports = {
  timer,
  //  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};
