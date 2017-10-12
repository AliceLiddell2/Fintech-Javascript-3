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
function rejectOnTimeout(promises, timeoutInMilliseconds, resolvePartial=true) {
    return new Promise((resolve, reject) => {
        let results = [],
            finished = 0,
            numPromises = promises.length;
        let onFinish = () => {
            if (finished < numPromises) {
                if (resolvePartial) {
                    (resolve)(results);
                } else {
                    throw new Error('timeout_error');
                }
            } else {
                (resolve)(results);
            }
            onFinish = null;
        };
        for (let i = 0; i < numPromises; i += 1) {
            results[i] = undefined;
            promises[i].then(
                (res) => {
                    results[i] = res;
                    finished += 1;
                    if (finished === numPromises && onFinish) {
                        onFinish();
                    }
                },
                reject
            );
        }
        setTimeout(() => {
            if (onFinish) {
                onFinish();
            }
        }, timeoutInMilliseconds);
    });
}

module.exports = rejectOnTimeout;
