/* eslint-disable linebreak-style */

window.addEventListener('DOMContentLoaded', () => {
  const testButton = document.getElementById('test-button');
  let list = document.getElementById('list');
  let time;
  let clickCount = 0;
  let singleClickTimer;

  function getTimeStamp() {
    return new Date();
  }

  function doubleClickHandler(timeDate) {
    let newLi = document.createElement('li');

    newLi.innerHTML = '2xClick - ' + timeDate;
    list.appendChild(newLi);
  }

  function doubleClick(element, timeDistance) {
    element.addEventListener('click', () => {
      clickCount++;
      if (clickCount === 1) {
        singleClickTimer = setTimeout(() => {
          clickCount = 0;
        }, timeDistance);
      } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        time = getTimeStamp();
        clickCount = 0;
        doubleClickHandler(time);
      }
    }, false);
  }

  let button = document.querySelector('button');

  button.addEventListener('button', doubleClick(testButton, 1000), false);
});
