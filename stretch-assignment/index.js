let rockets = document.querySelector('.blocks');
let tempOrder = 0;
let rocket;
let mouseDownTriggered = false;
let launching = false;

const launchRocket = (event) => {
  if (!launching && event.target.matches('.block')) {
    rocket = event.target;
    tempOrder = Number(window.getComputedStyle(event.target)['order']);
    event.target.style.order = 0;
    launching = setInterval(whileMouseDown.bind(this, event), 150);
  }
}

const stopLaunch = (event) => {
  if (launching) {
    rocket.style.order = tempOrder;
    clearInterval(launching);
    launching = false;
    window.setTimeout(() => { mouseDownTriggered = false }, 150);
  }
}

const whileMouseDown = (event) => {
  mouseDownTriggered = true;
  event.target.style.left = `${Number(event.target.style.left.replace('px', '')) + 10}px` || '10px';
};

// rockets.addEventListener('click', (event) => {
//   if (event.target.matches('.block') && !mouseDownTriggered) {
//     event.target.style.order = order - 1;
//     order--;
//   }
// });

rockets.addEventListener('mousedown', launchRocket);
rockets.addEventListener('mouseup', stopLaunch);
// rockets.addEventListener('mouseout', stopLaunch);