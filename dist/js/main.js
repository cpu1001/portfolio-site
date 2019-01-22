"use strict";

// Select DOM Items
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");
var menuNav = document.querySelector(".menu-nav");
var menuBranding = document.querySelector(".menu-branding");

// Set Initial State Of Menu
var showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

navItems.forEach(function (item) {
  return item.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    // Set Menu State
    showMenu = false;
  }
}

var pItems = document.querySelectorAll(".p-item");
var pClicks = document.querySelectorAll(".pclick");

for (var i = 0; i < pClicks.length; i++) {
  (function (index) {
    pClicks[i].onclick = function () {
      pItems.forEach(function (item) {
        return item.classList.remove("showme");
      });
      pItems[index].classList.add("showme");
      pItems[index].firstChild.firstChild.classList.add("slideme");
    };
  })(i);
}

/* Slider stuff */

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = event.target.parentNode.firstChild.children;

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("slideme");
  }
  x[slideIndex - 1].classList.add("slideme");
}