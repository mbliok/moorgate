'use strict';
$(document).ready(function() {
  // NAVIGATION TOGGLE

  $('#show-menu-btn').on('click', function(e) {
    e.preventDefault();
    $('#nav').slideToggle('fast');
    $('.topbar').toggleClass('is-open');
  });

  // SITE NAV SCROOL TO
  $("#nav li a[href^='#'], .nav-footer li a[href^='#'").on('click', function(
    e
  ) {
    e.preventDefault();

    // animate
    $('html, body').animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      300,
      function() {
        window.location.hash = this.hash;
      }
    );
  });

  // BUTTON SCROOL TO TOP
  var btn = $('#scrool-to-tbn');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
});

// stretch_height();

// function stretch_height() {
//   var windowHeight = $(window).height();
//   $('.popup').height(windowHeight);
//   $('.popup').css('height', $(document).innerHeight());
// }

$(window).resize(function() {
  stretch_height();
});

$(window).trigger('resize');
