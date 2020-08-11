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


  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // renderBullet: function (index, className) {
      //   return `<span class="dot swiper-pagination-bullet">${index}</span>`;
      // },
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

});