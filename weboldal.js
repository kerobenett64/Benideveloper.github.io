/* =========================================================
   BENIDEVELOPER
   weboldal.js
========================================================= */

"use strict";


/* =========================================================
   1. KONFIG
========================================================= */

const DISCORD_URL =
  "https://discord.gg/RTManUMTuT";

const THEME_KEY =
  "benideveloper-theme";

const LANGUAGE_KEY =
  "benideveloper-language";


/* =========================================================
   2. AZONNALI TÉMA
   Betöltés előtti sötét/világos mód.
========================================================= */

const preferredDark =
  window.matchMedia &&
  window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

const savedTheme =
  localStorage.getItem(THEME_KEY) ||
  (preferredDark ? "dark" : "light");

document.documentElement.setAttribute(
  "data-theme",
  savedTheme
);


/* =========================================================
   3. FORDÍTÁSOK
========================================================= */

const translations = {

  /* =======================================================
     MAGYAR
  ======================================================== */

  hu: {

    document_title:
      "Benideveloper",

    intro_title:
      "ÜDVÖZÖLLEK!!!",

    intro_subtitle:
      "Kattints a folytatáshoz",

    intro_button:
      "Belépés az oldalra",

    status_online:
      "Online",

    nav_home:
      "Főoldal",

    nav_games:
      "Játékaim",

    nav_server:
      "Szerver",

    nav_about:
      "Rólam",

    nav_contact:
      "Elérhetőségek",

    nav_media:
      "Képek és Videók",

    nav_merch:
      "Merch",

    nav_settings:
      "Beállítások",

    hero_badge:
      "Üdv a dashboardon",

    welcome_title:
      "Üdvözöllek!!!",

    welcome_description:
      "Fedezd fel a projektjeimet, játékaimat, médiáimat és az oldalon található újdonságokat.",

    news_overline:
      "LATEST",

    news_title:
      "Újdonságok",

    news_new:
      "ÚJ",

    news_status:
      "FOLYAMATBAN",

    news_coming:
      "HAMAROSAN",

    news_1_title:
      "Megújult weboldal",

    news_1_desc:
      "A Benideveloper oldal új, modernebb és mobilbarátabb felületet kapott.",

    news_2_title:
      "Új projektek",

    news_2_desc:
      "Új játékok és kreatív projektek készülnek.",

    news_3_title:
      "Új tartalmak",

    news_3_desc:
      "Képek, videók és további tartalmak fokozatosan kerülnek fel az oldalra.",

    in_progress:
      "Készítés folyamatban.",

    available_now:
      "Elérhető",

    games_desc:
      "A játékok és projektek bemutatója később lesz elérhető.",

    server_desc:
      "Csatlakozz a hivatalos Discord szerverhez, és legyél részese a közösségnek.",

    discord_join:
      "Belépés",

    about_desc:
      "A bemutatkozás és további információk később lesznek elérhetők.",

    contact_desc:
      "Itt találod majd a különböző kapcsolatfelvételi lehetőségeket.",

    media_desc:
      "Képek, videók és projektbemutatók helye.",

    youtube_title:
      "YouTube csatorna",

    youtube_desc:
      "A csatorna és a videós tartalmak készítés alatt állnak.",

    media_soon_title:
      "A galéria készítés alatt áll.",

    merch_desc:
      "A hivatalos termékek és egyéb tárgyak később lesznek elérhetők.",

    language_title:
      "Nyelv",

    language_description:
      "Válaszd ki az oldal nyelvét.",

    settings_info:
      "A választott nyelv és téma automatikusan elmentődik ezen az eszközön."

  },


  /* =======================================================
     ENGLISH
  ======================================================== */

  en: {

    document_title:
      "Benideveloper",

    intro_title:
      "WELCOME!!!",

    intro_subtitle:
      "Click to continue",

    intro_button:
      "Enter website",

    status_online:
      "Online",

    nav_home:
      "Home",

    nav_games:
      "My Games",

    nav_server:
      "Server",

    nav_about:
      "About Me",

    nav_contact:
      "Contact",

    nav_media:
      "Media",

    nav_merch:
      "Merch",

    nav_settings:
      "Settings",

    hero_badge:
      "Welcome to the dashboard",

    welcome_title:
      "Welcome!!!",

    welcome_description:
      "Explore my projects, games, media and the latest updates on the website.",

    news_overline:
      "LATEST",

    news_title:
      "Latest Updates",

    news_new:
      "NEW",

    news_status:
      "IN PROGRESS",

    news_coming:
      "COMING SOON",

    news_1_title:
      "Website redesigned",

    news_1_desc:
      "The Benideveloper website has received a newer, cleaner and more mobile-friendly interface.",

    news_2_title:
      "New projects",

    news_2_desc:
      "New games and creative projects are currently being created.",

    news_3_title:
      "New content",

    news_3_desc:
      "Images, videos and additional content will gradually be added.",

    in_progress:
      "In progress.",

    available_now:
      "Available",

    games_desc:
      "The games and project showcases will be available later.",

    server_desc:
      "Join the official Discord server and become part of the community.",

    discord_join:
      "Join",

    about_desc:
      "My introduction and additional information will be available later.",

    contact_desc:
      "Different contact and communication options will be available here.",

    media_desc:
      "A place for images, videos and project showcases.",

    youtube_title:
      "YouTube channel",

    youtube_desc:
      "The channel and video content are currently being created.",

    media_soon_title:
      "Gallery is in progress.",

    merch_desc:
      "Official products and other items will be available later.",

    language_title:
      "Language",

    language_description:
      "Choose the language of the website.",

    settings_info:
      "Your selected language and theme are automatically saved on this device."

  },


  /* =======================================================
     DEUTSCH
  ======================================================== */

  de: {

    document_title:
      "Benideveloper",

    intro_title:
      "WILLKOMMEN!!!",

    intro_subtitle:
      "Klicke zum Fortfahren",

    intro_button:
      "Website betreten",

    status_online:
      "Online",

    nav_home:
      "Startseite",

    nav_games:
      "Meine Spiele",

    nav_server:
      "Server",

    nav_about:
      "Über mich",

    nav_contact:
      "Kontakt",

    nav_media:
      "Medien",

    nav_merch:
      "Merch",

    nav_settings:
      "Einstellungen",

    hero_badge:
      "Willkommen im Dashboard",

    welcome_title:
      "Willkommen!!!",

    welcome_description:
      "Entdecke meine Projekte, Spiele, Medien und die neuesten Updates der Website.",

    news_overline:
      "LATEST",

    news_title:
      "Neuigkeiten",

    news_new:
      "NEU",

    news_status:
      "IN ARBEIT",

    news_coming:
      "DEMNÄCHST",

    news_1_title:
      "Website überarbeitet",

    news_1_desc:
      "Die Benideveloper-Website wurde moderner und mobilfreundlicher gestaltet.",

    news_2_title:
      "Neue Projekte",

    news_2_desc:
      "Neue Spiele und kreative Projekte werden aktuell entwickelt.",

    news_3_title:
      "Neue Inhalte",

    news_3_desc:
      "Bilder, Videos und weitere Inhalte werden nach und nach hinzugefügt.",

    in_progress:
      "In Arbeit.",

    available_now:
      "Verfügbar",

    games_desc:
      "Die Spiele und Projektpräsentationen werden später verfügbar sein.",

    server_desc:
      "Tritt dem offiziellen Discord-Server bei und werde Teil der Community.",

    discord_join:
      "Beitreten",

    about_desc:
      "Meine Vorstellung und weitere Informationen werden später verfügbar sein.",

    contact_desc:
      "Hier werden später verschiedene Kontaktmöglichkeiten verfügbar sein.",

    media_desc:
      "Ein Bereich für Bilder, Videos und Projektpräsentationen.",

    youtube_title:
      "YouTube-Kanal",

    youtube_desc:
      "Der Kanal und die Videoinhalte werden derzeit erstellt.",

    media_soon_title:
      "Die Galerie ist in Arbeit.",

    merch_desc:
      "Offizielle Produkte und weitere Artikel werden später verfügbar sein.",

    language_title:
      "Sprache",

    language_description:
      "Wähle die Sprache der Website.",

    settings_info:
      "Die gewählte Sprache und das Thema werden automatisch auf diesem Gerät gespeichert."

  },


  /* =======================================================
     ESPAÑOL
  ======================================================== */

  es: {

    document_title:
      "Benideveloper",

    intro_title:
      "¡¡¡BIENVENIDO!!!",

    intro_subtitle:
      "Haz clic para continuar",

    intro_button:
      "Entrar al sitio",

    status_online:
      "En línea",

    nav_home:
      "Inicio",

    nav_games:
      "Mis Juegos",

    nav_server:
      "Servidor",

    nav_about:
      "Sobre mí",

    nav_contact:
      "Contacto",

    nav_media:
      "Galería",

    nav_merch:
      "Merch",

    nav_settings:
      "Ajustes",

    hero_badge:
      "Bienvenido al dashboard",

    welcome_title:
      "¡¡¡Bienvenido!!!",

    welcome_description:
      "Descubre mis proyectos, juegos, contenido multimedia y las novedades del sitio.",

    news_overline:
      "LATEST",

    news_title:
      "Novedades",

    news_new:
      "NUEVO",

    news_status:
      "EN PROCESO",

    news_coming:
      "PRÓXIMAMENTE",

    news_1_title:
      "Sitio web renovado",

    news_1_desc:
      "La web de Benideveloper ahora tiene una interfaz más moderna y adaptada a móviles.",

    news_2_title:
      "Nuevos proyectos",

    news_2_desc:
      "Se están creando nuevos juegos y proyectos creativos.",

    news_3_title:
      "Nuevo contenido",

    news_3_desc:
      "Las imágenes, vídeos y otros contenidos se añadirán poco a poco.",

    in_progress:
      "En proceso.",

    available_now:
      "Disponible",

    games_desc:
      "Los juegos y las presentaciones de proyectos estarán disponibles más adelante.",

    server_desc:
      "Únete al servidor oficial de Discord y forma parte de la comunidad.",

    discord_join:
      "Entrar",

    about_desc:
      "La presentación y la información adicional estarán disponibles más adelante.",

    contact_desc:
      "Aquí estarán disponibles las diferentes opciones de contacto.",

    media_desc:
      "Un espacio para imágenes, vídeos y presentaciones de proyectos.",

    youtube_title:
      "Canal de YouTube",

    youtube_desc:
      "El canal y el contenido de vídeo están actualmente en preparación.",

    media_soon_title:
      "La galería está en proceso.",

    merch_desc:
      "Los productos oficiales y otros artículos estarán disponibles más adelante.",

    language_title:
      "Idioma",

    language_description:
      "Selecciona el idioma del sitio web.",

    settings_info:
      "El idioma y el tema seleccionados se guardan automáticamente en este dispositivo."

  }

};


/* =========================================================
   4. DOM
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const introScreen =
      document.getElementById(
        "intro-screen"
      );

    const introBtn =
      document.getElementById(
        "intro-btn"
      );

    const themeToggle =
      document.getElementById(
        "theme-toggle"
      );

    const themeIcon =
      document.getElementById(
        "theme-icon"
      );

    const menuToggle =
      document.getElementById(
        "menu-toggle"
      );

    const sidebar =
      document.getElementById(
        "sidebar"
      );

    const overlay =
      document.getElementById(
        "overlay"
      );

    const homeBrand =
      document.getElementById(
        "home-brand"
      );

    const navLinks =
      document.querySelectorAll(
        ".nav-link"
      );

    const pageSections =
      document.querySelectorAll(
        ".page-section"
      );

    const languagePicker =
      document.getElementById(
        "language-picker"
      );

    const languageButton =
      document.getElementById(
        "language-button"
      );

    const languageFlag =
      document.getElementById(
        "language-flag"
      );

    const languageName =
      document.getElementById(
        "language-name"
      );

    const languageOptions =
      document.querySelectorAll(
        ".language-option"
      );


    /* =======================================================
       5. INTRO
    ======================================================== */

    function closeIntro() {

      if (!introScreen) {
        return;
      }

      introScreen.classList.add(
        "fade-out"
      );

      window.setTimeout(
        () => {
          introScreen.remove();
        },
        850
      );

    }


    introBtn?.addEventListener(
      "click",
      closeIntro
    );


    /* =======================================================
       6. TÉMA
    ======================================================== */

    function applyTheme(theme) {

      const safeTheme =
        theme === "dark"
          ? "dark"
          : "light";

      document.documentElement.setAttribute(
        "data-theme",
        safeTheme
      );

      localStorage.setItem(
        THEME_KEY,
        safeTheme
      );


      if (!themeIcon || !themeToggle) {
        return;
      }


      if (safeTheme === "dark") {

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
      localStorage.getItem(
        THEME_KEY
      ) || savedTheme
    );


    themeToggle?.addEventListener(
      "click",
      () => {

        const currentTheme =
          document.documentElement.getAttribute(
            "data-theme"
          );

        const nextTheme =
          currentTheme === "dark"
            ? "light"
            : "dark";

        applyTheme(nextTheme);

      }
    );


    /* =======================================================
       7. SIDEBAR
    ======================================================== */

    function openMenu() {

      sidebar?.classList.add(
        "open"
      );

      overlay?.classList.add(
        "active"
      );

      menuToggle?.classList.add(
        "active"
      );

      menuToggle?.setAttribute(
        "aria-expanded",
        "true"
      );

      overlay?.setAttribute(
        "aria-hidden",
        "false"
      );

      document.body.classList.add(
        "menu-open"
      );

    }


    function closeMenu() {

      sidebar?.classList.remove(
        "open"
      );

      overlay?.classList.remove(
        "active"
      );

      menuToggle?.classList.remove(
        "active"
      );

      menuToggle?.setAttribute(
        "aria-expanded",
        "false"
      );

      overlay?.setAttribute(
        "aria-hidden",
        "true"
      );

      document.body.classList.remove(
        "menu-open"
      );

    }


    function toggleMenu() {

      if (
        sidebar?.classList.contains(
          "open"
        )
      ) {

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
        window.location.hash
          .replace("#", "")
          .trim();

      return hash || "home";

    }


    function showSection(sectionId) {

      const target =
        document.getElementById(
          sectionId
        );

      const targetId =
        target
          ? sectionId
          : "home";


      navLinks.forEach(
        (link) => {

          const active =
            link.dataset.section ===
            targetId;

          link.classList.toggle(
            "active",
            active
          );

        }
      );


      pageSections.forEach(
        (section) => {

          const active =
            section.id ===
            targetId;

          section.classList.toggle(
            "active",
            active
          );

        }
      );


      const currentLanguage =
        localStorage.getItem(
          LANGUAGE_KEY
        ) || "hu";


      document.title =
        translations[currentLanguage]
          ?.document_title ||
        "Benideveloper";


      closeMenu();
      closeLanguagePicker();


      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }


    function navigateTo(sectionId) {

      const safeId =
        document.getElementById(
          sectionId
        )
          ? sectionId
          : "home";


      history.pushState(
        null,
        "",
        `#${safeId}`
      );


      showSection(safeId);

    }


    navLinks.forEach(
      (link) => {

        link.addEventListener(
          "click",
          (event) => {

            event.preventDefault();

            navigateTo(
              link.dataset.section ||
              "home"
            );

          }
        );

      }
    );


    homeBrand?.addEventListener(
      "click",
      () => {
        navigateTo("home");
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


    window.addEventListener(
      "hashchange",
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

      const safeLanguage =
        translations[lang]
          ? lang
          : "hu";


      const currentTranslations =
        translations[safeLanguage];


      document.documentElement.lang =
        safeLanguage;


      document.querySelectorAll(
        "[data-i18n]"
      ).forEach(
        (element) => {

          const key =
            element.getAttribute(
              "data-i18n"
            );


          if (
            currentTranslations[key] !==
            undefined
          ) {

            element.textContent =
              currentTranslations[key];

          }

        }
      );


      const langInfo =
        languages[safeLanguage];


      if (languageFlag && langInfo) {

        languageFlag.textContent =
          langInfo.flag;

      }


      if (languageName && langInfo) {

        languageName.textContent =
          langInfo.name;

      }


      languageOptions.forEach(
        (option) => {

          const active =
            option.dataset.language ===
            safeLanguage;


          option.classList.toggle(
            "active",
            active
          );


          option.setAttribute(
            "aria-selected",
            active
              ? "true"
              : "false"
          );

        }
      );


      localStorage.setItem(
        LANGUAGE_KEY,
        safeLanguage
      );


      document.title =
        currentTranslations
          .document_title;


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

        if (
          event.key === "Escape"
        ) {

          closeMenu();
          closeLanguagePicker();

        }

      }
    );


    /* =======================================================
       11. TOUCH PRESS EFFECT
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

              window.clearTimeout(
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
    ======================================================== */

    document
      .querySelectorAll(
        '[data-discord-link="true"]'
      )
      .forEach(
        (element) => {

          element.setAttribute(
            "href",
            DISCORD_URL
          );

        }
      );


    /* =======================================================
       13. KEZDŐ OLDAL
    ======================================================== */

    showSection(
      getSectionFromHash()
    );

  }
);
