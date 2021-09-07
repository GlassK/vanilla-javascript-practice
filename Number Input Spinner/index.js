const numbers = document.getElementById('box');

for (i = 0; i < 100; i++) {
  const span = document.createElement('span');
  span.textContent = i;
  numbers.appendChild(span);
}

const num = numbers.getElementsByTagName('span');
let index = 0;

function nextNum() {
  num[index].style.display = 'none';
  index = (index + 1) % num.length;
  num[index].style.display = 'initial';
}
function prevNum() {
  num[index].style.display = 'none';
  index = (index - 1 + num.length) % num.length;
  num[index].style.display = 'initial';
}
