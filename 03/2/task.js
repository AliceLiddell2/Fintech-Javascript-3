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
        finished = 0,
        numPromises = promises.length;
    let onFinish = () => {
        if (finished < numPromises) {
            throw ('timeout_error');
        } else {
            resolve;
        }
        onFinish = null;
    };
    for (let i = 0; i < numPromises; i += 1) {
        promises.then(
            resolve => {
            finished += 1;
            if (finished === numPromises && onFinish) {
                onFinish();
            }
            },reject
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
