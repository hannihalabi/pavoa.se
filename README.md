# Pavoa.se – strukturöversikt

Detta repo innehåller en statisk marknadsföringssajt för GM NORDICS (tidigare Pavoa). Koden består av ett enda HTML-dokument kompletterat med gemensam CSS och JS samt ett antal Lottie-demofiler.

## Filstruktur

```
.
├── CNAME                # Domänkonfiguration för GitHub Pages
├── index.html           # Hela sidans markup
└── assets
    ├── styles.css       # Global layout, typografi och responsiva regler
    ├── script.js        # Navigation, textrotationer och PageSpeed-integration
    ├── logo.svg         # Ursprunglig logotyp (ej längre använd men kvar som resurs)
    └── Lotti/           # Fristående prototyper av olika Lottie-animationer
```

## index.html

Allt innehåll ligger i en `<main>` med sektioner i logisk ordning:

1. **Hero** med textrotation, CTA-knappar och Lottie-animation.
2. **PageSpeed-analys** – formulär som skickar URL till Google PageSpeed API och visar resultatkort.
3. **Tjänster** – tre servicekort och en roterande ingress.
4. **Process** – numrerad lista över tre steg.
5. **Prispaket** – tre kort, varav ett markerat som “Mest populär”.
6. **Boka möte** – Google Calendar iframe och extern länk.
7. **Testimonials** – tre citat som animeras via CSS.
8. **Kontakt** – formulär med namn/e-post m.m. samt kontaktuppgifter.
9. **Footer** – textlogotyp, upphovstext och länkar.

Headern innehåller en sticky navbar med textlogotypen “GM NORDICS”, menyknappar och en hamburgerknapp för mobilt läge.

## assets/styles.css

Alla stilar är samlade här med följande struktur:

- **Root-variabler** för färger, radier och skuggor.
- **Globala elementregler** (`body`, `a`, `.section`, etc.).
- **Komponentklasser** för hero, knappar, cards, listor m.m.
- **Animationsregler** för CTA-glow, testimonials och roterande texter.
- **Responsiva breakpoints** vid 920 px, 600 px och 420 px som justerar navigation, språkväxlaren, hero-layouten och knapparna (t.ex. horisontella CTA:er som tvångshålls på en rad och får mindre textstorlek i mobil).
- **Tillgänglighetsstöd** för `prefers-reduced-motion`, `.sr-only` och fokusstilar.

## assets/script.js

JavaScriptet laddas defererat och hanterar sex huvudområden:

1. **Navigation** – öppna/stäng mobilmenyn, uppdatera `aria-expanded` och stäng vid länk-klick eller Escape.
2. **Språk & valutor** – språkknappen hämtar texter från `translations`-objektet, uppdaterar `data-i18n`-element, byter `lang`-attributet och säkerställer att svenska sidan visar SEK medan övriga språk visar EUR-priser.
3. **Synkade hero-texter** – samma intervall styr både fokusorden (t.ex. Kreativitet/Lönsamhet/Leads) och respektive hero-copy så de alltid byter samtidigt och respekterar `prefers-reduced-motion`.
4. **Övriga roterande texter** – återanvända instanser håller sektionerna lika höga och stoppar animationer vid behov.
5. **PageSpeed-formuläret** – validerar URL, visar ett progress-steg, anropar Google PageSpeed API (`PAGESPEED_API_KEY`), tolkar svar, bygger metriklistan och skriver en sammanfattning eller felmeddelande på aktuellt språk.
6. **Footerår** – uppdaterar årtal i footern automatiskt.

## Språk & valutahantering

- Fyra språk stöds: svenska (`sv`), engelska (`en`), spanska (`es`) och italienska (`it`). Alla texter och prissträngar ligger i `translations`-objektet i `assets/script.js`.
- Varje översatt element använder `data-i18n="nyckel.väg"` och valfritt `data-i18n-attr` för attribut (t.ex. `placeholder` eller `html`). JavaScriptet uppdaterar dessa noder när språket byts.
- Språkvalet sparas i `localStorage`, `document.documentElement.lang` uppdateras och meta-beskrivningen byts för korrekt SEO/tillgänglighet.
- Priser skrivs i SEK i svenska läget och i EUR på alla andra språk. Uppdatera respektive `pricing.*.price`-strängar om växlingskursen eller produktpaketen ändras.
- Lägg till nya språk genom att duplicera en befintlig nod i `translations`, justera `languageName`, `numberFormat`, `pagespeedLocale` och inkludera språket i språklistan i `index.html`.

## assets/Lotti

Mapen innehåller separata HTML-fragment för olika Lottie-animationer (Exploring-man, rocket-varianter m.m.). De används som referenser eller testfiler och kan öppnas direkt i en webbläsare för att se animationerna isolerat.

## Drift / utveckling

- Ingen build-process krävs – öppna `index.html` via en server (t.ex. `npx serve`) eller GitHub Pages.
- CSS och JS är redan länkade via `<link>` och `<script defer>`.
- För PageSpeed-funktionen krävs att API-nyckeln (`PAGESPEED_API_KEY` i `assets/script.js`) är giltig.
- För att byta logotyp eller text, uppdatera `.logo` i `assets/styles.css` respektive innehållet i `index.html`.

Denna README ska hjälpa dig snabbt förstå hur projektet är organiserat och var du gör förändringar.

## Kommande uppdateringar

- Fler språk (t.ex. tyska/franska) och lokala kontaktuppgifter
- Enklare script-testning för att validera översättningsnycklar och valutaformat
