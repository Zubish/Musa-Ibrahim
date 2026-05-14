document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const header = document.querySelector('.site-header');
  const themeToggle = document.getElementById('theme-toggle');
  const currentYear = document.getElementById('current-year');
  const sectionLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const sections = sectionLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });

      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  if (sections.length && sectionLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        sectionLinks.forEach((link) => {
          const isCurrent = link.getAttribute('href') === `#${entry.target.id}`;
          if (isCurrent) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    }, {
      rootMargin: '-35% 0px -45% 0px',
      threshold: 0.1
    });

    sections.forEach((section) => observer.observe(section));
  }

  const revealItems = document.querySelectorAll('.reveal');
  if (revealItems.length && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.18
    });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('reveal-visible'));
  }

  if (header) {
    let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
    let ticking = false;

    window.addEventListener('scroll', () => {
      const current = window.pageYOffset || document.documentElement.scrollTop;
      if (ticking) return;

      window.requestAnimationFrame(() => {
        if (current > lastScroll && current > 100 && !nav?.classList.contains('open')) {
          header.classList.add('hidden');
        } else {
          header.classList.remove('hidden');
        }

        lastScroll = current <= 0 ? 0 : current;
        ticking = false;
      });

      ticking = true;
    }, { passive: true });
  }

  (function setupTheme() {
    const THEME_KEY = 'site-theme';
    const root = document.documentElement;

    const applyTheme = (theme) => {
      root.setAttribute('data-theme', theme === 'light' ? 'light' : 'dark');
    };

    const stored = localStorage.getItem(THEME_KEY);
    applyTheme(stored === 'light' ? 'light' : 'dark');

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const next = current === 'light' ? 'dark' : 'light';
        applyTheme(next);
        localStorage.setItem(THEME_KEY, next);
      });
    }
  })();

  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('contact-status');
  const FALLBACK_EMAIL = 'musabish98@gmail.com';
  const fieldRules = [
    {
      id: 'contact-name',
      validate: (value) => value.trim().length >= 2,
      message: 'Please enter your name.'
    },
    {
      id: 'contact-email',
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      message: 'Please enter a valid email address.'
    },
    {
      id: 'contact-message',
      validate: (value) => value.trim().length >= 12,
      message: 'Please add a message with a bit more detail.'
    }
  ];

  const setFieldError = (fieldId, message) => {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}-error`);
    if (!field || !error) return;

    error.textContent = message;
    if (message) {
      field.setAttribute('aria-invalid', 'true');
      field.setAttribute('aria-describedby', error.id);
    } else {
      field.removeAttribute('aria-invalid');
      field.removeAttribute('aria-describedby');
    }
  };

  const validateForm = () => {
    let isValid = true;

    fieldRules.forEach((rule) => {
      const field = document.getElementById(rule.id);
      const value = field ? field.value : '';
      const passed = rule.validate(value || '');
      setFieldError(rule.id, passed ? '' : rule.message);
      if (!passed) isValid = false;
    });

    return isValid;
  };

  const showStatus = (type, text) => {
    if (!statusEl) return;
    statusEl.classList.remove('success', 'error', 'visible');
    statusEl.classList.add(type, 'visible');
    statusEl.textContent = text;
  };

  fieldRules.forEach((rule) => {
    const field = document.getElementById(rule.id);
    if (!field) return;
    field.addEventListener('input', () => {
      const passed = rule.validate(field.value || '');
      setFieldError(rule.id, passed ? '' : rule.message);
    });
  });

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      showStatus('success', '');
      statusEl?.classList.remove('visible', 'success', 'error');

      if (!validateForm()) {
        showStatus('error', 'Please fix the highlighted fields before sending.');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      const formData = new FormData(form);

      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const message = formData.get('message') || '';
      const subject = encodeURIComponent(`Portfolio message from ${name || email || 'Website visitor'}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
      showStatus('success', 'Your email client was opened so you can send the message directly.');

      if (submitBtn) submitBtn.disabled = false;
    });
  }
});
