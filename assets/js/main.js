/**
 * HIRO.DEV — Main Logic
 * Premium interactions and animations
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initHeaderScroll();
    initFixedCta();
    initMobileMenu();
    initContentFilter();
    initHeroChart();
    initSmoothScroll();
});

/**
 * Scroll reveal animations using Intersection Observer
 */
function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once visible, we can stop observing this element
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealEls.forEach(el => observer.observe(el));
}

/**
 * Header shadow and style change on scroll
 */
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
}

/**
 * Fixed CTA bar visibility based on scroll position
 */
function initFixedCta() {
    const fixedCta = document.getElementById('fixedCta');
    if (!fixedCta) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            fixedCta.classList.add('visible');
        } else {
            fixedCta.classList.remove('visible');
        }
    }, { passive: true });
}

/**
 * Mobile menu toggle functionality
 */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!hamburger || !mobileMenu) return;

    const toggle = () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    };

    hamburger.addEventListener('click', toggle);

    // Close menu when clicking links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

/**
 * Filter functionality for the Content/Note section
 */
function initContentFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const contentCards = document.querySelectorAll('.content-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const cat = btn.getAttribute('data-filter') || 'all';

            contentCards.forEach(card => {
                const cardCat = card.getAttribute('data-cat');
                const show = cat === 'all' || cardCat === cat;

                if (show) {
                    card.style.display = 'flex';
                    // Trigger a tiny animation re-entry
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.transition = 'all 0.4s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Hero chart bar animation loop
 */
function initHeroChart() {
    const bars = document.querySelectorAll('.hero-chart-bar');
    if (bars.length === 0) return;

    let currentBar = 7; // Start near the "active" one defined in HTML
    
    setInterval(() => {
        bars.forEach(b => b.classList.remove('active'));
        currentBar = (currentBar + 1) % bars.length;
        bars[currentBar].classList.add('active');
    }, 2000);
}

/**
 * Smooth scrolling for all anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.getElementById('header')?.offsetHeight || 64;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Optimization: Trigger initial reveals on load and scroll
window.dispatchEvent(new Event('scroll'));
