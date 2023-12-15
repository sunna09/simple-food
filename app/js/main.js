$(function(){

  $('.nav__link, .popular__btn').on('click', function (e) {
    e.preventDefault();
  $('.nav__link, .popular__btn').removeClass('active'); 
  $(this).addClass('active'); 
});
});