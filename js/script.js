$(function () {
  // scroll
  $(".menu a, .go-top, .header__icon").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор блока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  // slider
  $(".slider-blog__inner").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // форма
  $(".footer__form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "php/mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      alert("Спасибо! Скоро свяжемся!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  // burger-menu
  // $(".menu__btn").on("click", function () {
  //   $(".menu__list").toggleClass("menu__list--active");
  // });
  $(".menu__btn, .menu a").on("click", function () {
    $(".header__top-inner").toggleClass("header__top-inner--active");
  });

  // Mixitup
  var mixer = mixitup(".portfolio__content");
});
