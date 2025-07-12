(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

//boton ver mas
document.addEventListener('DOMContentLoaded', function() {
    const verMasButtons = document.querySelectorAll('.btn-ver-mas');
    const verMenosButtons = document.querySelectorAll('.btn-ver-menos');

    verMasButtons.forEach(button => {
        button.addEventListener('click', function() {
            const packageDetails = this.closest('.package-item').querySelector('.package-details');
            const verMenosButton = this.nextElementSibling;
            packageDetails.style.display = 'block';
            this.style.display = 'none';
            verMenosButton.style.display = 'inline-block';
        });
    });

    verMenosButtons.forEach(button => {
        button.addEventListener('click', function() {
            const packageDetails = this.closest('.package-item').querySelector('.package-details');
            const verMasButton = this.previousElementSibling;
            packageDetails.style.display = 'none';
            this.style.display = 'none';
            verMasButton.style.display = 'inline-block';
        });
    });
});

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbar = document.querySelector('.navbar-collapse');
            if (navbar.classList.contains('show')) {
                $('.navbar-collapse').collapse('hide');
            }
        });
    });

    $('.navbar-nav>div>a, .navbar-nav>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });