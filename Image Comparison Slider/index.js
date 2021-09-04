const slide = document.getElementById('slide');
window.onmousemove = function (e) {
  const x = e.clientX;
  slide.style.left = x + 'px';
};
