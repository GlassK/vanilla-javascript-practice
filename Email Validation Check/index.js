function validation() {
  const form = document.getElementById('form');
  const email = document.getElementById('email').value;
  const text = document.getElementById('text');
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    text.innerHTML = 'Your Email Address is Valid.';
    text.style.color = '#00ff00';
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    text.innerHTML = 'Please Enter Valid Email Address.';
    text.style.color = '#ff0000';
  }

  if (email == '') {
    form.classList.remove('valid');
    form.classList.remove('invalid');
    text.innerHTML = '';
    text.style.color = '#00ff00';
  }
}
