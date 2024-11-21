document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navItems = document.querySelectorAll('.nav-item');

    function toggleMenu() {
        navbarMenu.classList.toggle('active');
        hamburger.classList.toggle('active');

        if (navbarMenu.classList.contains('active')) {
            navbarMenu.style.display = 'block';
            setTimeout(() => {
                navItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 50);
                });
            }, 10);
        } else {
            navItems.forEach((item) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(-20px)';
            });
            setTimeout(() => {
                navbarMenu.style.display = 'none';
            }, 300); // Match this delay with the CSS transition time
        }
    }

    hamburger.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', function(event) {
        const isClickInside = navbarMenu.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInside && navbarMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Prevent closing when clicking inside the menu
    navbarMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});