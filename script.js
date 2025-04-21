const navbar = document.getElementById('navbar');
const stickyOffset = navbar.offsetTop;



window.onscroll = function() {
  if (window.scrollY > stickyOffset) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};
  console.log("ScrollY:", window.scrollY);
  
//-----------NAVBAR---------------

let slideIndex = 1;
showSlides(slideIndex);

function openNav() {
    document.getElementById("mobileMenu").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mobileMenu").style.width = "0";
  }


// Next/previous controls

