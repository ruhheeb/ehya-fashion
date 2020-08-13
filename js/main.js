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

    loop: true,

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

  // var menuBtn = document.querySelector('.menu-btn');
  // menuBtn.addEventListener('click', function () {
  //   console.log("working");
  //   document.querySelector('.mobile-menu').classList.toggle('mobile-menu--visible');
  // });

  // var closeMobileMenu = document.querySelector('.mobila-menu__close');
  // closeMobileMenu.addEventListener('click', function () {
  //   console.log("worknow");
  // });

  var menuBtn = $('.menu-btn');
  var mobileMenu = $('.mobile-menu');
  menuBtn.on('click', function () {
    mobileMenu.addClass("mobile-menu--visible");
  });

  var closeMobileMenu = $('.mobile-menu__close');
  closeMobileMenu.on('click', function (event) {
    event.preventDefault();
    mobileMenu.removeClass('mobile-menu--visible');
  });

  $(document).keyup(function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      closeMobileMenu.close(e);
    }
  });


});