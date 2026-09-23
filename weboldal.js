// --- 1. AZONNALI TÉMA ÉS NYELV BEÁLLÍTÁS (Villanás megelőzése) ---
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', savedTheme);

const savedLanguage = localStorage.getItem('language') || 'hu';

document.addEventListener('DOMContentLoaded', () => {

  // --- INTRO SCREEN KEZELÉS ---
  const introScreen = document.getElementById('intro-screen');
  const introBtn = document.getElementById('intro-btn');

  if (introBtn && introScreen) {
    introBtn.addEventListener('click', () => {
      introScreen.classList.add('fade-out');
    });
  }

  // --- 2. SÖTÉT / VILÁGOS MÓD GOMB KEZELÉSE ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // --- 3. SIDEBAR ÉS HAMBURGER MENÜ LOGIKA ---
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMenu() {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  }

  function closeMenu() {
    menuToggle.classList.remove('active');
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  }

  menuToggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  // --- 4. NAVIGÁCIÓ AZ OLDALAK KÖZÖTT ---
  const pageSections = document.querySelectorAll('.page-section');

  function showSection(sectionId) {
    let targetId = sectionId;
    
    if (!targetId || !document.getElementById(targetId)) {
      targetId = 'home';
    }

    navLinks.forEach(link => {
      if (link.getAttribute('data-section') === targetId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    pageSections.forEach(section => {
      if (section.id === targetId) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSectionId = link.getAttribute('data-section');
      
      window.location.hash = targetSectionId;
      showSection(targetSectionId);
      closeMenu();
    });
  });

  const initialSection = window.location.hash.substring(1);
  showSection(initialSection);

  // --- 5. MULTI-LANGUAGE (TÖBBNYELVŰSÉG) LOGIKA ---
  const translations = {
    hu: {
      welcome_title: "Üdvözöllek!!!",
      nav_home: "Főoldal",
      nav_games: "Játékaim",
      nav_server: "Szerver",
      nav_about: "Rólam",
      nav_contact: "Elérhetőségek",
      nav_media: "Képek és Videók",
      nav_merch: "Merch",
      nav_settings: "Beállítások",
      games_desc: "Itt találhatók majd a saját fejlesztésű játékaim.",
      server_desc: "Csatlakozz a hivatalos Discord szerverünkhöz!",
      about_desc: "Néhány gondolat rólam, a céljaimról és a projektjeimről.",
      contact_desc: "Írj nekem üzenetet vagy keress a közösségi médiában!",
      media_desc: "Galéria a legújabb videókból és pillanatképekből.",
      merch_desc: "Nézz szét a hivatalos termékek között!",
      lang_label: "Nyelv kiválasztása:"
    },
    en: {
      welcome_title: "Welcome!!!",
      nav_home: "Home",
      nav_games: "My Games",
      nav_server: "Server",
      nav_about: "About Me",
      nav_contact: "Contact",
      nav_media: "Media",
      nav_merch: "Merch",
      nav_settings: "Settings",
      games_desc: "Here you will find my custom-developed games.",
      server_desc: "Join our official Discord server!",
      about_desc: "A few words about me, my goals, and projects.",
      contact_desc: "Send me a message or find me on social media!",
      media_desc: "Gallery of the latest videos and screenshots.",
      merch_desc: "Check out the official merchandise!",
      lang_label: "Select Language:"
    },
    de: {
      welcome_title: "Willkommen!!!",
      nav_home: "Startseite",
      nav_games: "Meine Spiele",
      nav_server: "Server",
      nav_about: "Über mich",
      nav_contact: "Kontakt",
      nav_media: "Medien",
      nav_merch: "Merch",
      nav_settings: "Einstellungen",
      games_desc: "Hier findest du meine selbst entwickelten Spiele.",
      server_desc: "Tritt unserem offiziellen Discord-Server bei!",
      about_desc: "Ein paar Worte über mich und meine Projekte.",
      contact_desc: "Sende mir eine Nachricht oder folge mir auf Social Media!",
      media_desc: "Galerie der neuesten Videos und Screenshots.",
      merch_desc: "Sieh dir die offiziellen Fanartikel an!",
      lang_label: "Sprache auswählen:"
    },
    es: {
      welcome_title: "¡¡¡Bienvenido!!!",
      nav_home: "Inicio",
      nav_games: "Mis Juegos",
      nav_server: "Servidor",
      nav_about: "Sobre mí",
      nav_contact: "Contacto",
      nav_media: "Galería",
      nav_merch: "Merch",
      nav_settings: "Ajustes",
      games_desc: "Aquí encontrarás mis juegos desarrollados.",
      server_desc: "¡Únete a nuestro servidor oficial de Discord!",
      about_desc: "Unas palabras sobre mí, mis metas y proyectos.",
      contact_desc: "¡Envíame un mensaje o búscame en redes sociales!",
      media_desc: "Galería de los últimos videos y capturas de pantalla.",
      merch_desc: "¡Echa un vistazo a la mercancía oficial!",
      lang_label: "Seleccionar idioma:"
    }
  };

  const langSelect = document.getElementById('lang-select');

  function updateLanguage(lang) {
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    localStorage.setItem('language', lang);
  }

  if (langSelect) {
    langSelect.value = savedLanguage;
    updateLanguage(savedLanguage);

    langSelect.addEventListener('change', (e) => {
      updateLanguage(e.target.value);
    });
  }

});