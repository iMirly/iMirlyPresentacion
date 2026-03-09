// ============================================
// iMirly - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // Header scroll effect
    // ============================================
    const header = document.getElementById('header');

    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // ============================================
    // Mobile menu toggle
    // ============================================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav__menu');

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            // Animate hamburger
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', function () {
            if (!this.classList.contains('disabled')) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // ============================================
    // Intersection Observer for fade-in animations
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // ============================================
    // Smooth scroll for anchor links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ============================================
    // Disabled links handler
    // ============================================
    document.querySelectorAll('.nav__link.disabled').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Create temporary tooltip
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Próximamente';
            tooltip.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: var(--color-purple);
                color: white;
                padding: 1rem 2rem;
                border-radius: 12px;
                font-weight: 600;
                z-index: 9999;
                box-shadow: 0 10px 40px rgba(50, 30, 146, 0.3);
                animation: fadeInOut 2s ease forwards;
            `;

            // Add animation keyframes if not exists
            if (!document.getElementById('tooltip-anim')) {
                const style = document.createElement('style');
                style.id = 'tooltip-anim';
                style.textContent = `
                    @keyframes fadeInOut {
                        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
                        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
                    }
                `;
                document.head.appendChild(style);
            }

            document.body.appendChild(tooltip);

            setTimeout(() => {
                tooltip.remove();
            }, 2000);
        });
    });

    // ============================================
    // CTA Button handler
    // ============================================
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();

                // Scroll to next section (La Idea)
                const ideaSection = document.getElementById('idea');
                if (ideaSection) {
                    const headerOffset = 80;
                    const elementPosition = ideaSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ============================================
    // Parallax effect for hero decorations
    // ============================================
    const heroDecorations = document.querySelectorAll('.hero__decoration');

    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        heroDecorations.forEach((decoration, index) => {
            const speed = 0.5 + (index * 0.1);
            decoration.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // ============================================
    // Active nav link on scroll
    // ============================================
    const sections = document.querySelectorAll('section[id]');

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav__link').forEach(link => {
                    link.classList.remove('active');
                });
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    console.log('iMirly presentation loaded successfully ✨');

    // Añadir al final de main.js o en un script al final del body

    // Modal functions
    function openModal(imageSrc) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        modal.style.display = 'flex';
        modalImg.src = imageSrc;
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    }

    function closeModal() {
        const modal = document.getElementById('imageModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }

    // Cerrar modal al hacer clic fuera de la imagen
    window.onclick = function (event) {
        const modal = document.getElementById('imageModal');
        if (event.target === modal) {
            closeModal();
        }
    }

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

});