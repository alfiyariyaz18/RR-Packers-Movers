document.addEventListener('DOMContentLoaded', function () {
    // Get the current year for the footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offsetTop = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close the navbar on small screens after clicking a link
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarToggler && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click(); // Simulate a click to close the navbar
                }
            }
        });
    });

    // Form Validation (Bootstrap's built-in validation)
    const forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });

    // Active link highlighting on scroll (Bootstrap's Scrollspy handles most of this)
    // You might need custom logic for specific cases if Bootstrap's scrollspy isn't enough,
    // but for simple section highlighting, it's usually sufficient.
    // Example: Manually setting active class if needed (less common with Bootstrap 5)
    // const sections = document.querySelectorAll('section');
    // const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // window.addEventListener('scroll', () => {
    //     let current = '';
    //     sections.forEach(section => {
    //         const sectionTop = section.offsetTop;
    //         const sectionHeight = section.clientHeight;
    //         if (pageYOffset >= sectionTop - navbarHeight && pageYOffset < sectionTop + sectionHeight - navbarHeight) {
    //             current = section.getAttribute('id');
    //         }
    //     });

    //     navLinks.forEach(link => {
    //         link.classList.remove('active');
    //         if (link.getAttribute('href').includes(current)) {
    //             link.classList.add('active');
    //         }
    //     });
    // });
});