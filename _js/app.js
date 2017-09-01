// Changes opacity of the navigation while scrolling
$(window).bind('scroll', function () {
if ($(window).scrollTop() > 152) {
  $('header').css('opacity', '0.7');
} else {
  $('header').css('opacity', '1');
}
});

// Clears and expands textarea
$("#message").click(function() {
  $(this).animate({"height" : "160px"}, 1000);
  $(this).text("");
});


// Resets textarea when Reset is clicked
$("#reset").click(function() {
  $("#message").animate({"height" : "40px"}, 1000);
  $("#message").text("Please type in your message.");
});

// Smooth transition between website sections - navigation

$(document).ready(function() {
  $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
