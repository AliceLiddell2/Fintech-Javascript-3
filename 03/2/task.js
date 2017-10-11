/**
* Сделать функцию, которая reject'ит возвращаемый промис, передавая в качестве ошибки строку 'timeout_error',
* если он не resolve'ится за указанный timeout, или ведет себя эквивалентно исходному.
* В учебных целях для этой задачи просьба не использовать Promise.race.
*
* @param {Promise} promise исходный промис
* @param {Number} timeoutInMilliseconds время для timeout в миллисекундах
* @return {Promise} промис с нужным поведением
*/
function rejectOnTimeout(promise, timeoutInMilliseconds) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then((value) => {
        resolve(value);
      }).catch((error) => {
        let id = setTimeout(() => {
          clearTimeout(id);
          reject('timeout_error');
         }, timeoutInMilliseconds);
        reject(error);
            });
        });
    });
}

module.exports = rejectOnTimeout;
