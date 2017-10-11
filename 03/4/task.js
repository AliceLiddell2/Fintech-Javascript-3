/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.race,
 * которая возвращает в качестве результата промис c первым resolve value или reject value в массиве исходных промисов
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */

function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
function promiseRace(promise, time) {
  return new Promise((resolve, reject) => {
    promise.then(resolve, reject);
    delay(time).done(() => {
      reject(error);
    });
  });
}

module.exports = promiseRace;
