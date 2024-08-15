Template.contact.rendered = function () {
    $('.nav-link').bind('click', function(event) {
      event.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        // event.preventDefault();
    });
};