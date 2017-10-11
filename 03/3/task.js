/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  let values = [];
  let acceptedPromises = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then((value) => {
        values[index] = value;
        acceptedPromises += 1;
        if (acceptedPromises === promises.length) {
          resolve(values);
        }
      }).catch(error => reject(error));
    });
  });
}

module.exports = promiseAll;
