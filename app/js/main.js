$(function(){

  $('.nav__link, .popular__btn').on('click', function (e) {
    e.preventDefault();
  $('.nav__link, .popular__btn').removeClass('active'); 
  $(this).addClass('active'); 
});

$(".nav__link").on("click","a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});

$('.logo').click(function() {
  var scrollName2 = $(this).attr('data-scroll');
    scrollElem2 = $(scrollName2);
    scrollTop = scrollElem2.offset().top;
    $('html, body').animate({
      scrollTop: scrollTop
    }, 1500);
});

$('.nav__link').click(function() {
  var scrollName2 = $(this).attr('data-scroll');
    scrollElem2 = $(scrollName2);
    scrollTop = scrollElem2.offset().top;
    $('html, body').animate({
      scrollTop: scrollTop
    }, 1500);
});
});