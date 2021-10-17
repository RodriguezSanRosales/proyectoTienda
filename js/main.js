$( document ).ready(function() {
    $('.slrPopularItems').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 620,
              settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
            }
          ]
    });
    $('.sliderIntro').slick({
        autoplay: true,
        autoplaySpeed: 4500,
        speed: 3000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 620,
              settings: {
                arrows: false,
                dots: true
              }
            }
          ]
    });
    $('.colorsItem span').click(function() {
        if ($(this).hasClass('active')) {
            return false;
        } else {
            $('.colorsItem span.active').removeClass('active');
            $('.imageItem').css('opacity', '0');
            $(this).addClass('active');
            var item = $(this).data('content');
            $('.imageItem.' + item).css('opacity', '1');
        }
    });
    $('.iconMenu').click(function() {
        $('body').toggleClass('mobile-open');
        $('nav.categories').slideToggle(250);
        return false;
     });
});