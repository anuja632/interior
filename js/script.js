$(".hero-slider")
  .on('translated.owl.carousel', function () {
      const $stage = $(this).find('.owl-stage');
      const matrix = new WebKitCSSMatrix($stage.css('transform'));

      // Round X position
      let roundedX = Math.round(matrix.m41);

      // Clamp so it never shows gaps
      const stageWidth = $stage.outerWidth();
      const containerWidth = $(this).find('.owl-stage-outer').outerWidth();

      const maxOffset = containerWidth - stageWidth;
      if (roundedX > 0) roundedX = 0; // left gap fix
      if (roundedX < maxOffset) roundedX = maxOffset; // right gap fix

      $stage.css('transform', `translate3d(${roundedX}px, 0, 0)`);
  })
  .owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      nav: true,
      dots: true,
      navText: [
          "<i class='fa fa-chevron-left'></i>", 
          "<i class='fa fa-chevron-right'></i>"
      ],
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
      autoplayHoverPause: true,
              responsive:{
            0:{ items: 1 },
            576:{ items: 2 },
            992:{ items: 3 },
            1024:{items:4}
        }
      
    });
  });
  // Refresh AOS on slide change
$('.owl-carousel').on('translated.owl.carousel', function(){
    AOS.refreshHard(); 
});

  $(document).ready(function(){
    $(".reviews-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        items: 3,
        slideBy: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive:{
            0:{ items: 1 },
            576:{ items: 2 },
            992:{ items: 3 }
        }
    });
});
$('.logo-carousel').owlCarousel({
    loop:true,
    margin:8,
    autoplay:true,
    dots:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{ items:1 },
        576:{ items:2 },
        768:{ items:4 },
        992:{ items:5 }
      
    }
});
  document.querySelectorAll('.counter').forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = 50; // smaller is faster
            const increment = Math.ceil(target / 200);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, speed);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
      // Counter Animation
  const counters = document.querySelectorAll('.counter');
  const speed = 100; // smaller is faster

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const count = parseFloat(counter.innerText);

        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.min(count + increment, target).toFixed(target % 1 ? 1 : 0);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  // Trigger animation on scroll
  let started = false;
  window.addEventListener('scroll', () => {
    const sectionTop = document.querySelector('.stats-section').offsetTop - window.innerHeight + 100;
    if (!started && window.scrollY > sectionTop) {
      animateCounters();
      started = true;
    }
  });
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
      let answer = question.nextElementSibling;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.classList.remove('open');
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.classList.add('open');
      }
    });
  });
    // Simple Parallax Scroll Effect
  window.addEventListener('scroll', function () {
    document.querySelectorAll('.parallax-img').forEach(function (img) {
      let speed = 0.3; // movement speed
      let offset = window.pageYOffset - img.parentElement.offsetTop;
      img.style.transform = `translateY(${offset * speed}px)`;
    });
  });