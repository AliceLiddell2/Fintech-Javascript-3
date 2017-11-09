/* eslint-disable linebreak-style */

let timer;
const list = document.getElementById('list');

window.onload = function doubleClick(element, doubleClickHandler, timeDistance = 150) {
  element = document.getElementById('test-button');
  function getTimeStamp() {
    let now = new Date();

    return ((now.getMonth() + 1) + '-' + (now.getDate()) + '-' + now.getFullYear() + ' ' + now.getHours() + ':' + ((now.getMinutes() < 10) ? ('0' + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ('0' + now.getSeconds()) : (now.getSeconds())));
  }

  element.onclick = () => {
    timer = setTimeout(timeDistance);
  };

  element.ondblclick = () => {
    let newLi = document.createElement('li');

    clearTimeout(timer);
    newLi.innerHTML = '2xClick - ' + getTimeStamp();
    list.appendChild(newLi);
  };
};
