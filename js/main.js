
$(document).ready(function () {

  // ! Header__burger

  $(".header__burger").on("click", function () {
    $(this).toggleClass("active");
    $(".header__mobile").toggleClass("active");
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".header__burger, .header__mobile").length) {
      $(".header__mobile").removeClass("active");
      $(".header__burger").removeClass("active");
    }
    e.stopPropagation();
  });

  //! Play__block

  $( document ).ready(function() {
    $(".play__block").click(function(e) {
      $(".play__block").removeClass('active');
      $(this).addClass('active');
    })
  })

  //// ! Play-pink

  $(".play__block-pink").on("click", function () {
    
    if ($(window).width() < 767){
      $('.play__container-pink').show();
      $('.play__container-orange').hide();
    }
  });

  //// ! Play-orange

  $(".play__block-orange").on("click", function () {

    if ($(window).width() < 767){
      $('.play__container-orange').show();
      $('.play__container-pink').hide();
    }
  });

});
