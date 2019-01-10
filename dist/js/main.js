// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

navItems.forEach(item => item.addEventListener("click", toggleMenu));

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

const pItems = document.querySelectorAll(".p-item");
const pClicks = document.querySelectorAll(".pclick");

for (var i = 0; i < pClicks.length; i++) {
  (function (index) {
    pClicks[i].onclick = function () {
      pItems.forEach(item => item.classList.remove("showme"));
      pItems[index].classList.add("showme");
      pItems[index].firstChild.firstChild.style.display = "block";

      var c = pItems[index].firstChild.children;
      var k;
      for (k = 1; k <= c.length; k++) {
        c[k].style.display = "none";
        if (k == c.length) {}
      };

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
  //var x = document.getElementsByClassName("mySlides");
  var x = event.target.parentNode.firstChild.children;
  //console.log(x);

  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}