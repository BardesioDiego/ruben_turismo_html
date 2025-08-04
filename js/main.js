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

})(jQuery);


  document.addEventListener("DOMContentLoaded", function () {
  // Botones Ver Más / Ver Menos
  const verMasButtons = document.querySelectorAll('.btn-ver-mas');
  const verMenosButtons = document.querySelectorAll('.btn-ver-menos');

  verMasButtons.forEach(button => {
    button.addEventListener('click', function () {
      const packageDetails = this.closest('.p-4')?.querySelector('.package-details');
      const verMenosButton = this.closest('.p-4')?.querySelector('.btn-ver-menos');
      if (packageDetails && verMenosButton) {
        packageDetails.style.display = 'block';
        this.style.display = 'none';
        verMenosButton.style.display = 'inline-block';
      }
    });
  });

  verMenosButtons.forEach(button => {
    button.addEventListener('click', function () {
      const packageDetails = this.closest('.p-4')?.querySelector('.package-details');
      const verMasButton = this.closest('.p-4')?.querySelector('.btn-ver-mas');
      if (packageDetails && verMasButton) {
        packageDetails.style.display = 'none';
        this.style.display = 'none';
        verMasButton.style.display = 'inline-block';
      }
    });
  });

  // Dropdown personalizado
  const dropdowns = document.querySelectorAll('.dropdown-toggle');

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('click', function (e) {
      const parent = e.target.closest('.dropdown');
      if (parent && parent.classList.contains('show')) {
        parent.classList.remove('show');
        parent.querySelector('.dropdown-menu').classList.remove('show');
      } else {
        e.preventDefault();
        dropdowns.forEach(d => {
          const p = d.closest('.dropdown');
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











