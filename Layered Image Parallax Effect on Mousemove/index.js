document.addEventListener('mousemove', parallax);

function parallax(e) {
  this.querySelectorAll('.layer').forEach((layer) => {
    const speed = layer.getAttribute('data-speed');
    const x = window.innerWidth - (e.pageX * speed) / 250;
    const y = window.innerWidth - (e.pageX * speed) / 250;

    layer.style.transform = `translate(${-x}px) translateY(${y}px)`;
  });
}
