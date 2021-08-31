document.addEventListener('mousemove', function (e) {
  const body = document.querySelector('body');
  const heart = document.createElement('span');
  const x = e.offsetX;
  const y = e.offsetY;
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  const size = Math.random() * 100;
  heart.style.width = 20 + size + 'px';
  heart.style.height = 20 + size + 'px';
  body.appendChild(heart);

  setTimeout(function () {
    heart.remove();
  }, 2000);
});
