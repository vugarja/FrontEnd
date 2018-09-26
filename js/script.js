$(document).ready(function() {
    


  // WOW Animate CSS 
  // new WOW().init();

  
  // OWL Carousel Plugin
  $(".owl-one").owlCarousel({
      margin: 10,
      dots: false,
      nav: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
  })
  $(".owl-two").owlCarousel({
      margin: 10,
      dots: false,
      nav: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2
        }
      }
  })

  // Counter Up
  $('.count').counterUp({
  delay: 20,
  time: 2500,
  });

  // Search icon shows search bar
  $('#search').click(function(){
  $('.search-bar').toggle();
  })

  // Sticky bar
  $(window).scroll(function(){
      var sticky = $("#menu");
      var scroll = $(window).scrollTop();
      
      if(scroll>=85){
        sticky.addClass("fixed");
      }else{
        sticky.removeClass("fixed");
      }
  })

  // To-top Button Show/Hide
  $(window).scroll(function() {
      if ($(this).scrollTop()) {
          $('#toTop').fadeIn();
      } else {
          $('#toTop').fadeOut();
      }
  });

  // To-top button animation
  $("#toTop").click(function () {
     $("html, body").animate({scrollTop: 0}, 1000);
  });

    // Magnific Popup  
  $(".mg-popup").magnificPopup({
    type: 'image',
    gallery: {
        enabled: true,
    }

});
})

// Progress Bar JS

  var bar1 = new ProgressBar.Line("#mybar1", {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#67bbf7',
    trailColor: '#eee',
    trailWidth: 0.5,
    svgStyle: {width: '100%', height: '30%'}
  });
  
  bar1.animate(0.90);  // Number from 0.0 to 1.0

  var bar2 = new ProgressBar.Line("#mybar2", {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#7e87c9',
    trailColor: '#eee',
    trailWidth: 0.5,
    svgStyle: {width: '100%', height: '30%'}
  });
  
  bar2.animate(0.80);  // Number from 0.0 to 1.0

  var bar3 = new ProgressBar.Line("#mybar3", {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#c9048e',
    trailColor: '#eee',
    trailWidth: 0.5,
    svgStyle: {width: '100%', height: '30%'}
  });
  
  bar3.animate(0.70);  // Number from 0.0 to 1.0

  var bar4 = new ProgressBar.Line("#mybar4", {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#dd9933',
    trailColor: '#eee',
    trailWidth: 0.5,
    svgStyle: {width: '100%', height: '30%'}
  });
  
  bar4.animate(0.60);  // Number from 0.0 to 1.0




