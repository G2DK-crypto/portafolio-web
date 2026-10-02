// Funcionalidad principal del portafolio

document.addEventListener('DOMContentLoaded', function() {
    // Activar el menú hamburguesa en móviles
    const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll('.navbar-burger'),
        0
    );

    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(function($el) {
            $el.addEventListener('click', function() {
                const target = $el.dataset.target;
                const $target = document.getElementById(target);
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

    // Smooth scroll para los enlaces del navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Cerrar el menú móvil si está abierto
                const $navbarBurgers = document.querySelectorAll('.navbar-burger');
                const $navbarMenus = document.querySelectorAll('.navbar-menu');
                $navbarBurgers.forEach($el => $el.classList.remove('is-active'));
                $navbarMenus.forEach($el => $el.classList.remove('is-active'));
            }
        });
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Validación básica
            if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
                alert('Por favor, completa todos los campos.');
                return;
            }
            
            // Validación de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un email válido.');
                return;
            }
            
            // Simular envío del formulario
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente.\n\nTe contactaré pronto al correo: ${email}`);
            
            // Limpiar el formulario
            contactForm.reset();
        });
    }

    // Animación de aparición al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar todas las secciones
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Efecto de typing en el hero (opcional)
    const heroTitle = document.querySelector('.hero .title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let index = 0;
        
        function typeWriter() {
            if (index < originalText.length) {
                heroTitle.textContent += originalText.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }

    // Navbar cambia de color al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('is-shadowed');
        } else {
            navbar.classList.remove('is-shadowed');
        }
    });

    console.log('Portafolio cargado correctamente 🚀');
});
