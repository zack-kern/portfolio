var header = document.querySelector('header')
let mouseDiv = document.getElementById('mouseDiv');

const onMouseMove = (e) => {
  mouseDiv.style.left = e.pageX + 'px';
  mouseDiv.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

// timeout so the cursor border hides after 0.5s
var moveTimeout;
document.onmousemove = () => {
  mouseDiv.style.display = 'block'
  clearTimeout(moveTimeout);
  moveTimeout = setTimeout(() => { mouseDiv.style.display = 'none' }, 500);
}
