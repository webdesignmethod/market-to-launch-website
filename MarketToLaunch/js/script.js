"use strict";

//////////////////////////////////////////////
// Set current copyright year
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

///////////////////////////////////////////////////////////
// Mobile Navigation
const body = document.querySelector("body");
const buttonMobileNav = document.querySelector(".btn-mobile-nav");
const navLinks = document.querySelector(".main-nav-list");
const header = document.querySelector(".header");
const mainNav = document.querySelector(".main-nav");

const toggleMobileNav = function (e) {
  e.preventDefault();
  mainNav.classList.toggle("active");
  navLinks.classList.toggle("active");
  header.classList.toggle("nav-open");
  body.classList.toggle("fixed");
};

const closeMobileNav = function () {
  navLinks.classList.remove("active");
  mainNav.classList.remove("active");
  header.classList.toggle("nav-open");
  body.classList.remove("fixed");
};

buttonMobileNav.addEventListener("click", toggleMobileNav);

navLinks.addEventListener("click", closeMobileNav);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && navLinks.classList.contains("active")) {
    closeMobileNav();
  }
});
