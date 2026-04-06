// ─── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ─── Scroll to top ──
function scrollToTop(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Hamburger / mobile menu ───
const hamburger         = document.getElementById('hamburger');
const mobileMenu        = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  mobileMenuOverlay.classList.toggle('open');
});

mobileMenuOverlay.addEventListener('click', () => {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  mobileMenuOverlay.classList.remove('open');
});

document.querySelectorAll('.mobile-nav-links a, .mobile-menu .btn').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.classList.remove('open');
  });
});

// ─── Unified Scroll Reveal ────
// Supports both .visible and .active so CSS works either way
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.classList.add('active');
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── Counter animation ───
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el     = entry.target;
    const target = +el.dataset.target;
    let cur      = 0;
    const step   = Math.ceil(target / 60);
    const timer  = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = cur;
      if (cur >= target) clearInterval(timer);
    }, 25);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.3 });

document.querySelectorAll('.counting').forEach(c => counterObserver.observe(c));

// ─── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ─── EmailJS CONFIG ──
const EMAILJS_SERVICE_ID  = "service_dg5gy5n";
const EMAILJS_TEMPLATE_ID = "template_37c9p0x";
const EMAILJS_PUBLIC_KEY  = "6tQtSEv3IiJDHjIdO";

window.addEventListener("load", function () {
  if (typeof emailjs !== 'undefined') emailjs.init(EMAILJS_PUBLIC_KEY);
});

// ─── Contact Form Submit ──
function handleSubmit(event) {
  event.preventDefault();

  const btn        = document.getElementById("sendBtn");
  const successMsg = document.getElementById("successMessage");
  const originalText = btn.innerHTML;

  btn.innerHTML = '<span class="loading-spinner"></span> Sending...';
  btn.disabled  = true;

  const formData = new FormData(event.target);
  const templateParams = {
    from_name : formData.get("name"),
    from_email: formData.get("email"),
    phone     : formData.get("phone")   || "Not provided",
    company   : formData.get("company") || "Not provided",
    service   : formData.get("service"),
    message   : formData.get("message")
  };

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    .then(() => {
      successMsg.classList.add('show');
      event.target.reset();
      btn.innerHTML = "✓ Sent Successfully";
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled  = false;
        successMsg.classList.remove('show');
      }, 4000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      btn.innerHTML = "Failed – Try Again";
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled  = false;
      }, 3000);
    });
}

// ─── AI Assistant ────
const aiBtn      = document.getElementById('aiAssistantBtn');
const aiModal    = document.getElementById('aiModal');
const aiCloseBtn = document.getElementById('aiCloseBtn');
const aiInput    = document.getElementById('aiInput');
const aiSendBtn  = document.getElementById('aiSendBtn');
const aiMessages = document.getElementById('aiChatMessages');

aiBtn.addEventListener('click', () => aiModal.classList.toggle('open'));
aiCloseBtn.addEventListener('click', () => aiModal.classList.remove('open'));

function addMessage(text, isBot = true) {
  const div     = document.createElement('div');
  div.className = `ai-message ${isBot ? 'bot' : 'user'}`;
  div.textContent = text;
  aiMessages.appendChild(div);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

function selectOption(option) {
  const responses = {
    services : 'We offer Web Development, Mobile Apps, Software Development, Digital Marketing, SEO, and AI Automation. Which service interests you most?',
    pricing  : 'Our pricing is project-based and tailored to your needs. Please fill out our contact form or schedule a free consultation for an accurate quote!',
    portfolio: 'We\'ve successfully delivered 20+ projects across various industries. Check the showcase section above. Would you like to discuss your project?',
    contact  : 'You can reach us via:\n📧 contact@azeeltechnologies.com\n📞 +916009590154\n💬 WhatsApp: Click the green button\n📝 Or fill out the contact form!'
  };
  addMessage(responses[option], true);
}

function sendAiMessage() {
  const message = aiInput.value.trim();
  if (!message) return;
  addMessage(message, false);
  aiInput.value = '';
  setTimeout(() => {
    addMessage('Thank you for your message! Our team will get back to you shortly. Feel free to explore our services or fill out the contact form for immediate assistance.', true);
  }, 1000);
}

aiSendBtn.addEventListener('click', sendAiMessage);
aiInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendAiMessage(); });

// ─── Testimonial Carousel ────
document.addEventListener('DOMContentLoaded', () => {
  const track          = document.querySelector('.testimonial-track');
  const slides         = document.querySelectorAll('.testi-card');
  const dotsContainer  = document.querySelector('.carousel-dots');
  const nextBtn        = document.querySelector('.carousel-btn.next');
  const prevBtn        = document.querySelector('.carousel-btn.prev');

  if (!track || slides.length === 0) return;

  let index = 0;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
    dot.addEventListener('click', () => { index = i; updateCarousel(); });
  });

  const dots = document.querySelectorAll('.carousel-dots span');

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { index = (index + 1) % slides.length; updateCarousel(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { index = (index - 1 + slides.length) % slides.length; updateCarousel(); });

  // Auto slide every 5s
  setInterval(() => { index = (index + 1) % slides.length; updateCarousel(); }, 5000);
});