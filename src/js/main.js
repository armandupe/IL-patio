$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true
  });

  var owl = $(".owl-carousel");
  owl.owlCarousel();
  $(".next-btn").click(function() {
    owl.trigger("next.owl.carousel");
  });
  $(".prev-btn").click(function() {
    owl.trigger("prev.owl.carousel", [300]);
  });

  $(function() {
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: "content"
    });
  });
});
