$(document).ready(function () {
  var tabsItem = $(".trend-tabs__item");
  var contentItem = $('.trend-tabs__content');

  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr('data-target');
    tabsItem.removeClass("trend-tabs__item--active");
    contentItem.removeClass("trend-tabs__content--active");
    $(activeContent).addClass("trend-tabs__content--active");
    $(this).addClass("trend-tabs__item--active");
  });


  var aboutSlider = new Swiper('.about-slider__container', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.about-slider__pagination',
      clickable: true,

    },
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    mousewheel: {
      invert: true,
    },
  })


  // Stories slider
  var storiesSlider = new Swiper('.stories-slider__container', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,


    // },
    // Navigation arrows
    navigation: {
      nextEl: '.stories-slider__button--next',
      prevEl: '.stories-slider__button--prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    mousewheel: {
      invert: true,
    },
  })


});