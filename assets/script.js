const PAGESPEED_API_KEY = 'AIzaSyBGQhx55E6-dIVVxr21hXg_7SCmUWr2vV4';
const PAGESPEED_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
const LANGUAGE_STORAGE_KEY = 'gmnordics-language';
const FALLBACK_LANGUAGE = 'sv';
const HERO_ROTATION_INTERVAL = 5200;
const HERO_TRANSITION_DURATION = 600;

const translations = {
  sv: {
    languageName: 'Svenska',
    htmlLang: 'sv',
    numberFormat: 'sv-SE',
    pagespeedLocale: 'sv_SE',
    meta: {
      title: 'GM NORDICS – Professionella hemsidor för företag',
      description: 'GM NORDICS bygger skräddarsydda, snabba och SEO-optimerade hemsidor för företag som vill växa tryggt och professionellt.'
    },
    brand: { name: 'GM NORDICS' },
    language: {
      buttonLabel: 'Byt språk',
      menuLabel: 'Välj språk'
    },
    nav: {
      services: 'Tjänster',
      process: 'Process',
      packages: 'Prispaket',
      contact: 'Kontakt',
      cta: 'Boka online',
      menuToggle: 'Visa meny'
    },
    hero: {
      eyebrow: 'För företagare',
      heading: 'Hemsidan som utstrålar förtroende',
      focusPrefix: 'Skapad för',
      focusWords: ['Kreativitet', 'Lönsamhet', 'Leads'],
      primaryCta: 'Visa prispaket',
      secondaryCta: 'Kontakt',
      statements: [
        'Vi hjälper nystartade och etablerade företag att lansera eller optimera tydliga, professionella webbplatser som fungerar lika bra i mobilen som på datorn och är optimerade för att synas på Google och ChatGPT.',
        'Vi tar fram struktur, design och copy som guidar besökare från första intryck till affär – utan att du behöver samordna flera leverantörer.',
        'Teknik, SEO, support och löpande optimering ingår så att du kan lansera snabbt och fortsätta växa utan oväntade kostnader.'
      ],
      card: {
        title: 'Varför välja GM NORDICS?',
        item1: 'Inga dyra timarvoden',
        item2: 'Fasta priser',
        item3: 'Ren kod (ingen Wix eller WordPress)',
        item4: 'Kostnadsfri prototyp',
        item5: 'Dominans inom er sektor',
        item6: 'Personlig kontakt 24/7'
      }
    },
    pagespeed: {
      heading: 'Hur mår din hemsida?',
      lead: 'Fyll i din webbadress så berättar vi hur sidan mår och vad som är smartast att fixa först.',
      label: 'Webbadress',
      placeholder: 't.ex. aftonbladet.se',
      button: 'Analysera',
      progressSuffix: 'av 100',
      scoreLabel: 'Prestandapoäng',
      scoreNote: 'Av 100 möjliga poäng – högre är bättre.',
      summaryHeading: 'Så här mår sidan',
      summaryDefault: 'Resultatet visas här efter analys.',
      scoreValueTemplate: '{{score}} av 100',
      scoreUnavailable: 'Ingen poäng',
      errors: {
        empty: 'Skriv in en webbadress, till exempel aftonbladet.se.',
        invalid: 'Webbadressen verkar felstavad. Dubbelkolla och försök igen.',
        failed: 'Vi kunde tyvärr inte läsa in resultatet just nu. Försök igen om en liten stund.'
      },
      status: {
        good: 'Känns snabbt',
        ok: 'Okej men kan vässas',
        poor: 'Segt – prioritera detta',
        unknown: 'Data saknas'
      },
      summary: {
        noScore: 'Vi kunde inte få fram någon prestandapoäng just nu.',
        high: 'Din sida laddar riktigt snabbt och ger ett starkt första intryck.',
        medium: 'Din sida känns okej, men det finns tydliga vinster att hämta.',
        low: 'Din sida upplevs trög och riskerar att tappa besökare på vägen.',
        poorMetric: '{{metric}} tar längst tid och bör prioriteras.',
        okMetric: 'Se om {{metric}} kan bli ännu snabbare.',
        allGood: 'Fortsätt hålla koll på bilder, skript och stabilitet så behåller du försprånget.',
        details: {
          fcp: 'Första intrycket syns efter {{value}}.',
          lcp: 'Huvudinnehållet är på plats efter {{value}}.',
          speedIndex: 'Helhetskänslan av fart landar på {{value}}.',
          tbt: 'Knappar svarar efter {{value}}.'
        }
      },
      units: {
        secondsShort: 'sek',
        secondsLong: 'sekunder',
        milliseconds: 'ms'
      },
      metrics: {
        fcp: {
          title: 'Tid tills något syns',
          detail: 'Första intrycket dyker upp efter {{value}}. Försök hålla dig under {{target}}.'
        },
        lcp: {
          title: 'När huvudinnehållet syns',
          detail: 'Det viktigaste innehållet syns efter {{value}}. Ett bra mål är {{target}}.'
        },
        speedIndex: {
          title: 'Helhetskänslan av fart',
          detail: 'Så lång tid tar det innan sidan ser färdig ut: {{value}}. Satsa på max {{target}}.'
        },
        tbt: {
          title: 'Hur snabbt knapparna reagerar',
          detail: 'Så lång fördröjning uppstår innan sidan svarar: {{value}}. Håll den under {{target}}.'
        },
        cls: {
          title: 'Hur stabil sidan känns',
          detail: 'Sidan hoppar omkring {{value}}. För en lugn upplevelse – håll dig under {{target}}.'
        }
      }
    },
    services: {
      heading: 'Tydlighet, trygghet och tillväxt i varje projekt',
      rotatingStatements: [
        'Allt du behöver för att lansera med självförtroende – från första designskiss till live-sajt.',
        'Vi kombinerar strategi, design och teknik så att lanseringen känns trygg från start till mål.',
        'Ett och samma team guidar dig genom skiss, copy, bygg och lansering utan onödiga stopp.'
      ],
      card1: {
        title: 'Strategi & struktur',
        body: 'Vi kartlägger målgruppens behov och bygger upp en tydlig informationsarkitektur som leder till konvertering.'
      },
      card2: {
        title: 'Design & varumärke',
        body: 'Professionell design som speglar ditt företag och skapar förtroende – komplett med färger, typsnitt och bildspråk.'
      },
      card3: {
        title: 'Teknik & SEO',
        body: 'Snabb, mobilanpassad kod med teknisk SEO som ger en bra grund för att synas och driva trafik.'
      }
    },
    process: {
      heading: 'Vår process gör det enkelt att komma igång',
      step1: {
        title: '1. Kickoff & mål',
        body: 'Vi inleder med ett strukturerat uppstartsmöte där vi definierar mål, målgrupp, budskap och SEO-fokus samt sätter informationsstrukturen för sajten.'
      },
      step2: {
        title: '2. Design & copy',
        body: 'Vi tar fram en interaktiv prototyp och skräddarsydd copy. Tillsammans finjusterar vi innehåll och design tills allt är godkänt och produktionsklart.'
      },
      step3: {
        title: '3. Bygg & lansering',
        body: 'Vi implementerar lösningen, finjusterar SEO och genomför noggranna tester. Vid lansering får du en robust webbplats som konkurrerar från dag ett.'
      }
    },
    pricing: {
      heading: 'Tre prispaket för olika behov',
      lead: 'Välj den nivå som passar dig bäst – alla paket går att bygga ut när ditt företag växer.',
      popular: 'Mest populär',
      base: {
        title: 'Bas',
        price: '1&nbsp;495 kr/månad',
        tagline: 'För en snabb och professionell start',
        feature1: 'Hemsida utvecklad i ren kod',
        feature2: 'Bilder',
        feature3: '5 e-postadresser',
        feature4: 'Webbhotell och domänadress',
        feature5: 'SEO-optimering',
        feature6: 'Kontaktformulär',
        feature7: 'Support ingår',
        cta: 'Välj Bas'
      },
      plus: {
        title: 'Plus',
        price: '2&nbsp;499 kr/månad',
        tagline: 'För företag med behov av fler kunder',
        feature1: 'Allt i Bas',
        feature2: 'Bildspel och galleri',
        feature3: 'Nyhetsflöde',
        feature4: 'Logotypdesign och unik grafik',
        feature5: '10 e-postadresser',
        feature6: 'Marknadsföring via Meta',
        feature7: 'Filmredigering',
        feature8: 'Marknadsföringskampanjer',
        cta: 'Välj Plus'
      },
      premium: {
        title: 'Premium',
        price: '7&nbsp;995 kr/månad',
        tagline: 'Dominera din marknad och dina konkurrenter',
        feature1: 'Allt i Plus',
        feature2: 'Expertutformad 3D-design',
        feature3: 'Optimerade bilder',
        feature4: 'Obegränsade e-postadresser',
        feature5: 'AI-bloggfunktion',
        feature6: 'SEO-optimering',
        feature7: 'Veckoavstämningar',
        feature8: 'WooCommerce-integration',
        feature9: 'E-handel',
        cta: 'Välj Premium'
      }
    },
    appointment: {
      heading: 'Boka när det passar dig',
      body: 'Välj en tid som passar dig så går vi igenom mål, tidsplan och vilka delar av webbplatsen som behöver mest kärlek.',
      benefit1: '30 minuter digitalt möte via Google Meet',
      benefit2: 'Konkreta rekommendationer för din nuvarande sajt',
      benefit3: 'En tydlig handlingsplan i skriftform skickas ut',
      openCalendar: 'Öppna kalender'
    },
    testimonials: {
      heading: 'Vad teamet tipsar dig som funderar',
      quote1: '“GM NORDICS är en fantastisk tjänst för dig som vill ha teknisk expertis med fasta och låga kostnader.”',
      quote2: '“Seniora IT-utvecklare debiterar 1000–1400 kr per timme, med GM NORDICS är det fasta priser som gäller vilket många företagare uppskattar.”',
      quote3: '“Det är en lyxkänsla att kunna ha ett direktnummer till våra experter och rådfråga om vad som helst – många av oss blir faktiskt polare med våra klienter.”'
    },
    contact: {
      heading: 'Låt oss prata om din nästa webbplats',
      lead: 'Fyll i formuläret så återkommer vi inom två arbetsdagar',
      form: {
        nameLabel: 'Namn',
        namePlaceholder: 'Ditt namn',
        emailLabel: 'E-post',
        emailPlaceholder: 'din@adress.se',
        companyLabel: 'Företag',
        companyPlaceholder: 'Företagsnamn',
        packageLabel: 'Välj paket',
        optionBas: 'Bas',
        optionPlus: 'Plus',
        optionPremium: 'Premium',
        messageLabel: 'Berätta kort om ditt behov',
        messagePlaceholder: 'Vad vill du uppnå med din webbplats?',
        submit: 'Skicka förfrågan'
      },
      phoneLabel: 'Föredrar du att ringa?',
      phoneValue: '010-123 45 67',
      emailLabel: 'E-post:',
      emailValue: 'hello@pavoa.se'
    },
    footer: {
      tagline: 'GM NORDICS. Alla rättigheter förbehållna.',
      nav: {
        services: 'Tjänster',
        packages: 'Prispaket',
        about: 'Om oss',
        contact: 'Kontakt',
        policy: 'Integritetspolicy'
      }
    }
  },
  en: {
    languageName: 'English',
    htmlLang: 'en',
    numberFormat: 'en-US',
    pagespeedLocale: 'en_US',
    meta: {
      title: 'GM NORDICS – Professional websites for growing companies',
      description: 'GM NORDICS designs and builds fast, SEO-ready websites for companies that want a trustworthy digital presence and predictable growth.'
    },
    brand: { name: 'GM NORDICS' },
    language: {
      buttonLabel: 'Change language',
      menuLabel: 'Select language'
    },
    nav: {
      services: 'Services',
      process: 'Process',
      packages: 'Pricing',
      contact: 'Contact',
      cta: 'Book online',
      menuToggle: 'Show menu'
    },
    hero: {
      eyebrow: 'For entrepreneurs',
      heading: 'A website that radiates trust',
      focusPrefix: 'Built for',
      focusWords: ['Creativity', 'Profitability', 'Qualified leads'],
      primaryCta: 'See pricing',
      secondaryCta: 'Contact',
      statements: [
        'We help new and established companies launch or optimize clear, professional websites that perform on every device and rank in Google and ChatGPT.',
        'We craft structure, design, and copy that guide visitors from first impression to signed deal without juggling multiple vendors.',
        'Technology, SEO, support, and ongoing optimization are included so you can launch quickly and keep scaling without surprise costs.'
      ],
      card: {
        title: 'Why choose GM NORDICS?',
        item1: 'No costly hourly fees',
        item2: 'Fixed pricing',
        item3: 'Hand-coded builds (no Wix or WordPress)',
        item4: 'Complimentary prototype',
        item5: 'Own your niche',
        item6: 'Direct personal support 24/7'
      }
    },
    pagespeed: {
      heading: 'How healthy is your website?',
      lead: 'Share your URL and we will tell you how the site performs and what to optimize first.',
      label: 'Website',
      placeholder: 'e.g. example.com',
      button: 'Analyze',
      progressSuffix: 'of 100',
      scoreLabel: 'Performance score',
      scoreNote: 'Out of 100 possible points – higher is better.',
      summaryHeading: 'How the page performs',
      summaryDefault: 'Your result appears here after the analysis.',
      scoreValueTemplate: '{{score}} out of 100',
      scoreUnavailable: 'No score',
      errors: {
        empty: 'Enter a web address such as example.com.',
        invalid: 'The URL seems incorrect. Double-check and try again.',
        failed: 'We could not load the results right now. Please try again in a moment.'
      },
      status: {
        good: 'Feels fast',
        ok: 'Okay but can improve',
        poor: 'Slow – prioritize this',
        unknown: 'No data'
      },
      summary: {
        noScore: 'We could not retrieve a performance score right now.',
        high: 'Your site loads very quickly and builds trust instantly.',
        medium: 'The site feels fine but there are clear wins waiting.',
        low: 'The site feels sluggish and risks losing visitors along the way.',
        poorMetric: '{{metric}} takes the longest time and should be prioritized.',
        okMetric: 'Consider squeezing more speed out of {{metric}}.',
        allGood: 'Keep an eye on images, scripts, and stability to stay ahead.',
        details: {
          fcp: 'First content appears after {{value}}.',
          lcp: 'Main content is ready after {{value}}.',
          speedIndex: 'The overall sense of speed lands at {{value}}.',
          tbt: 'Buttons respond after {{value}}.'
        }
      },
      units: {
        secondsShort: 's',
        secondsLong: 'seconds',
        milliseconds: 'ms'
      },
      metrics: {
        fcp: {
          title: 'Time until something appears',
          detail: 'The first impression shows after {{value}}. Aim to stay below {{target}}.'
        },
        lcp: {
          title: 'When the main content is visible',
          detail: 'The key content becomes visible after {{value}}. A solid target is {{target}}.'
        },
        speedIndex: {
          title: 'Overall sense of speed',
          detail: 'The page looks complete after {{value}}. Try to keep it under {{target}}.'
        },
        tbt: {
          title: 'How quickly buttons respond',
          detail: 'Interactions are delayed by {{value}}. Keep it below {{target}}.'
        },
        cls: {
          title: 'Visual stability',
          detail: 'Layout shift adds up to {{value}}. Stay below {{target}} for a calm experience.'
        }
      }
    },
    services: {
      heading: 'Clarity, confidence, and growth in every project',
      rotatingStatements: [
        'Everything you need to launch with confidence – from the first design sketch to go-live.',
        'Strategy, design, and engineering in one team so decisions stay aligned with your goals.',
        'We keep momentum through clear milestones, approvals, and proactive communication.'
      ],
      card1: {
        title: 'Strategy & structure',
        body: 'We map your audience and build an intuitive information architecture that converts.'
      },
      card2: {
        title: 'Design & brand',
        body: 'Professional design that mirrors your brand and builds trust – complete with colors, typography, and imagery.'
      },
      card3: {
        title: 'Technology & SEO',
        body: 'Fast, mobile-first code with technical SEO so you can be found and drive traffic.'
      }
    },
    process: {
      heading: 'Our process makes it easy to get started',
      step1: {
        title: '1. Kickoff & goals',
        body: 'A structured kickoff where we define goals, audience, messaging, SEO focus, and the sitemap for the site.'
      },
      step2: {
        title: '2. Design & copy',
        body: 'We deliver an interactive prototype and tailored copy. Together we fine-tune everything until it is approved.'
      },
      step3: {
        title: '3. Build & launch',
        body: 'We implement, polish SEO, and run thorough tests. At launch you get a robust site ready to compete from day one.'
      }
    },
    pricing: {
      heading: 'Three packages for different needs',
      lead: 'Choose the tier that suits you – every package can grow with your company.',
      popular: 'Most popular',
      base: {
        title: 'Base',
        price: '€130 / month',
        tagline: 'For a fast, professional start',
        feature1: 'Website built with clean custom code',
        feature2: 'Curated imagery',
        feature3: '5 email accounts',
        feature4: 'Hosting and domain included',
        feature5: 'SEO optimization',
        feature6: 'Contact form',
        feature7: 'Support included',
        cta: 'Choose Base'
      },
      plus: {
        title: 'Plus',
        price: '€220 / month',
        tagline: 'For companies that need more clients',
        feature1: 'Everything in Base',
        feature2: 'Slideshows and galleries',
        feature3: 'News feed',
        feature4: 'Logo design and custom graphics',
        feature5: '10 email accounts',
        feature6: 'Meta ads management',
        feature7: 'Video editing',
        feature8: 'Marketing campaigns',
        cta: 'Choose Plus'
      },
      premium: {
        title: 'Premium',
        price: '€695 / month',
        tagline: 'Dominate your market and competitors',
        feature1: 'Everything in Plus',
        feature2: 'Expert-crafted 3D design',
        feature3: 'Optimized imagery',
        feature4: 'Unlimited email accounts',
        feature5: 'AI-powered blog',
        feature6: 'SEO optimization',
        feature7: 'Weekly check-ins',
        feature8: 'WooCommerce integration',
        feature9: 'E-commerce build',
        cta: 'Choose Premium'
      }
    },
    appointment: {
      heading: 'Book when it suits you',
      body: 'Pick a time that works and we will review your goals, timeline, and which parts of the site need the most care.',
      benefit1: '30-minute video call via Google Meet',
      benefit2: 'Actionable recommendations for your current site',
      benefit3: 'A written action plan delivered after the call',
      openCalendar: 'Open calendar'
    },
    testimonials: {
      heading: 'What the team tells founders',
      quote1: '“GM NORDICS is perfect when you want senior technical expertise without unpredictable fees.”',
      quote2: '“Senior developers charge 100–140 EUR per hour. With GM NORDICS you get fixed pricing, which founders appreciate.”',
      quote3: '“Having a direct line to our experts feels luxurious – we often become genuine partners with our clients.”'
    },
    contact: {
      heading: 'Let’s talk about your next website',
      lead: 'Fill in the form and we get back within two business days.',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@example.com',
        companyLabel: 'Company',
        companyPlaceholder: 'Company name',
        packageLabel: 'Choose package',
        optionBas: 'Base',
        optionPlus: 'Plus',
        optionPremium: 'Premium',
        messageLabel: 'Tell us briefly about your needs',
        messagePlaceholder: 'What do you want to achieve with your site?',
        submit: 'Send request'
      },
      phoneLabel: 'Prefer to call?',
      phoneValue: '+46 10 123 45 67',
      emailLabel: 'Email:',
      emailValue: 'hello@pavoa.se'
    },
    footer: {
      tagline: 'GM NORDICS. All rights reserved.',
      nav: {
        services: 'Services',
        packages: 'Pricing',
        about: 'About us',
        contact: 'Contact',
        policy: 'Privacy policy'
      }
    }
  },
  es: {
    languageName: 'Español',
    htmlLang: 'es',
    numberFormat: 'es-ES',
    pagespeedLocale: 'es_ES',
    meta: {
      title: 'GM NORDICS – Sitios web profesionales para pymes ambiciosas',
      description: 'GM NORDICS diseña y desarrolla sitios web rápidos y optimizados para SEO para empresas que necesitan una presencia digital fiable y crecimiento predecible.'
    },
    brand: { name: 'GM NORDICS' },
    language: {
      buttonLabel: 'Cambiar idioma',
      menuLabel: 'Elegir idioma'
    },
    nav: {
      services: 'Servicios',
      process: 'Proceso',
      packages: 'Planes',
      contact: 'Contacto',
      cta: 'Reservar online',
      menuToggle: 'Mostrar menú'
    },
    hero: {
      eyebrow: 'Para emprendedores',
      heading: 'Un sitio web que inspira confianza',
      focusPrefix: 'Creado para',
      focusWords: ['Creatividad', 'Rentabilidad', 'Clientes potenciales'],
      primaryCta: 'Ver planes',
      secondaryCta: 'Contacto',
      statements: [
        'Ayudamos a empresas nuevas y consolidadas a lanzar u optimizar sitios web claros y profesionales que funcionan en cualquier dispositivo y se posicionan en Google y ChatGPT.',
        'Creamos estructura, diseño y textos que guían al visitante desde la primera impresión hasta la conversión, sin que tengas que coordinar varios proveedores.',
        'Tecnología, SEO, soporte y optimización continua están incluidos para que lances rápido y sigas creciendo sin costes inesperados.'
      ],
      card: {
        title: '¿Por qué elegir GM NORDICS?',
        item1: 'Sin tarifas por hora elevadas',
        item2: 'Precios fijos',
        item3: 'Código propio (sin Wix ni WordPress)',
        item4: 'Prototipo sin coste',
        item5: 'Dominio en tu sector',
        item6: 'Contacto personal 24/7'
      }
    },
    pagespeed: {
      heading: '¿Cómo se encuentra tu sitio web?',
      lead: 'Escribe tu URL y te diremos cómo rinde la página y qué conviene optimizar primero.',
      label: 'Dirección web',
      placeholder: 'p. ej. ejemplo.com',
      button: 'Analizar',
      progressSuffix: 'de 100',
      scoreLabel: 'Puntuación de rendimiento',
      scoreNote: 'De 100 puntos posibles: cuanto más alta, mejor.',
      summaryHeading: 'Estado de la página',
      summaryDefault: 'Verás aquí tu resultado después del análisis.',
      scoreValueTemplate: '{{score}} de 100',
      scoreUnavailable: 'Sin puntuación',
      errors: {
        empty: 'Escribe una dirección web, por ejemplo ejemplo.com.',
        invalid: 'La URL parece incorrecta. Revisa y vuelve a intentarlo.',
        failed: 'No pudimos cargar los resultados ahora mismo. Inténtalo de nuevo en unos instantes.'
      },
      status: {
        good: 'Se siente rápido',
        ok: 'Aceptable pero mejorable',
        poor: 'Lento: prioriza esto',
        unknown: 'Sin datos'
      },
      summary: {
        noScore: 'No pudimos obtener una puntuación de rendimiento en este momento.',
        high: 'Tu sitio carga muy rápido y genera confianza al instante.',
        medium: 'La página va bien, pero hay mejoras claras por ganar.',
        low: 'La página se siente lenta y puede perder visitas en el camino.',
        poorMetric: '{{metric}} es lo que más tarda y debe priorizarse.',
        okMetric: 'Busca acelerar {{metric}} si es posible.',
        allGood: 'Controla imágenes, scripts y estabilidad para mantener la ventaja.',
        details: {
          fcp: 'La primera impresión aparece tras {{value}}.',
          lcp: 'El contenido principal está listo tras {{value}}.',
          speedIndex: 'La sensación global de velocidad es de {{value}}.',
          tbt: 'Los botones responden después de {{value}}.'
        }
      },
      units: {
        secondsShort: 's',
        secondsLong: 'segundos',
        milliseconds: 'ms'
      },
      metrics: {
        fcp: {
          title: 'Tiempo hasta que algo aparece',
          detail: 'La primera impresión llega tras {{value}}. Intenta mantenerte por debajo de {{target}}.'
        },
        lcp: {
          title: 'Cuándo se ve el contenido principal',
          detail: 'El contenido clave aparece tras {{value}}. Un buen objetivo es {{target}}.'
        },
        speedIndex: {
          title: 'Sensación global de velocidad',
          detail: 'La página parece completa tras {{value}}. Procura estar por debajo de {{target}}.'
        },
        tbt: {
          title: 'Qué tan rápido responden los botones',
          detail: 'Las interacciones se retrasan {{value}}. Mantenlas por debajo de {{target}}.'
        },
        cls: {
          title: 'Estabilidad visual',
          detail: 'El diseño salta {{value}}. Para una experiencia tranquila, mantente por debajo de {{target}}.'
        }
      }
    },
    services: {
      heading: 'Claridad, confianza y crecimiento en cada proyecto',
      rotatingStatements: [
        'Todo lo que necesitas para lanzar con confianza: desde los primeros bocetos hasta la puesta en producción.',
        'Estrategia, diseño y tecnología en un mismo equipo para que cada decisión responda a tus objetivos.',
        'Mantenemos el impulso con hitos claros, aprobaciones ágiles y comunicación proactiva.'
      ],
      card1: {
        title: 'Estrategia y estructura',
        body: 'Analizamos a tu audiencia y construimos una arquitectura de información clara que convierte.'
      },
      card2: {
        title: 'Diseño y marca',
        body: 'Diseño profesional que refleja tu empresa y genera confianza, con paleta, tipografías e imágenes coherentes.'
      },
      card3: {
        title: 'Tecnología y SEO',
        body: 'Código rápido y mobile-first con SEO técnico para que te encuentren y generes tráfico.'
      }
    },
    process: {
      heading: 'Nuestro proceso facilita cada lanzamiento',
      step1: {
        title: '1. Kickoff y objetivos',
        body: 'Arrancamos con una reunión estructurada para definir objetivos, público, mensajes, enfoque SEO y mapa del sitio.'
      },
      step2: {
        title: '2. Diseño y copy',
        body: 'Creamos un prototipo interactivo y textos a medida. Ajustamos juntos hasta aprobar cada detalle.'
      },
      step3: {
        title: '3. Desarrollo y lanzamiento',
        body: 'Implementamos, refinamos el SEO y probamos a fondo. Al lanzar entregamos un sitio robusto listo para competir.'
      }
    },
    pricing: {
      heading: 'Tres planes para necesidades distintas',
      lead: 'Elige el plan que más te convenga: todos pueden crecer con tu empresa.',
      popular: 'El más elegido',
      base: {
        title: 'Base',
        price: '130 € / mes',
        tagline: 'Para un inicio rápido y profesional',
        feature1: 'Sitio desarrollado con código propio',
        feature2: 'Selección de imágenes',
        feature3: '5 cuentas de correo',
        feature4: 'Hosting y dominio incluidos',
        feature5: 'Optimización SEO',
        feature6: 'Formulario de contacto',
        feature7: 'Soporte incluido',
        cta: 'Elegir Base'
      },
      plus: {
        title: 'Plus',
        price: '220 € / mes',
        tagline: 'Para empresas que necesitan más clientes',
        feature1: 'Todo lo del plan Base',
        feature2: 'Galerías y sliders',
        feature3: 'Sección de noticias',
        feature4: 'Diseño de logotipo y gráficos únicos',
        feature5: '10 cuentas de correo',
        feature6: 'Publicidad en Meta',
        feature7: 'Edición de vídeo',
        feature8: 'Campañas de marketing',
        cta: 'Elegir Plus'
      },
      premium: {
        title: 'Premium',
        price: '695 € / mes',
        tagline: 'Domina tu mercado y a la competencia',
        feature1: 'Todo lo del plan Plus',
        feature2: 'Diseño 3D creado por expertos',
        feature3: 'Imágenes optimizadas',
        feature4: 'Cuentas de correo ilimitadas',
        feature5: 'Blog con IA',
        feature6: 'Optimización SEO avanzada',
        feature7: 'Reuniones semanales',
        feature8: 'Integración con WooCommerce',
        feature9: 'Comercio electrónico completo',
        cta: 'Elegir Premium'
      }
    },
    appointment: {
      heading: 'Reserva cuando te venga bien',
      body: 'Elige una hora y revisamos tus objetivos, plazos y qué partes del sitio necesitan más atención.',
      benefit1: 'Reunión digital de 30 minutos en Google Meet',
      benefit2: 'Recomendaciones concretas para tu sitio actual',
      benefit3: 'Plan de acción escrito tras la reunión',
      openCalendar: 'Abrir calendario'
    },
    testimonials: {
      heading: 'Lo que nuestro equipo recomienda',
      quote1: '“GM NORDICS es ideal si buscas experiencia técnica senior con costes predecibles.”',
      quote2: '“Un desarrollador senior cobra 100–140 € la hora. Con GM NORDICS trabajas con precios fijos, algo que da mucha tranquilidad.”',
      quote3: '“Nos encanta tener línea directa con los clientes; terminamos siendo aliados de confianza en su crecimiento.”'
    },
    contact: {
      heading: 'Hablemos de tu próximo sitio web',
      lead: 'Completa el formulario y te contestamos en un máximo de dos días laborables.',
      form: {
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre',
        emailLabel: 'Correo electrónico',
        emailPlaceholder: 'tu@empresa.com',
        companyLabel: 'Empresa',
        companyPlaceholder: 'Nombre de la empresa',
        packageLabel: 'Elige un plan',
        optionBas: 'Base',
        optionPlus: 'Plus',
        optionPremium: 'Premium',
        messageLabel: 'Cuéntanos brevemente tu necesidad',
        messagePlaceholder: '¿Qué quieres lograr con tu sitio?',
        submit: 'Enviar solicitud'
      },
      phoneLabel: '¿Prefieres llamar?',
      phoneValue: '+34 910 123 456',
      emailLabel: 'Correo:',
      emailValue: 'hola@pavoa.se'
    },
    footer: {
      tagline: 'GM NORDICS. Todos los derechos reservados.',
      nav: {
        services: 'Servicios',
        packages: 'Planes',
        about: 'Sobre nosotros',
        contact: 'Contacto',
        policy: 'Política de privacidad'
      }
    }
  },
  it: {
    languageName: 'Italiano',
    htmlLang: 'it',
    numberFormat: 'it-IT',
    pagespeedLocale: 'it_IT',
    meta: {
      title: 'GM NORDICS – Siti web professionali per aziende in crescita',
      description: 'GM NORDICS progetta e sviluppa siti veloci e ottimizzati per la SEO per aziende che vogliono una presenza digitale credibile e risultati prevedibili.'
    },
    brand: { name: 'GM NORDICS' },
    language: {
      buttonLabel: 'Cambia lingua',
      menuLabel: 'Seleziona lingua'
    },
    nav: {
      services: 'Servizi',
      process: 'Processo',
      packages: 'Pacchetti',
      contact: 'Contatti',
      cta: 'Prenota online',
      menuToggle: 'Mostra menu'
    },
    hero: {
      eyebrow: 'Per imprenditori',
      heading: 'Un sito che trasmette fiducia',
      focusPrefix: 'Creato per',
      focusWords: ['Creatività', 'Redditività', 'Lead qualificati'],
      primaryCta: 'Guarda i pacchetti',
      secondaryCta: 'Contatto',
      statements: [
        'Aiutiamo aziende nuove e affermate a lanciare o ottimizzare siti web chiari e professionali che funzionano su ogni dispositivo e si posizionano su Google e ChatGPT.',
        'Progettiamo struttura, design e copy che accompagnano il visitatore dal primo clic alla conversione senza dover gestire più fornitori.',
        'Tecnologia, SEO, assistenza e ottimizzazioni continue sono incluse così puoi lanciare velocemente e crescere senza costi imprevisti.'
      ],
      card: {
        title: 'Perché scegliere GM NORDICS?',
        item1: 'Niente tariffe orarie elevate',
        item2: 'Prezzi fissi',
        item3: 'Sviluppo su misura (niente Wix o WordPress)',
        item4: 'Prototipo gratuito',
        item5: 'Leadership nel tuo settore',
        item6: 'Referente personale 24/7'
      }
    },
    pagespeed: {
      heading: 'Come sta il tuo sito?',
      lead: 'Inserisci l’indirizzo e ti diremo come si comporta la pagina e da dove conviene iniziare.',
      label: 'Indirizzo web',
      placeholder: 'es. esempio.it',
      button: 'Analizza',
      progressSuffix: 'su 100',
      scoreLabel: 'Punteggio prestazionale',
      scoreNote: 'Su 100 punti disponibili – più è alto, meglio è.',
      summaryHeading: 'Stato della pagina',
      summaryDefault: 'Il risultato apparirà qui al termine dell’analisi.',
      scoreValueTemplate: '{{score}} su 100',
      scoreUnavailable: 'Nessun punteggio',
      errors: {
        empty: 'Inserisci un indirizzo web, ad esempio esempio.it.',
        invalid: 'L’URL sembra errato. Controlla e riprova.',
        failed: 'Non siamo riusciti a caricare i risultati. Riprova tra poco.'
      },
      status: {
        good: 'Sembra veloce',
        ok: 'Discreto ma migliorabile',
        poor: 'Lento – da priorizzare',
        unknown: 'Nessun dato'
      },
      summary: {
        noScore: 'Al momento non è stato possibile ottenere un punteggio.',
        high: 'Il tuo sito carica molto velocemente e trasmette subito fiducia.',
        medium: 'Il sito funziona bene ma ci sono margini di miglioramento evidenti.',
        low: 'Il sito risulta lento e rischia di perdere utenti per strada.',
        poorMetric: '{{metric}} è la fase più lenta e va priorizzata.',
        okMetric: 'Valuta se puoi rendere ancora più rapido {{metric}}.',
        allGood: 'Continua a monitorare immagini, script e stabilità per restare avanti.',
        details: {
          fcp: 'Il primo contenuto appare dopo {{value}}.',
          lcp: 'Il contenuto principale è pronto dopo {{value}}.',
          speedIndex: 'La percezione generale di velocità è di {{value}}.',
          tbt: 'I pulsanti rispondono dopo {{value}}.'
        }
      },
      units: {
        secondsShort: 's',
        secondsLong: 'secondi',
        milliseconds: 'ms'
      },
      metrics: {
        fcp: {
          title: 'Tempo prima che appaia qualcosa',
          detail: 'La prima impressione arriva dopo {{value}}. Mantieniti sotto {{target}}.'
        },
        lcp: {
          title: 'Quando compare il contenuto principale',
          detail: 'Il contenuto più importante è visibile dopo {{value}}. Un buon obiettivo è {{target}}.'
        },
        speedIndex: {
          title: 'Percezione complessiva di velocità',
          detail: 'La pagina sembra completa dopo {{value}}. Cerca di restare sotto {{target}}.'
        },
        tbt: {
          title: 'Reattività dei pulsanti',
          detail: 'Le interazioni hanno un ritardo di {{value}}. Tienilo sotto {{target}}.'
        },
        cls: {
          title: 'Stabilità visiva',
          detail: 'Il layout si sposta di {{value}}. Per un’esperienza fluida resta sotto {{target}}.'
        }
      }
    },
    services: {
      heading: 'Chiarezza, sicurezza e crescita in ogni progetto',
      rotatingStatements: [
        'Tutto ciò che serve per lanciare con sicurezza: dal primo wireframe al go-live.',
        'Strategia, design e sviluppo nello stesso team così ogni scelta segue i tuoi obiettivi.',
        'Manteniamo il ritmo con tappe chiare, approvazioni rapide e comunicazione proattiva.'
      ],
      card1: {
        title: 'Strategia e struttura',
        body: 'Analizziamo il tuo target e costruiamo un’architettura informativa che converte.'
      },
      card2: {
        title: 'Design e brand',
        body: 'Design professionale che rispecchia il tuo marchio e ispira fiducia, con palette, font e immagini coerenti.'
      },
      card3: {
        title: 'Tecnologia e SEO',
        body: 'Codice rapido e mobile-first con SEO tecnico per farti trovare e generare traffico.'
      }
    },
    process: {
      heading: 'Il nostro processo ti accompagna passo dopo passo',
      step1: {
        title: '1. Kickoff e obiettivi',
        body: 'Partiamo con un incontro strutturato in cui definiamo obiettivi, pubblico, messaggio, focus SEO e struttura del sito.'
      },
      step2: {
        title: '2. Design e copy',
        body: 'Creiamo un prototipo interattivo e copy su misura. Rifiniamo insieme fino all’approvazione definitiva.'
      },
      step3: {
        title: '3. Sviluppo e lancio',
        body: 'Implementiamo la soluzione, ottimizziamo la SEO e testiamo tutto. Al lancio hai un sito pronto a competere.'
      }
    },
    pricing: {
      heading: 'Tre pacchetti per esigenze diverse',
      lead: 'Scegli il pacchetto che fa per te: ognuno può crescere insieme alla tua azienda.',
      popular: 'Il più scelto',
      base: {
        title: 'Base',
        price: '130 € / mese',
        tagline: 'Per partire in modo rapido e professionale',
        feature1: 'Sito sviluppato con codice su misura',
        feature2: 'Selezione di immagini',
        feature3: '5 caselle email',
        feature4: 'Hosting e dominio inclusi',
        feature5: 'Ottimizzazione SEO',
        feature6: 'Modulo di contatto',
        feature7: 'Supporto incluso',
        cta: 'Scegli Base'
      },
      plus: {
        title: 'Plus',
        price: '220 € / mese',
        tagline: 'Per aziende che vogliono più clienti',
        feature1: 'Tutto del pacchetto Base',
        feature2: 'Slider e gallerie',
        feature3: 'Sezione news',
        feature4: 'Logo e grafiche personalizzate',
        feature5: '10 caselle email',
        feature6: 'Campagne Meta',
        feature7: 'Montaggio video',
        feature8: 'Campagne marketing',
        cta: 'Scegli Plus'
      },
      premium: {
        title: 'Premium',
        price: '695 € / mese',
        tagline: 'Per dominare il tuo mercato e i concorrenti',
        feature1: 'Tutto del pacchetto Plus',
        feature2: 'Design 3D curato da esperti',
        feature3: 'Immagini ottimizzate',
        feature4: 'Caselle email illimitate',
        feature5: 'Blog con AI integrata',
        feature6: 'SEO avanzata',
        feature7: 'Riunioni settimanali',
        feature8: 'Integrazione WooCommerce',
        feature9: 'E-commerce completo',
        cta: 'Scegli Premium'
      }
    },
    appointment: {
      heading: 'Prenota quando preferisci',
      body: 'Scegli l’orario migliore per te e analizziamo obiettivi, tempistiche e priorità del tuo sito.',
      benefit1: 'Call digitale di 30 minuti su Google Meet',
      benefit2: 'Raccomandazioni concrete per il sito attuale',
      benefit3: 'Piano d’azione scritto dopo la call',
      openCalendar: 'Apri calendario'
    },
    testimonials: {
      heading: 'I consigli del nostro team',
      quote1: '“GM NORDICS è perfetta per chi vuole competenze tecniche senior con costi prevedibili.”',
      quote2: '“Uno sviluppatore senior può costare 100–140 € l’ora. Con GM NORDICS hai prezzi fissi, una certezza per gli imprenditori.”',
      quote3: '“Avere un numero diretto con i nostri esperti è un plus: spesso diventiamo partner fidati dei clienti.”'
    },
    contact: {
      heading: 'Parliamo del tuo prossimo sito web',
      lead: 'Compila il modulo e ti ricontattiamo entro due giorni lavorativi.',
      form: {
        nameLabel: 'Nome',
        namePlaceholder: 'Il tuo nome',
        emailLabel: 'Email',
        emailPlaceholder: 'tu@azienda.it',
        companyLabel: 'Azienda',
        companyPlaceholder: 'Nome azienda',
        packageLabel: 'Scegli il pacchetto',
        optionBas: 'Base',
        optionPlus: 'Plus',
        optionPremium: 'Premium',
        messageLabel: 'Descrivi brevemente le tue esigenze',
        messagePlaceholder: 'Cosa vuoi ottenere con il sito?',
        submit: 'Invia richiesta'
      },
      phoneLabel: 'Preferisci chiamare?',
      phoneValue: '+39 02 1234 567',
      emailLabel: 'Email:',
      emailValue: 'ciao@pavoa.se'
    },
    footer: {
      tagline: 'GM NORDICS. Tutti i diritti riservati.',
      nav: {
        services: 'Servizi',
        packages: 'Pacchetti',
        about: 'Chi siamo',
        contact: 'Contatti',
        policy: 'Privacy'
      }
    }
  }
};

const METRIC_BASE = [
  {
    key: 'fcp',
    id: 'first-contentful-paint',
    convert: (value) => value / 1000,
    thresholds: { good: 1.8, ok: 3 },
    unit: 'seconds',
    decimals: 1,
    target: 1.8
  },
  {
    key: 'lcp',
    id: 'largest-contentful-paint',
    convert: (value) => value / 1000,
    thresholds: { good: 2.5, ok: 4 },
    unit: 'seconds',
    decimals: 1,
    target: 2.5
  },
  {
    key: 'speedIndex',
    id: 'speed-index',
    convert: (value) => value / 1000,
    thresholds: { good: 3.4, ok: 5.8 },
    unit: 'seconds',
    decimals: 1,
    target: 3.4
  },
  {
    key: 'tbt',
    id: 'total-blocking-time',
    convert: (value) => value,
    thresholds: { good: 200, ok: 600 },
    unit: 'milliseconds',
    decimals: 0,
    target: 200
  },
  {
    key: 'cls',
    id: 'cumulative-layout-shift',
    convert: (value) => value,
    thresholds: { good: 0.1, ok: 0.25 },
    unit: 'unitless',
    decimals: 2,
    target: 0.1
  }
];

const state = {
  currentLanguage: FALLBACK_LANGUAGE,
  lastAnalysisData: null
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function initNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('primary-navigation');

  if (!menuToggle || !navLinks) {
    return;
  }

  const toggleMenu = () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  };

  menuToggle.addEventListener('click', toggleMenu);

  navLinks.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.tagName === 'A' && navLinks.classList.contains('is-open')) {
      navLinks.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navLinks.classList.contains('is-open')) {
      navLinks.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  });
}

initNavigation();

function getInitialLanguage() {
  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored && translations[stored]) {
    return stored;
  }
  const browser = navigator.language?.slice(0, 2).toLowerCase();
  if (browser && translations[browser]) {
    return browser;
  }
  return FALLBACK_LANGUAGE;
}

state.currentLanguage = getInitialLanguage();

function getLocale() {
  return translations[state.currentLanguage];
}

function getNestedValue(object, path) {
  return path.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), object);
}

function formatTemplate(template, replacements) {
  return template.replace(/\{\{(.*?)\}\}/g, (_, token) => {
    return replacements[token] ?? '';
  });
}

function formatNumberLocalized(value, maximumFractionDigits = 0, lang = state.currentLanguage) {
  const locale = translations[lang];
  return new Intl.NumberFormat(locale.numberFormat, {
    minimumFractionDigits: 0,
    maximumFractionDigits
  }).format(value);
}

function applyStaticTranslations(lang) {
  const locale = translations[lang];
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const translation = getNestedValue(locale, key);
    if (typeof translation === 'undefined') {
      return;
    }
    const attr = element.getAttribute('data-i18n-attr');
    if (attr === 'html') {
      element.innerHTML = translation;
    } else if (attr) {
      element.setAttribute(attr, translation);
    } else {
      element.textContent = translation;
    }
  });
}

const languageSwitcher = document.querySelector('.language-switcher');
const languageButton = languageSwitcher?.querySelector('.language-button');
const languageMenu = languageSwitcher?.querySelector('.language-menu');
const languageLabel = languageSwitcher?.querySelector('[data-language-label]');

function setLanguageMenuOpen(isOpen) {
  if (!languageSwitcher || !languageButton) {
    return;
  }
  languageSwitcher.classList.toggle('is-open', isOpen);
  languageButton.setAttribute('aria-expanded', String(isOpen));
}

function closeLanguageMenu() {
  setLanguageMenuOpen(false);
}

function updateLanguageMenuSelection(lang) {
  if (!languageMenu) {
    return;
  }
  languageMenu.querySelectorAll('button[data-lang]').forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.setAttribute('aria-selected', String(isActive));
  });
}

function updateMetaTags(locale) {
  document.documentElement.lang = locale.htmlLang;
  document.title = locale.meta.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', locale.meta.description);
  }
}

const rotatingTextControllers = {};
let heroSyncTimer;

function stopHeroSyncRotation({ reset = false } = {}) {
  if (heroSyncTimer) {
    window.clearInterval(heroSyncTimer);
    heroSyncTimer = undefined;
  }
  if (reset) {
    const heroController = rotatingTextControllers.hero;
    const focusController = rotatingTextControllers.heroFocus;
    heroController?.setActiveIndex(0, { animate: false });
    focusController?.setActiveIndex(0, { animate: false });
  }
}

function startHeroSyncRotation() {
  stopHeroSyncRotation();
  const heroController = rotatingTextControllers.hero;
  const focusController = rotatingTextControllers.heroFocus;
  if (!heroController || !focusController) {
    return;
  }
  if (prefersReducedMotion.matches) {
    heroController.setActiveIndex(0, { animate: false });
    focusController.setActiveIndex(0, { animate: false });
    return;
  }
  heroController.setActiveIndex(focusController.getActiveIndex(), { animate: false });
  heroSyncTimer = window.setInterval(() => {
    const nextIndex = focusController.getActiveIndex() + 1;
    focusController.setActiveIndex(nextIndex, { animate: true });
    heroController.setActiveIndex(nextIndex, { animate: true });
  }, HERO_ROTATION_INTERVAL);
}

function restartHeroSyncRotation() {
  startHeroSyncRotation();
}

function createRotatingTextInstance({
  element,
  statements = [],
  interval = 5200,
  transitionDuration = HERO_TRANSITION_DURATION,
  autoRotate = true,
  onIndexChange
}) {
  if (!element || !Array.isArray(statements) || statements.length === 0) {
    return null;
  }

  let activeStatements = [...statements];
  let rotationTimer;
  let measurementTimer;
  let currentIndex = 0;

  const setMinHeight = () => {
    const parent = element.parentElement;
    if (!parent) {
      return;
    }

    const measurement = element.cloneNode(false);
    measurement.classList.add('is-measuring');
    measurement.setAttribute('aria-hidden', 'true');
    parent.appendChild(measurement);

    let maxHeight = 0;
    activeStatements.forEach((statement) => {
      measurement.textContent = statement;
      maxHeight = Math.max(maxHeight, measurement.offsetHeight);
    });

    element.style.minHeight = `${Math.ceil(maxHeight)}px`;
    measurement.remove();
  };

  const scheduleMinHeight = () => {
    window.clearTimeout(measurementTimer);
    measurementTimer = window.setTimeout(setMinHeight, 120);
  };

  const stopRotation = () => {
    if (rotationTimer) {
      window.clearInterval(rotationTimer);
      rotationTimer = undefined;
    }
  };

  const normalizeIndex = (index) => {
    if (activeStatements.length === 0) {
      return 0;
    }
    const length = activeStatements.length;
    return ((index % length) + length) % length;
  };

  const renderIndex = (index, { animate = true } = {}) => {
    if (!activeStatements.length) {
      return;
    }

    const targetIndex = normalizeIndex(index);
    const commit = () => {
      currentIndex = targetIndex;
      element.textContent = activeStatements[currentIndex];
      if (animate) {
        element.classList.remove('is-leaving');
        element.classList.add('is-entering');
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            element.classList.remove('is-entering');
          });
        });
      } else {
        element.classList.remove('is-entering', 'is-leaving');
      }
      onIndexChange?.(currentIndex, { animate });
    };

    if (!animate) {
      commit();
      return;
    }

    element.classList.add('is-leaving');
    window.setTimeout(commit, transitionDuration);
  };

  const startRotation = () => {
    if (!autoRotate || prefersReducedMotion.matches || activeStatements.length <= 1 || rotationTimer) {
      return;
    }
    rotationTimer = window.setInterval(() => {
      renderIndex(currentIndex + 1, { animate: true });
    }, interval);
  };

  const resetToFirstStatement = () => {
    renderIndex(0, { animate: false });
    scheduleMinHeight();
  };

  element.classList.remove('is-entering', 'is-leaving');
  renderIndex(0, { animate: false });
  setMinHeight();
  window.addEventListener('load', setMinHeight);
  window.addEventListener('resize', scheduleMinHeight);
  startRotation();

  return {
    handleMotionPreferenceChange: (matches) => {
      if (matches) {
        stopRotation();
        resetToFirstStatement();
      } else {
        startRotation();
      }
    },
    setStatements: (nextStatements) => {
      if (!Array.isArray(nextStatements) || nextStatements.length === 0) {
        return;
      }
      activeStatements = [...nextStatements];
      stopRotation();
      resetToFirstStatement();
      startRotation();
    },
    setActiveIndex: (index, options) => {
      renderIndex(index, options);
    },
    getActiveIndex: () => currentIndex
  };
}

function initRotatingTexts() {
  const heroFocusElement = document.querySelector('.hero-focus-text');
  const heroElement = document.querySelector('.hero-rotating-text');
  const servicesElement = document.querySelector('.services-rotating-text');
  const locale = getLocale();

  if (heroElement) {
    rotatingTextControllers.hero = createRotatingTextInstance({
      element: heroElement,
      statements: locale.hero.statements,
      interval: HERO_ROTATION_INTERVAL,
      autoRotate: !heroFocusElement
    });
  }

  if (heroFocusElement) {
    rotatingTextControllers.heroFocus = createRotatingTextInstance({
      element: heroFocusElement,
      statements: locale.hero.focusWords,
      interval: HERO_ROTATION_INTERVAL,
      autoRotate: false
    });
  }

  if (servicesElement) {
    rotatingTextControllers.services = createRotatingTextInstance({
      element: servicesElement,
      statements: locale.services.rotatingStatements,
      interval: 5600
    });
  }

  restartHeroSyncRotation();
}

initRotatingTexts();

const broadcastMotionPreferenceChange = (matches) => {
  Object.values(rotatingTextControllers).forEach((controller) => {
    controller?.handleMotionPreferenceChange(matches);
  });
  if (matches) {
    stopHeroSyncRotation({ reset: true });
  } else {
    restartHeroSyncRotation();
  }
};

if (typeof prefersReducedMotion.addEventListener === 'function') {
  prefersReducedMotion.addEventListener('change', (event) => broadcastMotionPreferenceChange(event.matches));
} else if (typeof prefersReducedMotion.addListener === 'function') {
  prefersReducedMotion.addListener((event) => broadcastMotionPreferenceChange(event.matches));
}

function applyLanguage(lang) {
  if (!translations[lang]) {
    return;
  }
  state.currentLanguage = lang;
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  const locale = translations[lang];
  updateMetaTags(locale);
  applyStaticTranslations(lang);
  if (languageLabel) {
    languageLabel.textContent = locale.languageName;
  }
  updateLanguageMenuSelection(lang);
  if (rotatingTextControllers.hero) {
    rotatingTextControllers.hero.setStatements(locale.hero.statements);
  }
  if (rotatingTextControllers.heroFocus) {
    rotatingTextControllers.heroFocus.setStatements(locale.hero.focusWords);
    restartHeroSyncRotation();
  } else {
    stopHeroSyncRotation();
  }
  if (rotatingTextControllers.services) {
    rotatingTextControllers.services.setStatements(locale.services.rotatingStatements);
  }
  if (state.lastAnalysisData) {
    renderAnalysis(state.lastAnalysisData);
  } else {
    const summaryText = document.getElementById('summary-text');
    if (summaryText) {
      summaryText.textContent = locale.pagespeed.summaryDefault;
    }
    const scoreValue = document.getElementById('performance-score');
    if (scoreValue) {
      scoreValue.textContent = locale.pagespeed.scoreUnavailable;
    }
  }
}

applyLanguage(state.currentLanguage);

if (languageButton) {
  languageButton.addEventListener('click', () => {
    const isOpen = languageSwitcher?.classList.contains('is-open');
    setLanguageMenuOpen(!isOpen);
  });
}

if (languageMenu) {
  languageMenu.addEventListener('click', (event) => {
    const target = event.target instanceof HTMLElement ? event.target.closest('button[data-lang]') : null;
    if (!target) {
      return;
    }
    const { lang } = target.dataset;
    if (lang && translations[lang]) {
      applyLanguage(lang);
    }
    closeLanguageMenu();
    languageButton?.focus();
  });
}

if (languageSwitcher) {
  document.addEventListener('click', (event) => {
    if (!languageSwitcher.contains(event.target)) {
      closeLanguageMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLanguageMenu();
    }
  });
}

const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
  currentYearElement.textContent = String(new Date().getFullYear());
}

const pagespeedForm = document.getElementById('pagespeed-form');
const loadingWrapper = document.getElementById('analysis-loading');
const loadingMeter = loadingWrapper?.querySelector('.progress-meter');
const loadingFill = document.getElementById('loading-fill');
const loadingValue = document.getElementById('loading-value');
const resultWrapper = document.getElementById('analysis-result');
const errorBox = document.getElementById('analysis-error');
const scoreValue = document.getElementById('performance-score');
const summaryText = document.getElementById('summary-text');

let progressTimer;
let currentProgress = 0;

function hideElement(element) {
  if (!element) {
    return;
  }
  element.setAttribute('hidden', '');
}

function showElement(element) {
  if (!element) {
    return;
  }
  element.removeAttribute('hidden');
}

function updateProgress(value) {
  const rounded = Math.max(0, Math.min(100, Math.round(value)));
  if (loadingFill) {
    loadingFill.style.width = `${rounded}%`;
  }
  if (loadingValue) {
    loadingValue.textContent = String(rounded);
  }
  if (loadingMeter) {
    loadingMeter.setAttribute('aria-valuenow', String(rounded));
  }
}

function startLoading() {
  stopLoadingTimer();
  currentProgress = 0;
  updateProgress(0);
  showElement(loadingWrapper);
  progressTimer = window.setInterval(() => {
    const increment = Math.random() * 6 + 1;
    currentProgress = Math.min(currentProgress + increment, 96);
    updateProgress(currentProgress);
    if (currentProgress >= 96) {
      stopLoadingTimer();
    }
  }, 160);
}

function finishLoading() {
  stopLoadingTimer();
  updateProgress(100);
  window.setTimeout(() => {
    hideElement(loadingWrapper);
  }, 400);
}

function stopLoadingTimer() {
  if (progressTimer) {
    window.clearInterval(progressTimer);
    progressTimer = undefined;
  }
}

function showError(message) {
  if (!errorBox) {
    alert(message);
    return;
  }
  errorBox.textContent = message;
  showElement(errorBox);
}

function normaliseUrl(value) {
  const hasProtocol = /^https?:\/\//i.test(value);
  const candidate = hasProtocol ? value : `https://${value}`;
  const url = new URL(candidate);
  if (!url.hostname.includes('.')) {
    throw new Error('Invalid hostname');
  }
  return url.toString();
}

function formatMetricValue(metric, value) {
  const locale = getLocale();
  if (metric.unit === 'seconds') {
    return `${formatNumberLocalized(value, metric.decimals)} ${locale.pagespeed.units.secondsShort}`;
  }
  if (metric.unit === 'milliseconds') {
    if (value >= 1000) {
      const seconds = value / 1000;
      return `${formatNumberLocalized(seconds, 1)} ${locale.pagespeed.units.secondsShort}`;
    }
    return `${formatNumberLocalized(value, 0)} ${locale.pagespeed.units.milliseconds}`;
  }
  if (metric.unit === 'unitless') {
    return formatNumberLocalized(value, metric.decimals);
  }
  return formatNumberLocalized(value, metric.decimals);
}

function formatMetricTarget(metric) {
  const locale = getLocale();
  if (metric.unit === 'seconds') {
    return `${formatNumberLocalized(metric.target, metric.decimals)} ${locale.pagespeed.units.secondsShort}`;
  }
  if (metric.unit === 'milliseconds') {
    return `${formatNumberLocalized(metric.target, 0)} ${locale.pagespeed.units.milliseconds}`;
  }
  if (metric.unit === 'unitless') {
    return formatNumberLocalized(metric.target, metric.decimals);
  }
  return String(metric.target);
}

function buildMetricEntries(lighthouseResult) {
  const entries = [];
  const locale = getLocale();

  METRIC_BASE.forEach((metric) => {
    const audit = lighthouseResult?.audits?.[metric.id];
    if (!audit || typeof audit.numericValue !== 'number') {
      return;
    }

    const convertedValue = metric.convert(audit.numericValue);
    const formattedValue = formatMetricValue(metric, convertedValue);
    const translationsForMetric = locale.pagespeed.metrics[metric.key];
    const thresholds = metric.thresholds;
    const status = evaluateStatus(convertedValue, thresholds);

    entries.push({
      id: metric.id,
      title: translationsForMetric.title,
      valueText: formattedValue,
      detail: formatTemplate(translationsForMetric.detail, {
        value: formattedValue,
        target: formatMetricTarget(metric)
      }),
      statusKey: status.key,
      statusText: status.text,
      statusClassSuffix: status.classSuffix
    });
  });

  return entries;
}

function evaluateStatus(value, thresholds) {
  const locale = getLocale();
  if (typeof value !== 'number') {
    return { key: 'unknown', text: locale.pagespeed.status.unknown, classSuffix: 'ok' };
  }

  if (value <= thresholds.good) {
    return { key: 'good', text: locale.pagespeed.status.good, classSuffix: 'good' };
  }

  if (value <= thresholds.ok) {
    return { key: 'ok', text: locale.pagespeed.status.ok, classSuffix: 'ok' };
  }

  return { key: 'poor', text: locale.pagespeed.status.poor, classSuffix: 'poor' };
}

function buildSummary(score, metrics) {
  const locale = getLocale();
  const summaryConfig = locale.pagespeed.summary;

  if (typeof score !== 'number') {
    return summaryConfig.noScore;
  }

  const summaryParts = [];

  if (score >= 90) {
    summaryParts.push(summaryConfig.high);
  } else if (score >= 65) {
    summaryParts.push(summaryConfig.medium);
  } else {
    summaryParts.push(summaryConfig.low);
  }

  const worstMetric = metrics.find((metric) => metric.statusKey === 'poor');
  const okMetric = metrics.find((metric) => metric.statusKey === 'ok');

  if (worstMetric) {
    summaryParts.push(formatTemplate(summaryConfig.poorMetric, { metric: worstMetric.title }));
  } else if (okMetric) {
    summaryParts.push(formatTemplate(summaryConfig.okMetric, { metric: okMetric.title }));
  } else {
    summaryParts.push(summaryConfig.allGood);
  }

  const findMetricById = (id) => metrics.find((metric) => metric.id === id);
  const fcp = findMetricById('first-contentful-paint');
  const lcp = findMetricById('largest-contentful-paint');
  const speedIndex = findMetricById('speed-index');
  const tbt = findMetricById('total-blocking-time');

  const detailParts = [];

  if (fcp) {
    detailParts.push(formatTemplate(summaryConfig.details.fcp, { value: fcp.valueText }));
  }
  if (lcp) {
    detailParts.push(formatTemplate(summaryConfig.details.lcp, { value: lcp.valueText }));
  }
  if (speedIndex) {
    detailParts.push(formatTemplate(summaryConfig.details.speedIndex, { value: speedIndex.valueText }));
  }
  if (tbt) {
    detailParts.push(formatTemplate(summaryConfig.details.tbt, { value: tbt.valueText }));
  }

  if (detailParts.length) {
    summaryParts.push(detailParts.join(' '));
  }

  return summaryParts.join(' ');
}

function setScoreValue(score) {
  if (!scoreValue) {
    return;
  }
  const locale = getLocale();
  if (typeof score === 'number') {
    scoreValue.textContent = formatTemplate(locale.pagespeed.scoreValueTemplate, { score: String(score) });
  } else {
    scoreValue.textContent = locale.pagespeed.scoreUnavailable;
  }
}

function renderAnalysis(data) {
  const lighthouseResult = data?.lighthouseResult;
  const scoreRaw = lighthouseResult?.categories?.performance?.score;
  const score = typeof scoreRaw === 'number' ? Math.round(scoreRaw * 100) : null;

  setScoreValue(score);

  const metrics = buildMetricEntries(lighthouseResult);

  if (summaryText) {
    summaryText.textContent = buildSummary(score, metrics);
  }

  state.lastAnalysisData = data;
  showElement(resultWrapper);
}

if (pagespeedForm) {
  pagespeedForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const urlInput = document.getElementById('pagespeed-url');
    if (!urlInput) {
      return;
    }

    const locale = getLocale();
    const rawValue = urlInput.value.trim();

    if (!rawValue) {
      showError(locale.pagespeed.errors.empty);
      return;
    }

    let normalisedUrl;

    try {
      normalisedUrl = normaliseUrl(rawValue);
    } catch (error) {
      showError(locale.pagespeed.errors.invalid);
      return;
    }

    hideElement(errorBox);
    hideElement(resultWrapper);

    startLoading();

    try {
      const apiUrl = `${PAGESPEED_ENDPOINT}?url=${encodeURIComponent(normalisedUrl)}&category=performance&strategy=mobile&locale=${locale.pagespeedLocale}&key=${PAGESPEED_API_KEY}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('API response failed');
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message || 'API error');
      }

      renderAnalysis(data);
      finishLoading();
    } catch (error) {
      finishLoading();
      showError(locale.pagespeed.errors.failed);
      console.error(error);
    }
  });
}
