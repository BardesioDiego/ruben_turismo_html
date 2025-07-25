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


  document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.dropdown-toggle');

    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener('click', function (e) {
        var parent = e.target.closest('.dropdown');
        if (parent && parent.classList.contains('show')) {
          parent.classList.remove('show');
          parent.querySelector('.dropdown-menu').classList.remove('show');
        } else {
          e.preventDefault(); // evita que cierre el navbar
          dropdowns.forEach(d => {
            var p = d.closest('.dropdown');
            if (p) {
              p.classList.remove('show');
              let menu = p.querySelector('.dropdown-menu');
              if (menu) menu.classList.remove('show');
            }
          });
          parent.classList.add('show');
          parent.querySelector('.dropdown-menu').classList.add('show');
        }
      });
    });
  });


  let currentIndex = 0;
  let images = [];

  document.addEventListener("DOMContentLoaded", function () {
    images = Array.from(document.querySelectorAll(".img-about"));

    images.forEach((img, index) => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => openLightbox(index));
    });

    // Cerrar lightbox con clic en fondo
    document.getElementById("lightbox").addEventListener("click", (e) => {
      if (e.target.id === "lightbox" || e.target.tagName === "IMG") {
        closeLightbox();
      }
    });

    // Navegación con teclado
    document.addEventListener("keydown", function (e) {
      if (document.getElementById("lightbox").style.display === "flex") {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeLightbox();
      }
    });
  });

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    document.getElementById("lightbox").style.display = "flex";
  }

  function updateLightbox() {
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
  }

  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  }


