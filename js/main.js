$(document).ready(function () {

  // ! Header__burger

  $('.header__burger').on('click', function () {
    $(this).toggleClass('active');
    $('.header__mobile').toggleClass('active');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.header__burger, .header__mobile').length) {
      $('.header__mobile').removeClass('active');
      $('.header__burger').removeClass('active');
    }
    e.stopPropagation();
  });

  //! Header-scroll
  jQuery(document).ready(function($) {
    var tinyHead = function() {
        $('header').toggleClass('tinyHead', $(document).scrollTop() > 0);
    }
    tinyHead();
    $(window).on('scroll touchmove', tinyHead);
  });
  
  // ! Questions__body
  $(".questions__header").on("click", function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });
});
