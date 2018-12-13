// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

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

const layer1 = document.getElementById("l1");
const layer2 = document.getElementById("l2");
const layer3 = document.getElementById("l3");
const layer4 = document.getElementById("l4");

window.addEventListener("load", turnOffParalax);
window.addEventListener("resize", turnOffParalax);

function turnOffParalax() {
  const w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (w < 700) {
    layer1.classList.remove("layer");
    layer2.classList.remove("layer");
    layer3.classList.remove("layer");
    layer4.classList.remove("layer");
  } else if (w > 700) {
    layer1.classList.add("layer");
    layer2.classList.add("layer");
    layer3.classList.add("layer");
    layer4.classList.add("layer");
  }
}
