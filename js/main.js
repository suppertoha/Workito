
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




});
