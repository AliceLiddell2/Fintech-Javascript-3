const testButton = document.getElementById('test-button');
const list = document.getElementById('list');
let time;
let clickCount = 0;

function singleClick() {
  console.log('sgclick');
}

function getTimeStamp() {
    let now = new Date();

    return ((now.getMonth() + 1) + '-' + (now.getDate()) + '-' + now.getFullYear() + ' ' + now.getHours() + ':' + ((now.getMinutes() < 10) ? ('0' + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ('0' + now.getSeconds()) : (now.getSeconds())));
}

function doubleClick(timeDate) {
  let newLi = document.createElement('li');

  newLi.innerHTML = '2xClick - ' + timeDate;
  list.appendChild(newLi);
}

testButton.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function() {
            clickCount = 0;
        }, 1000);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        time = getTimeStamp();
        clickCount = 0;
        doubleClick(time);
    }
}, false);
