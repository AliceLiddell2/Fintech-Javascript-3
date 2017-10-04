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
  return function() {
    return func.apply(context, args.concat(Array.from(arguments)));
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
  return (first === second);
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(mass) {
  let counter = 0;
  const result = [];

  mass = mass.sort((firstElement, secondElement) => (firstElement - secondElement));
  result[0] = mass[0];
  for (let i = 1; i < mass.length; i++) {
    if (mass[i] !== result[counter]) {
      result.push(mass[i]);
      counter += 1;
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
  let index = 0;
  let intersection = [];

  for (let i = 0; i < second.length; i++) {
    index = first.indexOf(second[i]);
    if (index >= 0) {
      intersection.push(second[i]);
    }
  }
  intersection = intersection.sort((firstElement, secondElement) => (firstElement - secondElement));
  return intersection;
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
    }
    letterCheck[letterL] = letterR;
    if (letterL !== letterCheck[letterL]) {
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
