function moveUp() {
    var element = document.getElementById('circle');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - 1 + 'px';
    if (positionTop == 0) {
    clearInterval(interval);
    interval = setInterval(moveDown, 10);
    }
   }
   function moveDown() {
    var element = document.getElementById('circle');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + 1 + 'px';
    if (element.offsetTop+element.offsetHeight == window.innerHeight) {
    clearInterval(interval);
    interval = setInterval(moveUp, 10);
    }
   }
   function moveLeft() {
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 1 + 'px';
    if (positionLeft == 0) {
    clearInterval(interval);
    interval = setInterval(moveRight, 10);
    }
   }
   function moveRight() {
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 1 + 'px';
    if (element.offsetLeft+element.offsetWidth == window.innerWidth) {
    clearInterval(interval);
    interval = setInterval(moveLeft, 10);
    }
   }   
   var interval = 0;
   function myKeyDown(event) {
    clearInterval(interval);
    if (event.keyCode == 37) {
    interval = setInterval(moveLeft, 10);
    }
    if (event.keyCode == 38) {
    interval =setInterval(moveUp, 10);
    }
    if (event.keyCode == 40) {
    interval =setInterval(moveDown, 10);
    }
    if (event.keyCode == 39) {
    interval =setInterval(moveRight, 10);
    }
   }
   function myLoadEvent() {
    document.addEventListener('keydown', myKeyDown);
   }
   document.addEventListener('DOMContentLoaded', myLoadEvent);
