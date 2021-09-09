'use strict';

const slideshow = document.getElementById('slideshow');
const slides = slideshow.getElementsByTagName('img');
let index = 0;

function nextSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prevSlide() {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

const slideshowText = document.getElementById('slideshowText');
const slidesText = slideshowText.getElementsByTagName('div');
let i = 0;

function nextSlideText() {
  slidesText[i].classList.remove('active');
  i = (i + 1) % slidesText.length;
  slidesText[i].classList.add('active');
}

function prevSlideText() {
  slidesText[i].classList.remove('active');
  i = (i - 1 + slidesText.length) % slidesText.length;
  slidesText[i].classList.add('active');
}

function menuToggle() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('active');
}
