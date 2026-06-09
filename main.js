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
    // Mobile menu toggle — FIXED
    // ============================================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav__menu');

    function closeMobileMenu() {
        if (!navMenu || !navToggle) return;
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
        navToggle.setAttribute('aria-expanded', 'false');
    }

    function openMobileMenu() {
        if (!navMenu || !navToggle) return;
        navMenu.classList.add('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        navToggle.setAttribute('aria-expanded', 'true');
    }

    if (navToggle && navMenu) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú');

        // Variable para evitar que el click sintético post-touch se dispare dos veces
        let justTouched = false;

        // TOUCH: usar touchend para que no colisione con touchstart del documento
        navToggle.addEventListener('touchend', function (e) {
            e.preventDefault(); // cancela el click sintético posterior
            justTouched = true;
            navMenu.classList.contains('active') ? closeMobileMenu() : openMobileMenu();
        }, { passive: false });

        // CLICK (ratón en escritorio): ignorar si ya lo manejó touchend
        navToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            if (justTouched) { justTouched = false; return; }
            navMenu.classList.contains('active') ? closeMobileMenu() : openMobileMenu();
        });

        // Cerrar al hacer click fuera (ratón)
        document.addEventListener('click', function (e) {
            if (navMenu.classList.contains('active') &&
                !navMenu.contains(e.target) &&
                !navToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Cerrar al tocar fuera (touch) — touchend para no interferir con la apertura
        document.addEventListener('touchend', function (e) {
            if (navMenu.classList.contains('active') &&
                !navMenu.contains(e.target) &&
                !navToggle.contains(e.target)) {
                closeMobileMenu();
            }
        }, { passive: true });

        // Cerrar al hacer click en un enlace (solo en móvil)
        navMenu.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 968) {
                    setTimeout(closeMobileMenu, 150);
                }
            });
        });

        // Cerrar con tecla Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMobileMenu();
                navToggle.focus();
            }
        });
    }

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

// ============================================
// Floating Navigation Menu
// ============================================

(function() {
    // Solo ejecutar si existe el menú flotante en la página
    const floatingNav = document.getElementById('floating-nav');
    if (!floatingNav) return;

    const links = document.querySelectorAll('.floating-nav__link');
    const sections = document.querySelectorAll('section[id]');

    // Navegación suave a secciones
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Actualizar activo
                links.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Scroll spy - resaltar sección actual
    function updateActiveLink() {
        let current = '';
        const scrollY = window.pageYOffset;
        const headerHeight = document.querySelector('.header').offsetHeight;

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop - headerHeight - 100) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    // Llamar una vez al cargar
    updateActiveLink();
})();