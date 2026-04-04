// ─── Navbar scroll effect ───
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ─── Hamburger / Mobile Menu ───
const hamburger         = document.getElementById('hamburger');
const mobileMenu        = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    mobileMenuOverlay.classList.toggle('open');
  });
}
if (mobileMenuOverlay) {
  mobileMenuOverlay.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.classList.remove('open');
  });
}
document.querySelectorAll('.mobile-nav-links a, .mobile-menu .btn').forEach(link => {
  link.addEventListener('click', () => {
    if (hamburger) hamburger.classList.remove('open');
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('open');
  });
});

// ─── Scroll Reveal ───
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── Counter animation ───
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.target;
    let cur = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = cur;
      if (cur >= target) clearInterval(timer);
    }, 25);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.4 });
document.querySelectorAll('.counting').forEach(c => counterObserver.observe(c));

// ─── FAQ Accordion ───
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ─── EmailJS Contact Form ───
const EMAILJS_SERVICE_ID  = "service_dg5gy5n";
const EMAILJS_TEMPLATE_ID = "template_37c9p0x";
const EMAILJS_PUBLIC_KEY  = "6tQtSEv3IiJDHjIdO";

window.addEventListener("load", function () {
  if (window.emailjs) emailjs.init(EMAILJS_PUBLIC_KEY);
});

function handleSubmit(event) {
  event.preventDefault();
  const btn = document.getElementById("sendBtn");
  const successMsg = document.getElementById("successMessage");
  if (!btn) return;
  const originalHTML = btn.innerHTML;
  btn.innerHTML = '<span style="display:inline-block;width:16px;height:16px;border:2px solid rgba(255,255,255,0.3);border-top-color:white;border-radius:50%;animation:spin .8s linear infinite"></span> Sending...';
  btn.disabled = true;
  const formData = new FormData(event.target);
  const templateParams = {
    from_name:  formData.get("name"),
    from_email: formData.get("email"),
    phone:      formData.get("phone") || "Not provided",
    company:    formData.get("company") || "Not provided",
    service:    formData.get("service") || "General Inquiry",
    message:    formData.get("message")
  };
  if (window.emailjs) {
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(() => {
        if (successMsg) { successMsg.classList.add('show'); }
        event.target.reset();
        btn.innerHTML = '✓ Sent Successfully';
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.disabled = false;
          if (successMsg) successMsg.classList.remove('show');
        }, 4000);
      })
      .catch(err => {
        console.error("EmailJS Error:", err);
        btn.innerHTML = '✗ Failed to Send. Try Again.';
        setTimeout(() => { btn.innerHTML = originalHTML; btn.disabled = false; }, 3000);
      });
  } else {
    setTimeout(() => {
      if (successMsg) successMsg.classList.add('show');
      event.target.reset();
      btn.innerHTML = '✓ Sent Successfully';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        if (successMsg) successMsg.classList.remove('show');
      }, 4000);
    }, 1200);
  }
}

// ─── Smooth scroll anchor links ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// spin keyframes
const styleEl = document.createElement('style');
styleEl.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
document.head.appendChild(styleEl);
