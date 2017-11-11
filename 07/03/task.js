/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function throttle(time, callback) {
  let calledCount = 0;

  setInterval(() => {
    calledCount = 0;
  }, time);

  let closure = () => {
    if (1 > calledCount) {
      calledCount++;
      callback();
    }
  }
  return closure;
}

module.exports = { throttle };
