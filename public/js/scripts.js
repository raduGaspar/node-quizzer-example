$(".step").each(function(i, e) {
  var slide = $(e);
  slide.attr({
    "data-y": slide.outerHeight(true) * i
  });
});

prettyPrint();
impress().init();