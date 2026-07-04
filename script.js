/* =========================================================
   MLT CONSULTING — SCRIPT.JS
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     1. TRANSLATIONS DICTIONARY
     ========================================================= */
  const translations = {
    fr: {
      nav_home: "Accueil",
      nav_about: "À propos",
      nav_services: "Services",
      nav_destinations: "Destinations",
      nav_contact: "Contact",
      nav_cta: "Prendre RDV",

      hero_eyebrow: "My Lovely Traveling",
      hero_h1: "MLT CONSULTING RDC",
      hero_h2: "Heureux voyage et mémorable",
      hero_sub: "Votre partenaire de confiance pour vos projets de mobilité internationale",
      hero_cta1: "Découvrir nos services",
      hero_cta2: "Nous contacter",

      why_eyebrow: "Notre engagement",
      why_title: "Pourquoi MLT ?",
      why_card1_title: "Expertise",
      why_card1_text: "Maîtrise des procédures de voyage et d'immigration",
      why_card2_title: "Innovation",
      why_card2_text: "Solutions modernes pour simplifier vos démarches",
      why_card3_title: "Personnalisation",
      why_card3_text: "Accompagnement sur mesure adapté à vos besoins",

      trust1: "100% Processus Transparent",
      trust2: "Accompagnement Légalement Conforme",
      trust3: "Stratégie Sur Mesure",

      about_eyebrow: "À propos de nous",
      about_title: "My Lovely Traveling",
      about_counter_label: "Bénéficiaires accompagnés",
      about_p1: "My Lovely Traveling (MLT) est une structure d'assistance spécialisée en mobilité internationale, créée en 2022. Notre mission est d'accompagner des étudiants, professionnels et familles dans :",
      about_li1: "La préparation stratégique de dossiers visa",
      about_li2: "Les procédures d'immigration",
      about_li3: "L'obtention de visas d'études et touristiques",
      about_li4: "La planification complète de leur projet international",
      about_p2: "Avec plus de 100 bénéficiaires accompagnés, MLT s'impose comme un acteur fiable et structuré dans le secteur de l'accompagnement international en RDC.",
      about_quote: "« Nous ne traitons pas seulement des dossiers. Nous construisons des trajectoires vers l'international. »",
      value1: "Professionnalisme",
      value2: "Transparence",
      value3: "Intégrité",

      services_eyebrow: "Ce que nous offrons",
      services_title: "Nos Services",
      service1_title: "Assistance Visa d'Étude",
      service1_intro: "Nous accompagnons les étudiants dans leur projet académique international :",
      service1_li1: "Orientation et choix du pays",
      service1_li2: "Analyse du profil académique & Bourses d'étude",
      service1_li3: "Assistance à l'admission et constitution du dossier",
      service1_li4: "Accompagnement pour la demande de permis d'étude ou visa",
      goal_label: "Objectif :",
      service1_goal: "Structurer un dossier solide et cohérent.",

      service2_title: "Assistance Visa Touristique Type-C",
      service2_intro: "Préparation stratégique de votre dossier de visa tourisme :",
      service2_li1: "Analyse du profil",
      service2_li2: "Vérification des documents",
      service2_li3: "Conseils personnalisés",
      service2_li4: "Préparation à l'entretien si nécessaire",
      service2_warning: "NB : Nous ne faisons pas les démarches à votre place. Nous vous guidons étape par étape afin de maximiser vos chances d'obtention.",

      service3_title: "Assistance Immigration",
      service3_intro: "Accompagnement dans le respect des lois et procédures :",
      service3_li1: "Respect des lois et procédures d'immigration internationales",
      service3_li2: "Sensibilisation contre les pratiques illégales et fraudes documentaires",
      service3_li3: "Démarches légales, transparentes et responsables",

      testi_eyebrow: "Ils nous font confiance",
      testi_title: "Histoires de Réussite",
      testi1_text: "« Grâce à MLT, j'ai obtenu mon visa étudiant pour le Canada en un temps record. L'équipe a été présente à chaque étape, avec une transparence totale. »",
      testi1_name: "Mariam Makiese",
      testi1_role: "Chypre du Nord",
      testi2_text: "« Un accompagnement sérieux et professionnel. Mon dossier de visa pour la Turquie a été traité rapidement et j'ai obtenu mon visa visiteur sans stress. »",
      testi2_name: "Tegra Bilonda",
      testi2_role: "Turquie (visa visiteur)",
      testi3_text: "« Je recommande vivement MLT Consulting. Leur sérieux et leur transparence m'ont permis d'aborder mon entretien visa en toute confiance. »",
      testi3_name: "Maman Marie",
      testi3_role: "Schengen",
      testi4_text: "« J'ai vraiment apprécié le suivi attentionné et professionnel de MLT : mon dossier a été traité rapidement, les conseils étaient clairs et j'ai obtenu mon visa Chine. »",
      testi4_name: "Chris O.",
      testi4_role: "Visa Chine",

      dest_eyebrow: "Où aller ensuite",
      dest_title: "Nos Destinations",
      dest1: "Espace Schengen",
      dest2: "Canada",
      dest3: "Turquie",
      dest4: "Chypre",
      dest5: "Zanzibar",
      dest6: "Chine",
      dest7: "Dubaï",

      contact_eyebrow: "Parlons de votre projet",
      contact_title: "Contactez-nous",
      form_fullname: "Nom complet",
      form_email: "Adresse e-mail",
      form_phone: "Téléphone",
      form_service: "Service souhaité",
      form_service_default: "-- Sélectionner --",
      form_service_1: "Visa d'étude",
      form_service_2: "Visa touristique",
      form_service_3: "Immigration",
      form_message: "Message",
      form_submit: "Envoyer le message",
      form_error_required: "Ce champ est requis",
      form_error_email: "Veuillez entrer un e-mail valide",

      info_address: "Limete, quartier Funa, Kinshasa, RDC",
      info_hours: "Lun - Ven, 8h00 - 17h00",

      footer_slogan: "Heureux voyage et mémorable. Votre partenaire de confiance pour vos projets de mobilité internationale.",
      footer_nav_title: "Navigation",
      footer_copy: "© 2026 MLT CONSULTING RDC - Tous droits réservés.",
      footer_legal1: "Mentions légales",
      footer_legal2: "Politique de confidentialité",

      modal_title: "Message envoyé !",
      modal_text: "Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.",
      modal_ok: "Parfait",

      cookie_text: "Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant, vous acceptez notre politique de confidentialité.",
      cookie_accept: "J'accepte"
    },

    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_services: "Services",
      nav_destinations: "Destinations",
      nav_contact: "Contact",
      nav_cta: "Book Appointment",

      hero_eyebrow: "My Lovely Traveling",
      hero_h1: "MLT CONSULTING RDC",
      hero_h2: "Happy and memorable journeys",
      hero_sub: "Your trusted partner for your international mobility projects",
      hero_cta1: "Discover our services",
      hero_cta2: "Contact us",

      why_eyebrow: "Our commitment",
      why_title: "Why MLT?",
      why_card1_title: "Expertise",
      why_card1_text: "Mastery of travel and immigration procedures",
      why_card2_title: "Innovation",
      why_card2_text: "Modern solutions to simplify your process",
      why_card3_title: "Personalization",
      why_card3_text: "Tailored support adapted to your needs",

      trust1: "100% Transparent Process",
      trust2: "Legally Compliant Guidance",
      trust3: "Tailored Strategy",

      about_eyebrow: "About us",
      about_title: "My Lovely Traveling",
      about_counter_label: "Beneficiaries supported",
      about_p1: "My Lovely Traveling (MLT) is an assistance organization specialized in international mobility, founded in 2022. Our mission is to support students, professionals and families in:",
      about_li1: "Strategic preparation of visa applications",
      about_li2: "Immigration procedures",
      about_li3: "Obtaining study and tourist visas",
      about_li4: "Full planning of their international project",
      about_p2: "With more than 100 beneficiaries supported, MLT stands out as a reliable and structured player in the international assistance sector in the DRC.",
      about_quote: "\"We don't just process files. We build pathways to the world.\"",
      value1: "Professionalism",
      value2: "Transparency",
      value3: "Integrity",

      services_eyebrow: "What we offer",
      services_title: "Our Services",
      service1_title: "Study Visa Assistance",
      service1_intro: "We support students in their international academic project:",
      service1_li1: "Guidance and choice of country",
      service1_li2: "Academic profile analysis & scholarships",
      service1_li3: "Admission support and file preparation",
      service1_li4: "Support for study permit or visa applications",
      goal_label: "Goal:",
      service1_goal: "Build a solid and coherent application file.",

      service2_title: "Tourist Visa Type-C Assistance",
      service2_intro: "Strategic preparation of your tourist visa application:",
      service2_li1: "Profile analysis",
      service2_li2: "Document verification",
      service2_li3: "Personalized advice",
      service2_li4: "Interview preparation if necessary",
      service2_warning: "Note: We do not handle the process on your behalf. We guide you step by step to maximize your chances of approval.",

      service3_title: "Immigration Assistance",
      service3_intro: "Support that respects laws and procedures:",
      service3_li1: "Compliance with international immigration laws and procedures",
      service3_li2: "Awareness against illegal practices and document fraud",
      service3_li3: "Legal, transparent and responsible processes",

      testi_eyebrow: "They trust us",
      testi_title: "Success Stories",
      testi1_text: "\"Thanks to MLT, I got my student visa for Canada in record time. The team was there at every step, with total transparency.\"",
      testi1_name: "Mariam Makiese",
      testi1_role: "Northern Cyprus",
      testi2_text: "\"A serious and professional support. My Turkey visitor visa file was processed quickly and I received my approval without stress.\"",
      testi2_name: "Tegra Bilonda",
      testi2_role: "Turkey (visitor visa)",
      testi3_text: "\"I highly recommend MLT Consulting. Their seriousness and transparency allowed me to approach my visa interview with confidence.\"",
      testi3_name: "Maman Marie",
      testi3_role: "Schengen",
      testi4_text: "\"Chris O. really appreciated MLT’s attentive and professional support: the application was handled quickly, advice was clear, and his China visa was granted.\"",
      testi4_name: "Chris O.",
      testi4_role: "China Visa",

      dest_eyebrow: "Where to go next",
      dest_title: "Our Destinations",
      dest1: "Schengen Area",
      dest2: "Canada",
      dest3: "Turkey",
      dest4: "Cyprus",
      dest5: "Zanzibar",
      dest6: "China",
      dest7: "Dubai",

      contact_eyebrow: "Let's talk about your project",
      contact_title: "Contact us",
      form_fullname: "Full name",
      form_email: "Email address",
      form_phone: "Phone number",
      form_service: "Desired service",
      form_service_default: "-- Select --",
      form_service_1: "Study visa",
      form_service_2: "Tourist visa",
      form_service_3: "Immigration",
      form_message: "Message",
      form_submit: "Send message",
      form_error_required: "This field is required",
      form_error_email: "Please enter a valid email address",

      info_address: "Limete, Funa district, Kinshasa, DRC",
      info_hours: "Mon - Fri, 8:00 AM - 5:00 PM",

      footer_slogan: "Happy and memorable journeys. Your trusted partner for your international mobility projects.",
      footer_nav_title: "Navigation",
      footer_copy: "© 2026 MLT CONSULTING RDC - All rights reserved.",
      footer_legal1: "Legal notice",
      footer_legal2: "Privacy policy",

      modal_title: "Message sent!",
      modal_text: "Thank you for contacting us. Our team will get back to you as soon as possible.",
      modal_ok: "Great",

      cookie_text: "We use cookies to improve your experience on our site. By continuing, you accept our privacy policy.",
      cookie_accept: "Accept"
    }
  };

  let currentLang = 'fr';

  function applyTranslations(lang){
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
    });
    document.documentElement.lang = lang;
  }

  /* =========================================================
     2. LANGUAGE SWITCHER
     ========================================================= */
  const langToggle = document.getElementById('langToggle');
  if (langToggle){
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'fr' ? 'en' : 'fr';
      applyTranslations(currentLang);
      langToggle.querySelectorAll('.lang-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.lang === currentLang);
      });
    });
  }

  /* Dark mode support removed */

  /* =========================================================
     3. STICKY HEADER
     ========================================================= */
  const header = document.getElementById('siteHeader');
  function handleHeaderScroll(){
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll();

  /* =========================================================
     4. MOBILE BURGER MENU
     ========================================================= */
  const burgerBtn = document.getElementById('burgerBtn');
  const mainNav = document.getElementById('mainNav');
  const mobileOverlay = document.getElementById('mobileOverlay');

  function closeMobileMenu(){
    burgerBtn.classList.remove('open');
    mainNav.classList.remove('open');
    mobileOverlay.classList.remove('active');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMobileMenu(){
    const isOpen = mainNav.classList.toggle('open');
    burgerBtn.classList.toggle('open', isOpen);
    mobileOverlay.classList.toggle('active', isOpen);
    burgerBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (burgerBtn){
    burgerBtn.addEventListener('click', toggleMobileMenu);
  }
  if (mobileOverlay){
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }
  document.querySelectorAll('.nav-link, .btn-header-cta').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* Active nav link on scroll */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });

  /* =========================================================
     5. ANIMATED COUNTER
     ========================================================= */
  const counterEls = document.querySelectorAll('.counter');
  function animateCounter(el){
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();
    function step(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => counterObserver.observe(el));

  /* =========================================================
     6. SCROLL REVEAL ANIMATIONS
     ========================================================= */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* =========================================================
     7. FORM VALIDATION & SUCCESS MODAL
     ========================================================= */
  const successModal = document.getElementById('successModal');
  const modalClose = document.getElementById('modalClose');
  const modalOkBtn = document.getElementById('modalOkBtn');

  function openModal(){
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    successModal.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOkBtn) modalOkBtn.addEventListener('click', closeModal);
  if (successModal){
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) closeModal();
    });
  }

  function isValidEmail(value){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validateForm(form){
    let valid = true;
    const fields = form.querySelectorAll('input[required], select[required], textarea[required]');
    fields.forEach(field => {
      const group = field.closest('.form-group');
      let fieldValid = field.value.trim() !== '';
      if (fieldValid && field.type === 'email'){
        fieldValid = isValidEmail(field.value.trim());
      }
      if (group){
        group.classList.toggle('error', !fieldValid);
      }
      if (!fieldValid) valid = false;
    });
    return valid;
  }

  function setupForm(formId){
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(form)){
        form.reset();
        form.querySelectorAll('.form-group.error').forEach(g => g.classList.remove('error'));
        openModal();
      }
    });
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        const group = field.closest('.form-group');
        if (group && group.classList.contains('error')){
          let fieldValid = field.value.trim() !== '';
          if (fieldValid && field.type === 'email') fieldValid = isValidEmail(field.value.trim());
          if (fieldValid) group.classList.remove('error');
        }
      });
    });
  }

  setupForm('mainContactForm');

  /* =========================================================
     8. COOKIE BANNER
     ========================================================= */
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAccept = document.getElementById('cookieAccept');
  const COOKIE_KEY = 'mlt_cookie_consent';

  if (cookieBanner && !localStorage.getItem(COOKIE_KEY)){
    setTimeout(() => cookieBanner.classList.add('visible'), 1200);
  }
  if (cookieAccept){
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem(COOKIE_KEY, 'accepted');
      cookieBanner.classList.remove('visible');
    });
  }

  /* =========================================================
     9. BACK TO TOP BUTTON
     ========================================================= */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
  });
  if (backToTop){
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Initialize default language */
  applyTranslations(currentLang);

});
