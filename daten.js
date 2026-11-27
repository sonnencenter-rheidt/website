/* ============================================================
   SONNENCENTER RHEIDT – Website-Daten
   Diese Datei pflegt Claude. Alles mit "von/bis" erscheint
   und verschwindet automatisch am richtigen Tag.
   Öffnungszeiten werden regelmäßig mit dem Google-Profil abgeglichen.
   ============================================================ */
window.STUDIO = {
  stand: "2026-11-26",

  /* Reguläre Öffnungszeiten (0 = Sonntag … 6 = Samstag) – Quelle: Google-Profil */
  zeiten: {
    1: ["10:00", "19:00"], 2: ["10:00", "19:00"], 3: ["10:00", "19:00"],
    4: ["10:00", "19:00"], 5: ["10:00", "19:00"], 6: ["10:00", "18:00"],
    0: ["10:00", "15:00"]
  },

  /* Besondere Tage – Quelle: Google-Profil („Spezielle Öffnungszeiten“) */
  sondertage: [
    { datum: "2026-12-24", name: "Heiligabend", zeit: ["10:00", "15:00"] },
    { datum: "2026-12-25", name: "1. Weihnachtstag", zeit: null },
    { datum: "2026-12-26", name: "2. Weihnachtstag", zeit: null },
    { datum: "2026-12-31", name: "Silvester", zeit: ["10:00", "15:00"] },
    { datum: "2027-01-01", name: "Neujahr", zeit: null }
  ],

  /* Laufschrift oben – erscheint nur im Zeitraum von/bis */
  laufschrift: [
    { von: "2026-11-26", bis: "2026-12-24", text: "Weihnachtsgeschenk gesucht? Gutscheine für Sonne, Nägel und Fußpflege – bei uns im Studio" },
    { von: "2026-12-04", bis: "2026-12-24", text: "Christmas Suncard: 11 € Sonne geschenkt – nur bis Heiligabend" },
    { von: "2026-12-07", bis: "2026-12-17", text: "Nägel vor den Feiertagen: letzte Termine bis Donnerstag, 17.12. – 02208 9337181" },
    { von: "2026-12-18", bis: "2027-01-01", text: "Feiertage: 24.12. und 31.12. 10–15 Uhr · 25.12., 26.12. und 01.01. geschlossen" },
    { von: "2026-12-10", bis: "2027-01-31", text: "Neu ab 02.01.2027: Pressotherapie – 30 Minuten Wohlfühlzeit für deine Beine" }
  ],

  /* Große Aktions-Kästen unter dem Startbild – erscheinen nur im Zeitraum von/bis.
     Preise nur bei freigegebenen Suncard-Aktionen. */
  aktionen: [
    { von: "2026-12-04", bis: "2026-12-24", kicker: "Nur bis Heiligabend", titel: "Christmas Suncard",
      text: "Lade deine Suncard auf und bekomm 11 € Sonne geschenkt – für dich selbst oder als Weihnachtsgeschenk. Gültig für alle Sonnenbänke, erhältlich direkt bei uns im Studio.",
      frist: "04.12. – 24.12.", bild: "img/aktion-christmas-suncard.jpg", bildtext: "Christmas Suncard im Sonnencenter Rheidt", knopf: "Fragen? Ruf uns an" }
  ],

  /* Wenn gerade keine Aktion läuft */
  laufschrift_standard: [
    "Sonnen ohne Termin – einfach vorbeikommen",
    "Parken direkt vor der Tür · Marktstraße 33",
    "Persönliche Beratung für Einsteiger",
    "Kaffee in unserer Lounge"
  ]
};
