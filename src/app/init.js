(function ($) {
  $(function () {

    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function () {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});
$(".button-collapse").sideNav();

$(".dropdown-button").dropdown();

$(document).ready(function () {
  $('select').material_select();
  $('.carousel.carousel-slider').carousel({ fullWidth: true });

});
