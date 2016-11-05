jQuery(function($){
  
  'use strict';
  
  var $window = $(window);
  
  /*
   |----------------------------------------------------------------------------
   | Autoclose navbar collapse
   |----------------------------------------------------------------------------
   */
  
  $('#header-navbar-collapse a').on('click', function () {
    $('#header-navbar-collapse').collapse('hide');
  });
  
  /*
   |----------------------------------------------------------------------------
   | Animated scrolling / Scroll Up
   |----------------------------------------------------------------------------
   */
  
  $('a[href^="#"]').on('click', function(event){
    
    var anchor = $(this);
    
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top -79
    }, 1000);
    
    event.preventDefault();
    
  });
  
  /*
   |----------------------------------------------------------------------------
   | Parallax / Owl carousel
   |----------------------------------------------------------------------------
   */
  
  function parallax () {
    $('#parallax').parallax('50%', 0.3);
  }
  
  $window.on('load', function () {
    parallax();
  });
  
  parallax();
  
  $('.parallax-quotes').owlCarousel({
    singleItem:true,
    lazyLoad: true,
    pagination:false,
    navigation: false,
    autoPlay: true
  });
  
  /*
   |----------------------------------------------------------------------------
   | Back to top
   |----------------------------------------------------------------------------
   */
  
  $window.on('scroll', function() {
    
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn();
    } else {
      $('.scroll-up').fadeOut();
    }
    
  });
  
});
