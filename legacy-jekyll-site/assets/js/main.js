/* ============================================
   MAIN.JS — Portfolio Interactions & Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initTypingEffect();
    initScrollAnimations();
    initNavigation();
    initCountUp();
    initSmoothScroll();
});

/* ============================================
   PARTICLE NETWORK BACKGROUND
   ============================================ */
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height, particles, mouse;
    const PARTICLE_COUNT = 80;
    const CONNECTION_DISTANCE = 150;
    const MOUSE_RADIUS = 200;

    mouse = { x: null, y: null };

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 0.5;
            this.baseAlpha = Math.random() * 0.5 + 0.2;
            this.alpha = this.baseAlpha;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse repel effect
            if (mouse.x !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MOUSE_RADIUS) {
                    const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                    this.x += dx * force * 0.02;
                    this.y += dy * force * 0.02;
                    this.alpha = Math.min(1, this.baseAlpha + force * 0.5);
                } else {
                    this.alpha += (this.baseAlpha - this.alpha) * 0.05;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 212, 255, ${this.alpha})`;
            ctx.fill();
        }
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONNECTION_DISTANCE) {
                    const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawConnections();
        requestAnimationFrame(animate);
    }

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });
}

/* ============================================
   TYPING EFFECT
   ============================================ */
function initTypingEffect() {
    const element = document.getElementById('typed-text');
    if (!element) return;

    const strings = [
        'Fullstack Developer',
        'Data Science Enthusiast',
        'Cybersecurity Researcher',
        'CTF Player',
        'Pentesting Practitioner',
        'Next.js & TypeScript Expert'
    ];

    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    function type() {
        const currentString = strings[stringIndex];

        if (isDeleting) {
            currentText = currentString.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = currentString.substring(0, charIndex + 1);
            charIndex++;
        }

        element.textContent = currentText;

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentString.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % strings.length;
            typeSpeed = 400; // Pause before next word
        }

        setTimeout(type, typeSpeed);
    }

    // Start after a delay
    setTimeout(type, 1200);
}

/* ============================================
   SCROLL ANIMATIONS (Intersection Observer)
   ============================================ */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('in-view');
                    }, parseInt(delay));
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    animatedElements.forEach((el) => observer.observe(el));
}

/* ============================================
   NAVIGATION
   ============================================ */
function initNavigation() {
    const nav = document.getElementById('floating-nav');
    const toggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-link-cta)');
    const sections = document.querySelectorAll('.section, .hero');

    // Show/hide nav on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 100) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }
        lastScroll = currentScroll;

        // Active section highlighting
        let current = '';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 200;
            if (currentScroll >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile toggle
    if (toggle && mobileMenu) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });

        mobileLinks.forEach((link) => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }
}

/* ============================================
   COUNT UP ANIMATION
   ============================================ */
function initCountUp() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    let started = false;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !started) {
                    started = true;
                    counters.forEach((counter) => {
                        const target = parseInt(counter.dataset.count);
                        const duration = 2000;
                        const startTime = performance.now();

                        function updateCount(currentTime) {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);

                            // Ease out cubic
                            const ease = 1 - Math.pow(1 - progress, 3);
                            const current = Math.floor(ease * target);

                            counter.textContent = current;

                            if (progress < 1) {
                                requestAnimationFrame(updateCount);
                            } else {
                                counter.textContent = target;
                            }
                        }

                        requestAnimationFrame(updateCount);
                    });
                }
            });
        },
        { threshold: 0.5 }
    );

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }
        });
    });
}
