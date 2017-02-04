$('.slider-items').slick({
	dots: true
})

$('.enter').on('click', function(){
	$('.mobi-menu').addClass('active');
})

$('.mobi-menu i').on('click', function(){
	$('.mobi-menu').removeClass('active');
})

$( "#my_tabs" ).tabs();

$('.my_slick').slick({
	dots: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
})

/*------------------------------ animation ---------------------*/
$( document ).ready(function() {

      $('#scrollup a').mouseover( function(){
        $( this ).animate({opacity: 1},100);
      }).mouseout( function(){
        $( this ).animate({opacity: .5},100);
      }).on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            wrw = $(id).offset().top;
        $('body,html').animate({scrollTop: wrw}, 1000);
      });

      $(window).scroll(function(){
        if($(window).width() < 1200){
          $('#scrollup').fadeOut('fast');
        } else if ( $(document).scrollTop() > 0 ) {
          $('#scrollup').fadeIn('fast');
        } else {
          $('#scrollup').fadeOut('fast');
        }
      });


});
