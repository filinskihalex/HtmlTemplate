$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1500,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/carousel/chevron-left-solid.png"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/carousel/chevron-right-solid.png"/></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      });
    $('ul.catalog-tabs').on('click', 'li:not(.catalog-tabs__button__active)', function() {
      $(this)
        .addClass('catalog-tabs__button__active').siblings().removeClass('catalog-tabs__button__active')
        .closest('div.container').find('div.catalog-item__cards').removeClass('catalog-item__cards_active').eq($(this).index()).addClass('catalog-item__cards_active');
    });
   
    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          });
      });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // modal

    $('[data-modal=consultation').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');

    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow')
    });
    
    $('.button__btnprice').each(function(i){
        $(this).on('click', function(){
          $('#order .modal__descr').text($('.catalog-item__subheader').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        })
    })


    // Validaite

    function validateForms(form){
      $(form).validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2
              },
              phone: "required",
              email: {
                  required: true,
                  email: true
              }
          },
          messages: {
              name: {
                  required: "Пожалуйста, введите свое имя",
                  minlength: jQuery.validator.format("Введите {0} символа!")
                },
              phone: "Пожалуйста, введите свой номер телефона",
              email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
              }
          }
      });
  };

  validateForms('#cons-form form');
  validateForms('#consultation form');
  validateForms('#order form');

  // MaskedInput

  $('input[name=phone]').mask("+7 (999) 999-99-99");

  //PHPMailer

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url:"mailer/smart.php",
      date: $(this).serialize()
    }).done(function(){
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
  });

  //page Up

  $(window).scroll(function(){
    if($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }  
        
  });

  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

});