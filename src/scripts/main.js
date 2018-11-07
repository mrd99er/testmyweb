$(document).ready(function() {
    $('.slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
                nav: false,
                dots: true,
            },
            1000: {
                items: 1,
                nav: false,
                dots: true
            }
        }
    });
    $('.service').owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        }
    });
});