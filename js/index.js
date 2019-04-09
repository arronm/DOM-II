// Your code goes here

const navigation = document.querySelector('.nav-container nav');
navigation.addEventListener('mouseover', (event) => {
  event.target.style.fontSize = '1.8rem';
});

navigation.addEventListener('mouseout', (event) => {
  event.target.style.fontSize = '1.6rem';
});

navigation.addEventListener('click', (event) => {
  event.preventDefault();
})

const destination = document.querySelector('.content-pick');
destination.addEventListener('mousedown', (event) => {
  if (event.target.matches('.btn')) {
    event.target.style.transform = 'scale(0.95)';
  }
})

destination.addEventListener('mouseup', (event) => {
  if (event.target.matches('.btn')) {
    event.target.style.transform = 'scale(1)';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 72 && event.altKey) {
    event.stopImmediatePropagation();
    console.log('Okay, maybe alerts are too old school, let\'s use the console');
  }
})

// Stopping propagation on the above event, will prevent the alert from showing up.
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 72 && event.altKey) {
    alert('Alerts are the best Javascript invention EVAR!');
  }
});

document.addEventListener('dblclick', (event) => {
  if (event.ctrlKey) {
    if (event.target.classList.contains('test-border')) {
      event.target.classList.remove('test-border');
    } else {
      event.target.classList.add('test-border');
    }
  }
});

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});
