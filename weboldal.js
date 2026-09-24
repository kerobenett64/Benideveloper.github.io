/* =========================================================
   BENIDEVELOPER DASHBOARD
   weboldal.js
========================================================= */

"use strict";


/* =========================================================
   1. KONFIG
========================================================= */

const DISCORD_URL = "https://discord.gg/RTManUMTuT";

const THEME_KEY = "benideveloper-theme";
const LANGUAGE_KEY = "benideveloper-language";


/* =========================================================
   2. AZONNALI TÉMA
   Megakadályozza a betöltéskori villanást.
========================================================= */

const savedTheme =
  localStorage.getItem(THEME_KEY) ||
  (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

document.documentElement.setAttribute(
  "data-theme",
  savedTheme
);


/* =========================================================
   3. FORDÍTÁSOK
========================================================= */

const translations = {

  hu: {
    document_title: "Benideveloper",

    intro_title: "ÜDVÖZÖLLEK!!!",
    intro_subtitle: "Kattints a folytatáshoz",
    intro_button: "Belépés az oldalra",

    status_online: "Online",

    nav_home: "Főoldal",
    nav_games: "Játékaim",
    nav_server: "Szerver",
    nav_about: "Rólam",
    nav_contact: "Elérhetőségek",
    nav_media: "Képek és Videók",
    nav_merch: "Merch",
    nav_settings: "Beállítások",

    hero_badge: "Üdv a dashboardon",
    welcome_title: "Üdvözöllek!!!",

    welcome_description:
      "Fedezd fel a projektjeimet, játékaimat, médiáimat és csatlakozz a közösséghez.",

    join_discord: "Csatlakozás a Discordhoz",
    view_games: "Játékaim",

    coming_soon: "Hamarosan",
    community_ready: "Közösség",
    available_now: "Elérhető",

    section_overline: "DASHBOARD",

    games_desc:
      "Itt kapnak majd helyet a saját fejlesztésű játékaim, projektjeim és azok bemutatói.",

    project_1_title: "Első projekt",
    project_1_desc: "Hamarosan részletes bemutató.",

    project_2_title: "Következő játék",
    project_2_desc: "Fejlesztés alatt.",

    in_development: "Fejlesztés alatt",

    server_desc:
      "Csatlakozz a hivatalos Discord szerverhez, és legyél részese a közösségnek.",

    discord_join: "Belépés",

    about_desc:
      "Ide kerülhet majd a bemutatkozásom, a céljaim, az érdeklődési köreim és a projektjeim története.",

    about_quote:
      "Játékok, kreatív projektek, technológia és ötletek.",

    contact_desc:
      "Hamarosan itt lesznek elérhetők a különböző közösségi oldalaim és kapcsolatfelvételi lehetőségeim.",

    contact_label: "Kapcsolat",

    media_desc:
      "Ide kerülhet majd a galéria, videók, képek és projektbemutatók.",

    media_soon_title:
      "A galéria készül",

    merch_desc:
      "A hivatalos termékek, ruhák és egyéb tárgyak később itt lesznek elérhetők.",

    merch_soon_title:
      "A merch rész készül",

    language_title: "Nyelv",

    language_description:
      "Válaszd ki az oldal nyelvét.",

    settings_info:
      "A választott nyelv és téma automatikusan elmentődik ezen az eszközön."
  },


  en: {
    document_title: "Benideveloper",

    intro_title: "WELCOME!!!",
    intro_subtitle: "Click to continue",
    intro_button: "Enter website",

    status_online: "Online",

    nav_home: "Home",
    nav_games: "My Games",
    nav_server: "Server",
    nav_about: "About Me",
    nav_contact: "Contact",
    nav_media: "Media",
    nav_merch: "Merch",
    nav_settings: "Settings",

    hero_badge: "Welcome to the dashboard",
    welcome_title: "Welcome!!!",

    welcome_description:
      "Explore my projects, games, media and join the community.",

    join_discord: "Join Discord",
    view_games: "My Games",

    coming_soon: "Coming soon",
    community_ready: "Community",
    available_now: "Available",

    section_overline: "DASHBOARD",

    games_desc:
      "This section will contain my own games, projects and their showcases.",

    project_1_title: "First project",
    project_1_desc: "Detailed showcase coming soon.",

    project_2_title: "Next game",
    project_2_desc: "Currently in development.",

    in_development: "In development",

    server_desc:
      "Join the official Discord server and become part of the community.",

    discord_join: "Join",

    about_desc:
      "This section will contain information about me, my goals, interests and projects.",

    about_quote:
      "Games, creative projects, technology and ideas.",

    contact_desc:
      "My social platforms and contact options will be available here soon.",

    contact_label: "Contact",

    media_desc:
      "A gallery for videos, screenshots and project showcases will be added here.",

    media_soon_title:
      "Gallery coming soon",

    merch_desc:
      "Official products, clothing and other items will be available here later.",

    merch_soon_title:
      "Merch section coming soon",

    language_title: "Language",

    language_description:
      "Choose the language of the website.",

    settings_info:
      "Your selected language and theme are automatically saved on this device."
  },


  de: {
    document_title: "Benideveloper",

    intro_title: "WILLKOMMEN!!!",
    intro_subtitle: "Klicke zum Fortfahren",
    intro_button: "Website betreten",

    status_online: "Online",

    nav_home: "Startseite",
    nav_games: "Meine Spiele",
    nav_server: "Server",
    nav_about: "Über mich",
    nav_contact: "Kontakt",
    nav_media: "Medien",
    nav_merch: "Merch",
    nav_settings: "Einstellungen",

    hero_badge: "Willkommen im Dashboard",
    welcome_title: "Willkommen!!!",

    welcome_description:
      "Entdecke meine Projekte, Spiele und Medien und werde Teil der Community.",

    join_discord: "Discord beitreten",
    view_games: "Meine Spiele",

    coming_soon: "Demnächst",
    community_ready: "Community",
    available_now: "Verfügbar",

    section_overline: "DASHBOARD",

    games_desc:
      "Hier werden meine eigenen Spiele, Projekte und Präsentationen erscheinen.",

    project_1_title: "Erstes Projekt",
    project_1_desc: "Detaillierte Präsentation folgt.",

    project_2_title: "Nächstes Spiel",
    project_2_desc: "In Entwicklung.",

    in_development: "In Entwicklung",

    server_desc:
      "Tritt dem offiziellen Discord-Server bei und werde Teil der Community.",

    discord_join: "Beitreten",

    about_desc:
      "Hier erscheinen Informationen über mich, meine Ziele, Interessen und Projekte.",

    about_quote:
      "Spiele, kreative Projekte, Technologie und Ideen.",

    contact_desc:
      "Meine Social-Media-Kanäle und Kontaktmöglichkeiten werden hier später verfügbar sein.",

    contact_label: "Kontakt",

    media_desc:
      "Eine Galerie für Videos, Bilder und Projektpräsentationen wird hier ergänzt.",

    media_soon_title:
      "Galerie kommt bald",

    merch_desc:
      "Offizielle Produkte, Kleidung und weitere Artikel werden später hier verfügbar sein.",

    merch_soon_title:
      "Merch-Bereich kommt bald",

    language_title: "Sprache",

    language_description:
      "Wähle die Sprache der Website.",

    settings_info:
      "Die gewählte Sprache und das Thema werden automatisch auf diesem Gerät gespeichert."
  },


  es: {
    document_title: "Benideveloper",

    intro_title: "¡¡¡BIENVENIDO!!!",
    intro_subtitle: "Haz clic para continuar",
    intro_button: "Entrar al sitio",

    status_online: "En línea",

    nav_home: "Inicio",
    nav_games: "Mis Juegos",
    nav_server: "Servidor",
    nav_about: "Sobre mí",
    nav_contact: "Contacto",
    nav_media: "Galería",
    nav_merch: "Merch",
    nav_settings: "Ajustes",

    hero_badge: "Bienvenido al dashboard",
    welcome_title: "¡¡¡Bienvenido!!!",

    welcome_description:
      "Descubre mis proyectos, juegos y contenido multimedia y únete a la comunidad.",

    join_discord: "Unirse a Discord",
    view_games: "Mis Juegos",

    coming_soon: "Próximamente",
    community_ready: "Comunidad",
    available_now: "Disponible",

    section_overline: "DASHBOARD",

    games_desc:
      "Aquí estarán mis juegos, proyectos y sus presentaciones.",

    project_1_title: "Primer proyecto",
    project_1_desc: "Presentación detallada próximamente.",

    project_2_title: "Próximo juego",
    project_2_desc: "En desarrollo.",

    in_development: "En desarrollo",

    server_desc:
      "Únete al servidor oficial de Discord y forma parte de la comunidad.",

    discord_join: "Entrar",

    about_desc:
      "Aquí aparecerá información sobre mí, mis objetivos, intereses y proyectos.",

    about_quote:
      "Juegos, proyectos creativos, tecnología e ideas.",

    contact_desc:
      "Mis redes sociales y opciones de contacto estarán disponibles aquí próximamente.",

    contact_label: "Contacto",

    media_desc:
      "Aquí se añadirá una galería de vídeos, imágenes y proyectos.",

    media_soon_title:
      "Galería próximamente",

    merch_desc:
      "Los productos oficiales, ropa y otros artículos estarán disponibles aquí más adelante.",

    merch_soon_title:
      "Sección de merch próximamente",

    language_title: "Idioma",

    language_description:
      "Selecciona el idioma del sitio web.",

    settings_info:
      "El idioma y el tema seleccionados se guardan automáticamente en este dispositivo."
  }
};


/* =========================================================
   4. DOM
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const introScreen =
    document.getElementById("intro-screen");

  const introBtn =
    document.getElementById("intro-btn");

  const themeToggle =
    document.getElementById("theme-toggle");

  const themeIcon =
    document.getElementById("theme-icon");

  const menuToggle =
    document.getElementById("menu-toggle");

  const sidebar =
    document.getElementById("sidebar");

  const overlay =
    document.getElementById("overlay");

  const homeBrand =
    document.getElementById("home-brand");

  const heroGamesBtn =
    document.getElementById("hero-games-btn");

  const navLinks =
    document.querySelectorAll(".nav-link");

  const pageSections =
    document.querySelectorAll(".page-section");

  const languagePicker =
    document.getElementById("language-picker");

  const languageButton =
    document.getElementById("language-button");

  const languageMenu =
    document.getElementById("language-menu");

  const languageFlag =
    document.getElementById("language-flag");

  const languageName =
    document.getElementById("language-name");

  const languageOptions =
    document.querySelectorAll(".language-option");


  /* =======================================================
     5. INTRO
  ======================================================== */

  function closeIntro() {
    if (!introScreen) {
      return;
    }

    introScreen.classList.add("fade-out");

    window.setTimeout(() => {
      introScreen.remove();
    }, 900);
  }

  if (introBtn) {
    introBtn.addEventListener(
      "click",
      closeIntro,
      { passive: true }
    );
  }


  /* =======================================================
     6. TÉMA
  ======================================================== */

  function applyTheme(theme) {

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      THEME_KEY,
      theme
    );

    if (!themeIcon || !themeToggle) {
      return;
    }

    if (theme === "dark") {

      themeIcon.className =
        "fa-solid fa-sun";

      themeToggle.setAttribute(
        "aria-label",
        "Világos mód"
      );

      themeToggle.setAttribute(
        "title",
        "Világos mód"
      );

    } else {

      themeIcon.className =
        "fa-solid fa-moon";

      themeToggle.setAttribute(
        "aria-label",
        "Sötét mód"
      );

      themeToggle.setAttribute(
        "title",
        "Sötét mód"
      );
    }
  }


  applyTheme(
    localStorage.getItem(THEME_KEY) || "light"
  );


  if (themeToggle) {

    themeToggle.addEventListener("click", () => {

      const currentTheme =
        document.documentElement.getAttribute(
          "data-theme"
        );

      const nextTheme =
        currentTheme === "dark"
          ? "light"
          : "dark";

      applyTheme(nextTheme);

    });
  }


  /* =======================================================
     7. SIDEBAR
  ======================================================== */

  function openMenu() {

    sidebar?.classList.add("open");
    overlay?.classList.add("active");
    menuToggle?.classList.add("active");

    menuToggle?.setAttribute(
      "aria-expanded",
      "true"
    );

    document.body.classList.add(
      "menu-open"
    );
  }


  function closeMenu() {

    sidebar?.classList.remove("open");
    overlay?.classList.remove("active");
    menuToggle?.classList.remove("active");

    menuToggle?.setAttribute(
      "aria-expanded",
      "false"
    );

    document.body.classList.remove(
      "menu-open"
    );
  }


  function toggleMenu() {

    if (sidebar?.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }

  }


  menuToggle?.addEventListener(
    "click",
    toggleMenu
  );

  overlay?.addEventListener(
    "click",
    closeMenu
  );


  /* =======================================================
     8. NAVIGÁCIÓ
  ======================================================== */

  function getSectionFromHash() {

    const hash =
      window.location.hash.replace("#", "").trim();

    return hash || "home";
  }


  function showSection(sectionId) {

    const target =
      document.getElementById(sectionId);

    const targetId =
      target
        ? sectionId
        : "home";


    navLinks.forEach((link) => {

      const isActive =
        link.dataset.section === targetId;

      link.classList.toggle(
        "active",
        isActive
      );

    });


    pageSections.forEach((section) => {

      const isActive =
        section.id === targetId;

      section.classList.toggle(
        "active",
        isActive
      );

    });


    if (targetId === "home") {
      document.title =
        translations[
          localStorage.getItem(LANGUAGE_KEY) || "hu"
        ].document_title;
    }


    closeMenu();
    closeLanguagePicker();
  }


  function navigateTo(sectionId) {

    const safeId =
      document.getElementById(sectionId)
        ? sectionId
        : "home";

    history.pushState(
      null,
      "",
      `#${safeId}`
    );

    showSection(safeId);

  }


  navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      event.preventDefault();

      navigateTo(
        link.dataset.section || "home"
      );

    });

  });


  homeBrand?.addEventListener(
    "click",
    () => {
      navigateTo("home");
    }
  );


  heroGamesBtn?.addEventListener(
    "click",
    () => {
      navigateTo("games");
    }
  );


  window.addEventListener(
    "popstate",
    () => {
      showSection(
        getSectionFromHash()
      );
    }
  );


  /* =======================================================
     9. NYELVVÁLASZTÓ
  ======================================================== */

  const languages = {
    hu: {
      name: "Magyar",
      flag: "🇭🇺"
    },

    en: {
      name: "English",
      flag: "🇬🇧"
    },

    de: {
      name: "Deutsch",
      flag: "🇩🇪"
    },

    es: {
      name: "Español",
      flag: "🇪🇸"
    }
  };


  function openLanguagePicker() {

    languagePicker?.classList.add(
      "open"
    );

    languageButton?.setAttribute(
      "aria-expanded",
      "true"
    );
  }


  function closeLanguagePicker() {

    languagePicker?.classList.remove(
      "open"
    );

    languageButton?.setAttribute(
      "aria-expanded",
      "false"
    );
  }


  function toggleLanguagePicker() {

    if (
      languagePicker?.classList.contains(
        "open"
      )
    ) {
      closeLanguagePicker();
    } else {
      openLanguagePicker();
    }

  }


  function updateLanguage(lang) {

    if (!translations[lang]) {
      lang = "hu";
    }


    document.documentElement.lang = lang;


    const currentTranslations =
      translations[lang];


    document.querySelectorAll(
      "[data-i18n]"
    ).forEach((element) => {

      const key =
        element.getAttribute(
          "data-i18n"
        );

      if (
        currentTranslations[key] !== undefined
      ) {
        element.textContent =
          currentTranslations[key];
      }

    });


    const langInfo =
      languages[lang];


    if (langFlag && langInfo) {
      langFlag.textContent =
        langInfo.flag;
    }


    if (languageName && langInfo) {
      languageName.textContent =
        langInfo.name;
    }


    languageOptions.forEach(
      (option) => {

        const active =
          option.dataset.language === lang;

        option.classList.toggle(
          "active",
          active
        );

        option.setAttribute(
          "aria-selected",
          active ? "true" : "false"
        );
      }
    );


    localStorage.setItem(
      LANGUAGE_KEY,
      lang
    );


    document.title =
      currentTranslations.document_title;


    closeLanguagePicker();
  }


  const initialLanguage =
    localStorage.getItem(
      LANGUAGE_KEY
    ) || "hu";


  updateLanguage(
    translations[initialLanguage]
      ? initialLanguage
      : "hu"
  );


  languageButton?.addEventListener(
    "click",
    toggleLanguagePicker
  );


  languageOptions.forEach(
    (option) => {

      option.addEventListener(
        "click",
        () => {

          updateLanguage(
            option.dataset.language
          );

        }
      );

    }
  );


  document.addEventListener(
    "click",
    (event) => {

      if (
        languagePicker &&
        !languagePicker.contains(
          event.target
        )
      ) {
        closeLanguagePicker();
      }

    }
  );


  /* =======================================================
     10. BILLENTYŰZET
  ======================================================== */

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {
        closeMenu();
        closeLanguagePicker();
      }

    }
  );


  /* =======================================================
     11. TOUCH / PRESS EFFECT
     Telefonon ne ragadjon be a hover.
  ======================================================== */

  const pressableElements =
    document.querySelectorAll(
      ".pressable"
    );


  pressableElements.forEach(
    (element) => {

      let pressTimeout = null;

      element.addEventListener(
        "pointerdown",
        () => {

          if (pressTimeout) {
            clearTimeout(
              pressTimeout
            );
          }

          element.classList.add(
            "touch-hover"
          );

          pressTimeout =
            window.setTimeout(
              () => {

                element.classList.remove(
                  "touch-hover"
                );

              },
              180
            );

        },
        {
          passive: true
        }
      );


      const removePress =
        () => {

          element.classList.remove(
            "touch-hover"
          );

        };


      element.addEventListener(
        "pointerup",
        removePress,
        {
          passive: true
        }
      );

      element.addEventListener(
        "pointercancel",
        removePress,
        {
          passive: true
        }
      );

      element.addEventListener(
        "pointerleave",
        removePress,
        {
          passive: true
        }
      );

    }
  );


  /* =======================================================
     12. DISCORD LINK
     Minden Discord kártyát ugyanoda kötünk.
  ======================================================== */

  document
    .querySelectorAll(
      '[data-discord-link="true"]'
    )
    .forEach((element) => {

      element.setAttribute(
        "href",
        DISCORD_URL
      );

    });


  /* =======================================================
     13. KEZDŐ SECTION
  ======================================================== */

  showSection(
    getSectionFromHash()
  );

});
