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
});