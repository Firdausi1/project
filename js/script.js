$(document).ready(function() {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("slide");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";

        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", " ");
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }
    $(".about").waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
            $('.arrow-nav i').addClass('fas fa-angle-double-up')
        } else {
            $('nav').removeClass('sticky-nav');
            $('.arrow-nav i').removeClass('fas fa-angle-double-up')
        }
    }, {
        offset: "60px"
    });

    $('.nav-icon').on('click', function() {

        var nav = $('.nav-head');
        var icon = $('.nav-icon i')

        nav.slideToggle(200); // .hasclass
        if (icon.hasClass('fa fa-align-right')) {
            icon.addClass('far fa-window-close');
            icon.removeClass('fa fa-align-right')
        } else {
            icon.addClass('fa fa-align-right');
            icon.removeClass('far fa-window-close')
        }

    })

    $('.arrow-nav').on('click', function() {
        $('html, body').animate({ scrollTop: $('header').offset().top }, 1000)

    })

    $(".about-us").on("click", function() {
        $("html , body").animate({ scrollTop: $(".about").offset().top }, 1000)
    });

    $(".service").on("click", function() {
        $("html , body").animate({ scrollTop: $(".services").offset().top }, 1000)
    });

    $(".tutors").on("click", function() {
        $("html , body").animate({ scrollTop: $(".tutor").offset().top }, 1000)
    });

    $(".contact-us").on("click", function() {
        $("html , body").animate({ scrollTop: $("footer").offset().top }, 1000)
    });
})