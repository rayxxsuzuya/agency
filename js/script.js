"use strict";

/* Loader */
window.onload = function () {
  document.querySelector('.loader').style.display = 'none';
};
/* Tabs */


var tabs = document.querySelectorAll(".tabs");
var contents = document.querySelectorAll(".contents");

var _loop = function _loop(x) {
  var _loop2 = function _loop2(i) {
    tabs[x].children[i].addEventListener("click", function (e) {
      e.preventDefault();

      for (var j = 0; j < tabs[x].children.length; j++) {
        tabs[x].children[j].classList.remove("active");
        contents[x].children[j].classList.remove("active");
      }

      tabs[x].children[i].classList.add("active");
      contents[x].children[i].classList.add("active");
    });
  };

  for (var i = 0; i < tabs[x].children.length; i++) {
    _loop2(i);
  }
};

for (var x = 0; x < tabs.length; x++) {
  _loop(x);
}
/* Burger */


var burger = document.querySelector('.header__burger');
var mobile = document.querySelector('.header__mobile');
burger.addEventListener('click', function (e) {
  e.preventDefault();
  this.classList.toggle('active');
  mobile.classList.toggle('active');
});
/* Nav focus */

var navItem = document.querySelector('.header__item:nth-child(2) > .header__link');
var subList = document.querySelector('.header__sublist');
var subItem = document.querySelector('.header__subitem:last-child > .header__sublink');
navItem.addEventListener('focus', function () {
  subList.style.display = 'block';
});
subItem.addEventListener('keydown', function (e) {
  if (this == document.activeElement && e.key == 'Tab') {
    subList.style.display = 'none';
  }
});
subList.addEventListener('blur', function (e) {
  this.style.display = 'none';
});
document.body.addEventListener('click', function () {
  for (var i = 0; i < subList.children.length; i++) {
    if (subList.children[i] == document.activeElement) {
      return null;
    } else {
      subList.style.display = "none";
      subList.removeAttribute('style');
    }
  }
});
/* Modal */

var loginButton = document.querySelector('.header__button');
var loginButtonMobile = document.querySelector('.header__button--mobile');
var loginModal = document.querySelector('.modal-login');
var registerModal = document.querySelector('.modal-register');
var registerButton = document.querySelector('.modal__register');
loginButton.addEventListener('click', function (e) {
  e.preventDefault();
  loginModal.classList.toggle('active');
  document.querySelector('.modal__area').focus();
});
loginButtonMobile.addEventListener("click", function (e) {
  e.preventDefault();
  loginModal.classList.toggle("active");
  document.querySelector(".modal__area").focus();
});
registerButton.addEventListener('click', function (e) {
  e.preventDefault();
  loginModal.classList.remove("active");
  registerModal.classList.add("active");
  document.querySelector('.modal-register .modal__area').focus();
});
registerButton.addEventListener('keydown', function (e) {
  e.preventDefault();

  if (e.key == 'Tab' && this == document.activeElement) {
    modalClose[0].focus();
  } else if (e.key == 'Enter') {
    registerModal.classList.add('active');
    loginModal.classList.remove('active');
    document.querySelector(".modal-register .modal__area").focus();
  }
});
document.querySelector('.modal-register__button').addEventListener("keydown", function (e) {
  e.preventDefault();

  if (e.key == "Tab" && this == document.activeElement) {
    modalClose[1].focus();
  } else if (e.key == "Enter") {}
});
var modalClose = document.querySelectorAll('.modal__close');
modalClose[0].addEventListener("click", function (e) {
  e.preventDefault();
  loginModal.classList.remove("active");
});
modalClose[1].addEventListener("click", function (e) {
  e.preventDefault();
  registerModal.classList.remove("active");
});
modalClose[0].addEventListener("keydown", function (e) {
  if (e.key == 'Tab' && this == document.activeElement) {
    document.querySelector('.modal__area--first').focus();
  }
});
/* About Slider */

var slides = document.querySelectorAll('.about__contents .about__content');
var currentSlide = 0;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

var next = document.querySelector('.about__next');
var previous = document.querySelector('.about__prev');

next.onclick = function () {
  nextSlide();
};

previous.onclick = function () {
  previousSlide();
};
/* Slick slider */


$(".team__slider").slick({
  slidesToShow: 1,
  arrows: false,
  dots: true
});