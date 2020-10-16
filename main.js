var header = document.querySelector('header')
let mouseDiv = document.getElementById('mouseDiv');
const onMouseMove = (e) => {
  mouseDiv.style.left = e.pageX + 'px';
  mouseDiv.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);
