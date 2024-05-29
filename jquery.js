$(function() {
    $('.selector').animatedHeadline({
        animationType: 'scale'
    });
  })
  
// crousal - content

  $('.slide-show').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slide-show',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
  });       