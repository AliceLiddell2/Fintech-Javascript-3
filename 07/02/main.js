/* eslint-disable linebreak-style */

const list = document.getElementById('list');
let clicks = 0;
let timeSgClick;
let timeDbClick;
let time;
let pause = 0;

window.onload = function doubleClick(element, doubleClickHandler, timeDistance = 250) {
  element = document.getElementById('test-button');
  function getTimeStamp() {
    let now = new Date();

    return ((now.getMonth() + 1) + '-' + (now.getDate()) + '-' + now.getFullYear() + ' ' + now.getHours() + ':' + ((now.getMinutes() < 10) ? ('0' + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ('0' + now.getSeconds()) : (now.getSeconds())));
  }
  function doubleClickHandler(timeDate) {
    let newLi = document.createElement('li');

    newLi.innerHTML = '2xClick - ' + timeDate;
    list.appendChild(newLi);
  }

  element.onclick = () => {
    clicks++;
    if ((clicks === 1) && (pause === 0)) {
      timeSgClick = new Date().getTime();
      time = getTimeStamp();
    }
    if (clicks === 2) {
      timeDbClick = new Date().getTime();
      if (timeDbClick - timeSgClick < timeDistance) {
        doubleClickHandler(time);
        clicks = 0;
        pause = 0;
      } else {
        pause = 1;
        clicks = 1;
        timeSgClick = timeDbClick;
      }
    }
  };
};
