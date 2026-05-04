$(document).ready(function(){
  $('.shop .owl-carousel').owlCarousel({
    // loop:false,
    margin:10,
    responsiveClass:true,
    // animateOut: 'slideOutDown',
    // animateIn: 'flipInX',
    nav:false,
    dots: false,
    loop:true,
    responsive:{
        0:{
            items:1.5,
        },
        600:{
            items:3.5,
        },
        1000:{
            items:5.5,
        }
    }
  });

  $('.catalogue .owl-carousel').owlCarousel({
    // loop:false,
    margin:10,
    responsiveClass:true,
    nav:false,
    dots: false,
    loop:true,
    items:1
  })

});