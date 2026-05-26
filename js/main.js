/* =========================================
   AIC KANZINWA CYDC — MAIN JAVASCRIPT
   ========================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- NAVBAR SCROLL EFFECT ---- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  /* ---- MOBILE MENU ---- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- ACTIVE NAV LINK ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---- SCROLL ANIMATIONS ---- */
  const animatedEls = document.querySelectorAll('.animate');
  if (animatedEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, entry.target.dataset.delay || 0);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    animatedEls.forEach(el => observer.observe(el));
  }

  /* ---- COUNTER ANIMATION ---- */
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target.toLocaleString() + suffix;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current).toLocaleString() + suffix;
      }
    }, 16);
  }
  const counters = document.querySelectorAll('.counter');
  if (counters.length) {
    const co = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          co.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => co.observe(c));
  }

  /* ---- LIGHTBOX ---- */
  const lightbox   = document.getElementById('lightbox');
  const lbImg      = document.getElementById('lightbox-img');
  const lbClose    = document.getElementById('lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item[data-src]');

  if (lightbox && lbImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        lbImg.src = item.dataset.src;
        lbImg.alt = item.dataset.caption || '';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
      lbImg.src = '';
    }
    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  }

  /* ---- DONATE AMOUNT BUTTONS ---- */
  const amountBtns = document.querySelectorAll('.amount-btn');
  const customInput = document.getElementById('custom-amount');
  amountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      amountBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if (customInput) {
        customInput.value = btn.dataset.amount !== 'custom' ? btn.dataset.amount : '';
        if (btn.dataset.amount !== 'custom') customInput.focus();
      }
    });
  });

  /* ---- SMOOTH SCROLL FOR HASH LINKS ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---- CONTACT FORM ---- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Message Sent!';
        btn.style.background = 'var(--green-700)';
        contactForm.reset();
        setTimeout(() => {
          btn.textContent = 'Send Message';
          btn.style.background = '';
          btn.disabled = false;
        }, 3500);
      }, 1400);
    });
  }

  /* ---- DONATE FORM ---- */
  const donateForm = document.getElementById('donate-form');
  if (donateForm) {
    donateForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      btn.textContent = 'Processing...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Thank You for Your Generosity!';
        btn.style.background = 'var(--green-700)';
        setTimeout(() => {
          btn.textContent = 'Donate Now';
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      }, 1800);
    });
  }

  /* ---- VOLUNTEER FORM ---- */
  const volunteerForm = document.getElementById('volunteer-form');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      btn.textContent = 'Submitting...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Application Received!';
        btn.style.background = 'var(--green-700)';
        volunteerForm.reset();
        setTimeout(() => {
          btn.textContent = 'Submit Application';
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      }, 1600);
    });
  }

});
