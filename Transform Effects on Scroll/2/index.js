const skewed = document.querySelector('.skewed');
window.addEventListener('scroll', function () {
  const value = -10 + window.scrollY / 60;
  skewed.style.transform = `skewY(${value}deg)`;
});
