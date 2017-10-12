/**
* Сделать функцию, которая reject'ит возвращаемый промис, передавая в качестве ошибки строку 'timeout_error',
* если он не resolve'ится за указанный timeout, или ведет себя эквивалентно исходному.
* В учебных целях для этой задачи просьба не использовать Promise.race.
*
* @param {Promise} promise исходный промис
* @param {Number} timeoutInMilliseconds время для timeout в миллисекундах
* @return {Promise} промис с нужным поведением
*/
/*function rejectOnTimeout(promise, timeoutInMilliseconds) {
  let timeout;

  timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('timeout_error');
    }, timeoutInMilliseconds);
  });
  let promises = [promise, timeout];

  return new Promise((resolve, reject) => {
    promises.forEach(promise => promise.then(resolve).catch(reject));
  });
}*/
function rejectOnTimeout(promise, timeoutInMilliseconds){
    return new Promise((resolve, reject) => {
        let timeout = setTimeout(() => {
            reject('timeout_error');
        }, timeoutInMilliseconds);

        promise
            .then((res) => {
                clearTimeout(timeout);
                resolve(res);
            })
            .catch((err) => {
                clearTimeout(timeout);
                reject(err);
            });
    });
};

module.exports = rejectOnTimeout;
