$(document).ready(function() {
  /* MENU TOGGLE */
  $(".hamberger-btn").click(function(){
    $(".navbar").toggleClass("open");
  });

  $("#cartClose").click(function(){
    $("#collapseCart").hide();
  });

  /* HERO BANNER*/
  $('.hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplaySpeed:3000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  /* TESTIMONIAL SLIDER*/
  $('.testimonial-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:3000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
    }
  });

  /* MENU BAR STICKY*/
  $(window).scroll(function(){
    if ($(this).scrollTop() > 90) {
        $('.menu-header').addClass('fixed');
    } else {
        $('.menu-header').removeClass('fixed');
    }
  });

  $('.menuCarousel').owlCarousel({
    loop:false,
    margin:40,
    nav:true,
    navText: ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
    dots:false,
    autoWidth:true,
    responsive:{
      0:{
          items:4
      },
      600:{
          items:6
      },
      1000:{
          items:8
      }
    }
  });

  // Highlight active menu on scroll
  var pullUpwrap = $("section"),
  nav = $(".menu-nav-list"),
  nav_height = nav.outerHeight();

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    pullUpwrap.each(function () {
        var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("active");
        pullUpwrap.removeClass("active");

        $(this).addClass("active");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
        }
    });
  });

  nav.find("a").on("click", function () {
  var $el = $(this),
      id = $el.attr("href");

  $("html, body").animate({scrollTop: $(id).offset().top - nav_height},500);
    return false;
  });

  /*BACK TO TOP */
  var btn = $('#backTotop');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});