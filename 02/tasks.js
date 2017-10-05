/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (var i = 0; i < 10; i++) {
    (function(index) { setTimeout(() => { logger(index); }, 100); }(i));
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
function customBind(func, context, ...args) {
  return function(...argsForSecondFunction) {
    return func.apply(context, args.concat(argsForSecondFunction));
  };
}

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(firstNum) {
  return (firstNum === undefined) ? 0 : secNum => secNum === undefined ? firstNum : sum(firstNum + secNum);
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  const firstStringCharCounter = {};

  if (first.length !== second.length) {
    return false;
  }
  [].forEach.call(first, char => firstStringCharCounter[char] = firstStringCharCounter[char] ? 1 + firstStringCharCounter[char] : 1);
  for (let charSec of second) {
    if (!firstStringCharCounter[charSec]) {
      return false;
    }
    firstStringCharCounter[charSec] -= 1;
  }
  return true;
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(mass) {
  const uniqueArray = [...new Set(mass)];

  return uniqueArray.sort((first, second) => first - second);
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  const firstArrayNumCounter = {};
  const secondArrayNumCounter = {};
  let result = [];
  let resCounter = 0;

  [].forEach.call(first, num => firstArrayNumCounter[num] = firstArrayNumCounter[num] ? 1 + firstArrayNumCounter[num] : 1);
  [].forEach.call(second, num => secondArrayNumCounter[num] = secondArrayNumCounter[num] ? 1 + secondArrayNumCounter[num] : 1);
  for (let num of second) {
    if (firstArrayNumCounter[num] === secondArrayNumCounter[num]) {
      for (let k = 0; k < firstArrayNumCounter[num]; k++) {
        result[resCounter] = num ;
        resCounter++;
      }
    }
  }
  return result.sort((first, second) => first - second);
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
  if (left.length !== right.length) {
    return false;
  }
  let countChanges = 0;

  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      countChanges += 1;
    }
    if (countChanges > 1) {
      return false;
    }
  }
  return true;
}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};
