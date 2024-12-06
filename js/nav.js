var lastScrollTop = 0;
$(window).on("scroll", function () {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $("#nav").addClass("hide").removeClass("show");
    } else {
        $("#nav").addClass("show").removeClass("hide");
    }
    lastScrollTop = st;
});