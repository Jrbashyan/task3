
/*Carousel Head*/
$(document).ready(function(){

	$('.owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    animateOut: 'fadeOut', 
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});