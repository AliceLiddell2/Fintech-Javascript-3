/* eslint-disable linebreak-style */

let k = 0;

function getJson(k) {
  const list = document.getElementById('list');
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.open('GET', 'https://api.github.com/orgs/facebook/repos?page=1', true);
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let myObj = JSON.parse(this.responseText);

      for (let i = k; i < k + 1; i++) {
        let newLi = document.createElement('li');

        newLi.innerHTML = 'Name is :' + myObj[i].name + '<br> descr: ' + myObj[i].description + '<br> url: ' + myObj[i].url + '<br>';
        list.appendChild(newLi);
        newLi = document.createElement('li');
        newLi.innerHTML = 'created: ' + myObj[i].created_at + '<br> commited: ' + myObj[i].pushed_at;
        list.appendChild(newLi);
        newLi = document.createElement('li');
        newLi.innerHTML = '<br>';
        list.appendChild(newLi);
      }
    }
  };
  xmlhttp.send();
}

let numElementsToAdd = 10;
let offsetForNewContent = 20;

function checkInfiniteScroll(parentSelector, childSelector) {
  let lastDiv = document.querySelector(parentSelector + childSelector);
  let lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;
  let pageOffset = window.pageYOffset + window.innerHeight;

  if (pageOffset > lastDivOffset - offsetForNewContent) {
    for (let i = 0; i < numElementsToAdd; i++) {
      let newDiv = document.createElement('div');

      getJson(k);
      k += 1;
      document.querySelector(parentSelector).appendChild(newDiv);
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
