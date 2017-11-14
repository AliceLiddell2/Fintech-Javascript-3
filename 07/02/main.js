/* eslint-disable linebreak-style */

const list = document.getElementById('list');
let clicks = 0;
let a;
let b;
let pause = 0;

window.onload = function doubleClick(element, doubleClickHandler, timeDistance = 250) {
  element = document.getElementById('test-button');
  function getTimeStamp() {
    let now = new Date();

    return ((now.getMonth() + 1) + '-' + (now.getDate()) + '-' + now.getFullYear() + ' ' + now.getHours() + ':' + ((now.getMinutes() < 10) ? ('0' + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ('0' + now.getSeconds()) : (now.getSeconds())));
  }

  element.onclick = () => {
    clicks++;
    if (clicks === 1) {
      if (pause === 0) {
        a = new Date().getTime();
        console.log('a is '+ a);
      }  
    }
    if (clicks === 2) {
      b = new Date().getTime();    
      if (b - a < timeDistance) {
        let newLi = document.createElement('li');

        newLi.innerHTML = '2xClick - ' + getTimeStamp();
        list.appendChild(newLi);
        clicks=0;
        pause = 0;
      } else {
        pause = 1;
        clicks=1;
        a = b;
      }
    }
  };
};
