
    // Slider
    $('.recruiters-slider').slick({
          dots: false,
          slidesToShow: 4,
          adaptiveHeight: true,
          arrows: false,
          autoplay:true,
          autoplaySpeed: 5000,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding:'20px',
          responsive: [
            {
              breakpoint: 1367,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerPadding:'20px'
              }
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
            
          ]
    });

    $('.associated-slider').slick({
          dots: false,
          slidesToShow: 6,
          adaptiveHeight: true,
          arrows: true,
          autoplay:true,
          autoplaySpeed: 3000,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1367,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerPadding:'20px'
              }
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
            
          ]
    });

    $('.o-testi-slider').slick({
          dots: false,
          slidesToShow: 3,
          adaptiveHeight: true,
          arrows: false,
          autoplay:true,
          autoplaySpeed: 3000,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1367,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerPadding:'20px'
              }
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
            
          ]
    });

    
    // Select
    // var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
    // removeItemButton: true,
    // maxItemCount:5,
    // searchResultLimit:5,
    // renderChoiceLimit:5
    // });
 jQuery(function ($) {    
   $('.alert').alert()
 })
 
    

