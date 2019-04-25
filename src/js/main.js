$(document).ready(function() {
  // Слайдер
  $(".owl-carousel").owlCarousel({
    items: 1
  });

  var owl = $(".owl-carousel");
  owl.owlCarousel();
  $(".next-btn").click(function() {
    owl.trigger("next.owl.carousel", [600]);
  });
  $(".prev-btn").click(function() {
    owl.trigger("prev.owl.carousel", [600]);
  });

  // Аккордион
  $(function() {
    var icons = {
      header: "arrow",
      activeHeader: "arrow-active"
    };
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: "content",
      icons: icons
    });
  });


});
