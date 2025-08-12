 $(".hero-slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      nav: true,
      dots: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    });
      $(document).ready(function(){
    $("#numberCarousel").owlCarousel({
      items: 4,            // Show 1 slide at a time
      loop: true,          // Infinite loop
      margin: 0,
      nav: true,           // Show navigation arrows
      dots: true,         // Hide dots
      autoplay: true,      // Auto play
      autoplayTimeout: 3000, // Change slide every 3 sec
      autoplayHoverPause: true
      
    });
  });