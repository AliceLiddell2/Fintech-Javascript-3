/**
* Сделать функцию, которая reject'ит возвращаемый промис, передавая в качестве ошибки строку 'timeout_error',
* если он не resolve'ится за указанный timeout, или ведет себя эквивалентно исходному.
* В учебных целях для этой задачи просьба не использовать Promise.race.
*
* @param {Promise} promise исходный промис
* @param {Number} timeoutInMilliseconds время для timeout в миллисекундах
* @return {Promise} промис с нужным поведением
*/
/*function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => promise.then(resolve).catch(reject));
  });
}

function rejectOnTimeout(promise, timeoutInMilliseconds) {
  let timeout;

  timeout = new Promise((resolve, reject) => {
    let id = setTimeout(() => {
      clearTimeout(id);
      reject('timeout_error');
    }, timeoutInMilliseconds);
  });
  return promiseRace([
    promise,
    timeout
  ]);
}*/
function rejectOnTimeout(promise, timeoutInMilliseconds) {
    //let timeout;
    let forPromise;
  
    function timeout(promise, timeoutInMilliseconds) {
        return new Promise((resolve, reject) => {
            //promise.then(resolve);
            setTimeout(() => {
                reject(new Error('timeout_error'));
            }, timeoutInMilliseconds);
        });
    }
    forPromise = new Promise((resolve, reject) => {
        promise => promise.then(resolve).catch(reject);
    });
}

module.exports = rejectOnTimeout;
