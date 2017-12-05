/* eslint-disable linebreak-style */

let k = 0;
let stop = false;

function getJson(p) {
  const list = document.getElementById('list');
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.open('GET', 'https://api.github.com/orgs/facebook/repos?page=1', true);
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let myObj = JSON.parse(this.responseText);
      let newLi = document.createElement('li');

      if (typeof myObj[p] === 'undefined') {
        return (stop = true);
      }

      newLi.innerHTML = 'Name is :' + myObj[p].name + '<br> descr: ' + myObj[p].description + '<br> url: ' + myObj[p].url + '<br>';
      list.appendChild(newLi);
      newLi = document.createElement('li');
      newLi.innerHTML = 'created: ' + myObj[p].created_at + '<br> commited: ' + myObj[p].pushed_at;
      list.appendChild(newLi);
      newLi = document.createElement('li');
      newLi.innerHTML = '<br>';
      list.appendChild(newLi);
    }
  };
  xmlhttp.send();
}

let numElementsToAdd = 2;
let offsetForNewContent = 20;

function checkInfiniteScroll(parentSelector, childSelector) {
  let lastDiv = document.querySelector(parentSelector + childSelector);
  let lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;
  let pageOffset = window.pageYOffset + window.innerHeight;

  if (pageOffset > lastDivOffset - offsetForNewContent) {
    for (let i = 0; i < numElementsToAdd; i++) {
      if (!stop) {
        let newDiv = document.createElement('div');

        getJson(k);
        k += 1;

        document.querySelector(parentSelector).appendChild(newDiv);
      } else {
        return 0;
      }
    }
    checkInfiniteScroll(parentSelector, childSelector);
  }
}

let lastScrollTime = Date.now();
let checkInterval = 50;

function update() {
  requestAnimationFrame(update);

  let currScrollTime = Date.now();

  if (lastScrollTime + checkInterval < currScrollTime) {
    checkInfiniteScroll('#scroll-content', '> div:last-child');
    lastScrollTime = currScrollTime;
  }
}

update();
