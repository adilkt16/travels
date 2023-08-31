//Mainly for three functionalities


//From here for navbar (Line no : 3 - 20)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
  
hamburger.addEventListener("click", mobileMenu);
  
  function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  }


  //this code for proper functioning of navbar
  $('.nav-link').click(function() {
    $('.active').removeClass('active');
  });

  

//From 20 - 45 for the faq section 
document.addEventListener('DOMContentLoaded', function() {
    var clickableElements = document.querySelectorAll('.clickable');
  
    var clickedStyles = 'display: none; opacity: 0; transition: opacity 0.5s linear;';
    var showStyles = 'display: block; opacity: 1;';
  
    clickableElements.forEach(function(element) {
      element.addEventListener('click', function() {
        var clickedDiv = this.querySelector('.clicked');
        var dropdownImg = this.querySelector('.dropdown img');
  
        if (clickedDiv.style.display === 'none') {
          clickedDiv.style.cssText = showStyles;
          dropdownImg.style.transform = 'rotate(180deg)'; // Rotate the image
        } else {
          clickedDiv.style.cssText = clickedStyles;
          dropdownImg.style.transform = ''; // Reset the image rotation
        }
      });
    });
  });


  
//from 46 - 65 for testimonail owl carousel section
  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        margin: 20,
        items: 2,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
            },
            980:{
                items: 2,
            }
        }
    });
});