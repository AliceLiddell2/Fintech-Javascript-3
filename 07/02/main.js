/* eslint-disable linebreak-style */

const list = document.getElementById('list');
let clicks = 0;
let a;

window.onload = function doubleClick(element, doubleClickHandler, timeDistance = 250) {
  element = document.getElementById('btn');
  function getTimeStamp() {
    let now = new Date();

    return ((now.getMonth() + 1) + '-' + (now.getDate()) + '-' + now.getFullYear() + ' ' + now.getHours() + ':' + ((now.getMinutes() < 10) ? ('0' + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ('0' + now.getSeconds()) : (now.getSeconds())));
  }

  element.onclick = () => {
    clicks++;
    if (clicks === 1) {
      a = new Date().getTime();
    }
    if (clicks === 2) {
      let b = new Date().getTime();

      if (b-a < timeDistance) {
        let newLi = document.createElement('li');

        newLi.innerHTML = '2xClick - ' + getTimeStamp();
        list.appendChild(newLi);
        clicks = 0;
      } else {
        clicks = 0;
      }
    }
  };
};
