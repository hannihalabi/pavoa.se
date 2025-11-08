## 8 november 2025 11:22

    1. Debuggrapport – text som “skriver över sig själv” vid ändringar i index.html

Symptom

Att manuellt ändra copy direkt i index.html (t.ex. Hemsida skapad för → Hemsida SKAPAD för i index.html (lines 70-74)) inte ger utslag i Live Server.
Reproduktion

Öppna index.html, ändra en textnod som har data-i18n-attribut (t.ex. hero.focusPrefix).
Spara filen och ladda sidan via Live Server.
Notera att sidan fortfarande visar den gamla formuleringen.
Observationer

De flesta texter har data-i18n="…" (se index.html (lines 56-107)).
Vid sidladdning körs applyLanguage(state.currentLanguage) (assets/script.js (lines 1301-1334)).
applyLanguage anropar applyStaticTranslations, som loopar över alla [data-i18n]-element och ersätter deras textinnehåll med värden från translations-objektet (assets/script.js (lines 1097-1113)).
Svenska översättningen för hero.focusPrefix ligger i translations.sv.hero.focusPrefix och är fortfarande Hemsida skapad för (assets/script.js (lines 29-34)).
Root cause

Översättningssystemet betraktar index.html som endast en “placeholder”. Vid varje inläsning skrivs originaltexten tillbaka från translations. Därför syns inga manuella ändringar i HTML-filen om man samtidigt behåller samma data-i18n-nyckel.
Åtgärdsförslag

Uppdatera texten i translations sv.hero.focusPrefix i assets/script.js för att ändra svenska versionen permanent.
Eller, om du hellre redigerar direkt i HTML, ta bort data-i18n på just den noden så lämnar JS den i fred (men den ingår då inte längre i språkväxlingen).