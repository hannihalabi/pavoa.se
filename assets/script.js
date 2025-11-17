const LANGUAGE_STORAGE_KEY = 'gmnordics-language';
const FALLBACK_LANGUAGE = 'sv';
const HERO_ROTATION_INTERVAL = 5200;
const HERO_TRANSITION_DURATION = 600;
const THEME_STORAGE_KEY = 'gmnordics-theme';
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};
const THEME_ICONS = {
  [THEMES.LIGHT]: '🏙️',
  [THEMES.DARK]: '🌇'
};

const translations = {
  sv: {
    languageName: 'Svenska',
    htmlLang: 'sv',
    numberFormat: 'sv-SE',
    meta: {
      title: 'GM NORDICS – Professionella hemsidor för företag',
      description: 'GM NORDICS bygger skräddarsydda, snabba och SEO-optimerade hemsidor för företag som vill växa tryggt och professionellt.'
    },
    brand: { name: 'GM NORDICS' },
    language: {
      buttonLabel: 'Byt språk',
      menuLabel: 'Välj språk'
    },
    theme: {
      toggleLabel: 'Byt tema'
    },
    nav: {
      services: 'Tjänster',
      process: 'Process',
      packages: 'Priser',
      contact: 'Kontakt',
      cta: 'Boka online',
      menuToggle: 'Visa meny'
    },
    hero: {
      eyebrow: 'För företagare',
      heading: 'Dominera din bransch, med vår kompetens',
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
        item2: 'En hel marknadsavdelning',
        item3: 'Ingen bindningstid',
        item4: 'Allt under samma tak',
        item5: 'Ren kod (ej wix/wordpress)',
        item6: 'Video, ljud och content ingår',
        item7: 'Dominera dina konkurrenter',
        item8: 'Personlig kontakt'
      }
    },
    calendarBooking: {
      heading: 'Bokning i Kalender'
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
    team: {
      eyebrow: 'Teamet',
      heading: 'Människorna bakom GM NORDICS',
      lead:
        'GM NORDICS är ett kompakt specialistteam där utvecklare, strateger och designers jobbar tätt ihop varje dag. Här är människorna du kommer att prata med från första möte till lanserad lösning.',
      carousel: {
        label: 'Teamets porträtt',
        prev: 'Föregående person',
        next: 'Nästa person',
        dots: 'Navigera mellan teammedlemmarna'
      },
      members: {
        jonas: {
          name: 'Jonas Åkerman',
          role: 'Lead Developer',
          bio: 'Kodar som en konservator: med respekt för det beständiga och med noggrannhet in i varje interaktion.'
        },
        anna: {
          name: 'Anna Bergström',
          role: 'Grundare & Creative Director',
          bio: 'Leder studion med en känsla för taktil typografi och en okuvlig vilja att göra plats för eftertänksam kommunikation.'
        },
        erik: {
          name: 'Erik Holm',
          role: 'Operativ chef',
          bio: 'Håller rytmen i varje leverans och ser till att kundresor och resurser är lika väl koreograferade som vår design.'
        },
        erika: {
          name: 'Erika Dahl',
          role: 'Kommunikationsstrateg',
          bio: 'Kuraterar våra manifest och tonlägen så att varje uppdrag fångar rätt temperament — från första rubriken till sista brödtexten.'
        },
        henrik: {
          name: 'Henrik Tiba',
          role: 'Affärsstrateg',
          bio: 'Tolkar marknadsdata med klassisk precision och knyter ihop våra kampanjer med affärsnyttan i centrum.'
        },
        johanna: {
          name: 'Johanna Fors',
          role: 'Design Lead',
          bio: 'Handplockar färger ur arkiven och binder samman digitala upplevelser med analoga principer.'
        },
        oscar: {
          name: 'Oscar Lind',
          role: 'Kundpartner',
          bio: 'Förvaltar relationer över generationer och är ofta den första som möter våra kunder i salongen.'
        },
        david: {
          name: 'David Nilsson',
          role: 'AI-specialist',
          bio: 'Driver våra AI-prototyper och ser till att automationer känns lika genomarbetade som den visuella upplevelsen.'
        },
        amanda: {
          name: 'Amanda Nilsson',
          role: 'Projektledare & kundansvarig',
          bio: 'För dialogen med våra kunder, syr ihop varje möte och ser till att varje leverans håller tempot och känslan som GM NORDICS står för.'
        }
      }
    },
    pricing: {
      heading: 'Tre prispaket för olika behov',
      lead: 'Välj den nivå som passar dig bäst – alla paket går att bygga ut när ditt företag växer.',
      popular: 'Mest populär',
      carousel: {
        label: 'Prispaket',
        prev: 'Föregående paket',
        next: 'Nästa paket',
        dots: 'Navigera mellan prispaketen'
      },
      base: {
        title: 'Bas',
        price: '6&nbsp;995 kr/månad',
        tagline: 'För en snabb och professionell start',
        feature1: 'Hemsida utvecklad i ren kod',
        feature2: 'Organisk trafik',
        feature3: 'Obegränsade e-postadresser',
        feature4: 'Webbhotell och domänadress',
        feature5: 'Ranka högt på Google',
        feature6: 'Logotypdesign och unik grafik',
        feature7: 'Support kontorstider',
        cta: 'Välj Bas'
      },
      plus: {
        title: 'Plus',
        price: '9&nbsp;995 kr/månad',
        tagline: 'För företag med behov av fler kunder',
        feature1: 'Allt i Bas',
        feature2: 'Uppdatering av sociala medier',
        feature3: 'Marknadsanalys',
        feature4: 'Bokningssystem',
        feature5: '10 e-postadresser',
        feature6: 'Marknadsföring',
        feature7: 'Reklamkampanjer i världsklass',
        feature8: 'Bild- ljud, och video för content',
        cta: 'Välj Plus'
      },
      premium: {
        title: 'Premium',
        price: '14&nbsp;995 kr/månad',
        tagline: 'Dominera din marknad och dina konkurrenter',
        feature1: 'Allt i Plus',
        feature2: 'Professionell 3D-design',
        feature3: 'AI-Agenter',
        feature4: 'Löpande bokföring',
        feature5: 'Apputveckling',
        feature6: 'Back-end-integration',
        feature7: 'AI-roboten Bloggi',
        feature8: 'SEO och GEO i världsklass',
        feature9: 'WooCommerce-integration',
        feature10: 'Databas och infrastruktur',
        feature11: 'E-handel och produktreklam',
        cta: 'Välj Premium'
      }
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
    meta: {
      title: 'GM NORDICS – Professional websites for growing companies',
      description: 'GM NORDICS designs and builds fast, SEO-ready websites for companies that want a trustworthy digital presence and predictable growth.'
    },
    brand: { name: 'GM NORDICS' },
    language: {
      buttonLabel: 'Change language',
      menuLabel: 'Select language'
    },
    theme: {
      toggleLabel: 'Toggle theme'
    },
    nav: {
      services: 'Services',
      process: 'Process',
      packages: 'Prices',
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
        item3: 'Everything under one roof',
        item4: 'Hand-coded builds (no Wix or WordPress)',
        item5: 'Complimentary prototype',
        item6: 'Own your niche',
        item7: 'Direct personal support 24/7',
        item8: 'No long-term contracts'
      }
    },
    calendarBooking: {
      heading: 'Calendar booking'
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
    team: {
      eyebrow: 'The team',
      heading: 'The people behind GM NORDICS',
      lead:
        'GM NORDICS is a compact specialist team where developers, strategists, and designers collaborate every day. Meet the people you will talk to from kickoff to launch.',
      carousel: {
        label: 'Team portraits',
        prev: 'Previous person',
        next: 'Next person',
        dots: 'Navigate between team members'
      },
      members: {
        jonas: {
          name: 'Jonas Åkerman',
          role: 'Lead Developer',
          bio: 'Codes like a conservator, with respect for what lasts and obsessive care for every interaction.'
        },
        anna: {
          name: 'Anna Bergström',
          role: 'Founder & Creative Director',
          bio: 'Leads the studio with a feel for tactile typography and an unstoppable drive to make space for thoughtful communication.'
        },
        erik: {
          name: 'Erik Holm',
          role: 'Operations Lead',
          bio: 'Keeps every delivery in rhythm so journeys and resources stay as choreographed as our design.'
        },
        erika: {
          name: 'Erika Dahl',
          role: 'Communications Strategist',
          bio: 'Curates our manifestos and tone of voice so each assignment captures the right temperament—from headline to long-form copy.'
        },
        henrik: {
          name: 'Henrik Tiba',
          role: 'Business Strategist',
          bio: 'Interprets market data with classical precision and ties every campaign back to measurable business value.'
        },
        johanna: {
          name: 'Johanna Fors',
          role: 'Design Lead',
          bio: 'Handpicks colors from the archives and links digital experiences with analog principles.'
        },
        oscar: {
          name: 'Oscar Lind',
          role: 'Client Partner',
          bio: 'Nurtures relationships across generations and is often the first person to welcome new clients.'
        },
        david: {
          name: 'David Nilsson',
          role: 'AI Specialist',
          bio: 'Builds AI prototypes and ensures our automation flows feel as refined as the rest of the experience.'
        },
        amanda: {
          name: 'Amanda Nilsson',
          role: 'Project Lead & Client Liaison',
          bio: 'Keeps communication flowing with our clients, coordinates every touchpoint, and makes sure each delivery keeps GM NORDICS\' pace and tone.'
        }
      }
    },
    pricing: {
      heading: 'Three packages for different needs',
      lead: 'Choose the tier that suits you – every package can grow with your company.',
      popular: 'Most popular',
      carousel: {
        label: 'Pricing packages',
        prev: 'Previous package',
        next: 'Next package',
        dots: 'Browse pricing packages'
      },
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
        feature3: 'AI agents',
        feature4: 'Ongoing bookkeeping',
        feature5: 'Application development',
        feature6: 'Back-end integration',
        feature7: 'AI-powered Bloggi assistant',
        feature8: 'World-class SEO and GEO',
        feature9: 'WooCommerce integration',
        feature10: 'Database and infrastructure',
        feature11: 'E-commerce and product ads',
        cta: 'Choose Premium'
      }
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
    meta: {
      title: 'GM NORDICS – Sitios web profesionales para pymes ambiciosas',
      description: 'GM NORDICS diseña y desarrolla sitios web rápidos y optimizados para SEO para empresas que necesitan una presencia digital fiable y crecimiento predecible.'
    },
    brand: { name: 'GM NORDICS' },
    language: {
      buttonLabel: 'Cambiar idioma',
      menuLabel: 'Elegir idioma'
    },
    theme: {
      toggleLabel: 'Cambiar tema'
    },
    nav: {
      services: 'Servicios',
      process: 'Proceso',
      packages: 'Precios',
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
        item3: 'Todo bajo el mismo techo',
        item4: 'Código propio (sin Wix ni WordPress)',
        item5: 'Prototipo sin coste',
        item6: 'Dominio en tu sector',
        item7: 'Contacto personal 24/7',
        item8: 'Sin compromiso a largo plazo'
      }
    },
    calendarBooking: {
      heading: 'Reserva en calendario'
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
    team: {
      eyebrow: 'El equipo',
      heading: 'Las personas detrás de GM NORDICS',
      lead:
        'GM NORDICS es un equipo compacto de especialistas donde desarrolladores, estrategas y diseñadores colaboran a diario. Conoce a las personas que te acompañan desde el primer encuentro hasta el lanzamiento.',
      carousel: {
        label: 'Retratos del equipo',
        prev: 'Persona anterior',
        next: 'Siguiente persona',
        dots: 'Navega entre los miembros del equipo'
      },
      members: {
        jonas: {
          name: 'Jonas Åkerman',
          role: 'Líder de desarrollo',
          bio: 'Programa como un conservador, con respeto por lo perdurable y una precisión obsesiva en cada interacción.'
        },
        anna: {
          name: 'Anna Bergström',
          role: 'Fundadora y directora creativa',
          bio: 'Dirige el estudio con sensibilidad por la tipografía táctil y un empeño incansable por dar espacio a una comunicación reflexiva.'
        },
        erik: {
          name: 'Erik Holm',
          role: 'Director de operaciones',
          bio: 'Mantiene el ritmo de cada entrega para que los recorridos de cliente y los recursos estén tan coreografiados como nuestro diseño.'
        },
        erika: {
          name: 'Erika Dahl',
          role: 'Estratega de comunicación',
          bio: 'Curadora de nuestros manifiestos y tonos de voz para que cada encargo capture el temperamento correcto, del titular al cuerpo del texto.'
        },
        henrik: {
          name: 'Henrik Tiba',
          role: 'Estratega de negocio',
          bio: 'Interpreta los datos de mercado con precisión clásica y conecta cada campaña con el retorno del negocio.'
        },
        johanna: {
          name: 'Johanna Fors',
          role: 'Líder de diseño',
          bio: 'Selecciona colores de los archivos y une experiencias digitales con principios analógicos.'
        },
        oscar: {
          name: 'Oscar Lind',
          role: 'Socio de clientes',
          bio: 'Cultiva relaciones a lo largo de generaciones y suele ser la primera persona que recibe a nuestros clientes.'
        },
        david: {
          name: 'David Nilsson',
          role: 'Especialista en IA',
          bio: 'Crea prototipos con IA y se asegura de que las automatizaciones se sientan tan cuidadas como el diseño.'
        },
        amanda: {
          name: 'Amanda Nilsson',
          role: 'Líder de proyectos y enlace con clientes',
          bio: 'Mantiene viva la comunicación con nuestros clientes, organiza cada punto de contacto y garantiza que cada entrega conserve el ritmo y el tono de GM NORDICS.'
        }
      }
    },
    pricing: {
      heading: 'Tres planes para necesidades distintas',
      lead: 'Elige el plan que más te convenga: todos pueden crecer con tu empresa.',
      popular: 'El más elegido',
      carousel: {
        label: 'Planes de precios',
        prev: 'Plan anterior',
        next: 'Plan siguiente',
        dots: 'Navega entre los planes disponibles'
      },
      base: {
        title: 'Base',
        price: '€130 / mes',
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
        price: '€220 / mes',
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
        price: '€695 / mes',
        tagline: 'Domina tu mercado y a la competencia',
        feature1: 'Todo lo del plan Plus',
        feature2: 'Diseño 3D creado por expertos',
        feature3: 'Agentes de IA',
        feature4: 'Contabilidad continua',
        feature5: 'Desarrollo de aplicaciones',
        feature6: 'Integración back-end',
        feature7: 'Robot de IA Bloggi',
        feature8: 'SEO y GEO de primer nivel',
        feature9: 'Integración con WooCommerce',
        feature10: 'Base de datos e infraestructura',
        feature11: 'Comercio electrónico y anuncios de productos',
        cta: 'Elegir Premium'
      }
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
    meta: {
      title: 'GM NORDICS – Siti web professionali per aziende in crescita',
      description: 'GM NORDICS progetta e sviluppa siti veloci e ottimizzati per la SEO per aziende che vogliono una presenza digitale credibile e risultati prevedibili.'
    },
    brand: { name: 'GM NORDICS' },
    language: {
      buttonLabel: 'Cambia lingua',
      menuLabel: 'Seleziona lingua'
    },
    theme: {
      toggleLabel: 'Cambia tema'
    },
    nav: {
      services: 'Servizi',
      process: 'Processo',
      packages: 'Prezzi',
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
        item3: 'Tutto sotto lo stesso tetto',
        item4: 'Sviluppo su misura (niente Wix o WordPress)',
        item5: 'Prototipo gratuito',
        item6: 'Leadership nel tuo settore',
        item7: 'Referente personale 24/7',
        item8: 'Nessun vincolo a lungo termine'
      }
    },
    calendarBooking: {
      heading: 'Prenotazione in calendario'
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
    team: {
      eyebrow: 'Il team',
      heading: 'Le persone dietro GM NORDICS',
      lead:
        'GM NORDICS è un team compatto di specialisti in cui sviluppatori, strategist e designer lavorano fianco a fianco ogni giorno. Ecco le persone con cui parlerai dal kickoff al lancio.',
      carousel: {
        label: 'Ritratti del team',
        prev: 'Persona precedente',
        next: 'Persona successiva',
        dots: 'Naviga tra i membri del team'
      },
      members: {
        jonas: {
          name: 'Jonas Åkerman',
          role: 'Lead Developer',
          bio: 'Scrive codice come un conservatore, con rispetto per ciò che dura e una cura maniacale per ogni interazione.'
        },
        anna: {
          name: 'Anna Bergström',
          role: 'Fondatrice e Creative Director',
          bio: 'Guida lo studio con un gusto per la tipografia tattile e una volontà instancabile di dare spazio a una comunicazione ponderata.'
        },
        erik: {
          name: 'Erik Holm',
          role: 'Responsabile operativo',
          bio: 'Mantiene il ritmo di ogni consegna così che journey e risorse siano coreografati quanto il nostro design.'
        },
        erika: {
          name: 'Erika Dahl',
          role: 'Stratega della comunicazione',
          bio: 'Cura i nostri manifesti e il tono di voce così che ogni incarico catturi il temperamento giusto, dal titolo al body copy.'
        },
        henrik: {
          name: 'Henrik Tiba',
          role: 'Stratega di business',
          bio: "Legge i dati di mercato con precisione classica e collega ogni campagna al valore per l'azienda."
        },
        johanna: {
          name: 'Johanna Fors',
          role: 'Design Lead',
          bio: 'Seleziona colori dagli archivi e intreccia esperienze digitali con principi analogici.'
        },
        oscar: {
          name: 'Oscar Lind',
          role: 'Client Partner',
          bio: 'Coltiva relazioni tra generazioni ed è spesso il primo volto che accoglie i clienti.'
        },
        david: {
          name: 'David Nilsson',
          role: 'Specialista AI',
          bio: 'Realizza prototipi AI e garantisce che i flussi automatizzati siano curati quanto il design.'
        },
        amanda: {
          name: 'Amanda Nilsson',
          role: 'Project lead e referente clienti',
          bio: 'Mantiene il dialogo con i clienti, coordina ogni touchpoint e assicura che ogni consegna mantenga ritmo e tono firmati GM NORDICS.'
        }
      }
    },
    pricing: {
      heading: 'Tre pacchetti per esigenze diverse',
      lead: 'Scegli il pacchetto che fa per te: ognuno può crescere insieme alla tua azienda.',
      popular: 'Il più scelto',
      carousel: {
        label: 'Pacchetti disponibili',
        prev: 'Pacchetto precedente',
        next: 'Pacchetto successivo',
        dots: 'Naviga tra i pacchetti'
      },
      base: {
        title: 'Base',
        price: '€130 / mese',
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
        price: '€220 / mese',
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
        price: '€695 / mese',
        tagline: 'Per dominare il tuo mercato e i concorrenti',
        feature1: 'Tutto del pacchetto Plus',
        feature2: 'Design 3D curato da esperti',
        feature3: 'Agenti IA',
        feature4: 'Contabilità continuativa',
        feature5: 'Sviluppo di applicazioni',
        feature6: 'Integrazione back-end',
        feature7: 'Robot IA Bloggi',
        feature8: 'SEO e GEO di livello mondiale',
        feature9: 'Integrazione WooCommerce',
        feature10: 'Database e infrastruttura',
        feature11: 'E-commerce e promozione prodotti',
        cta: 'Scegli Premium'
      }
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

const storedThemePreference = window.localStorage.getItem(THEME_STORAGE_KEY);
const hasStoredThemePreference =
  storedThemePreference === THEMES.LIGHT || storedThemePreference === THEMES.DARK;
const initialTheme = hasStoredThemePreference ? storedThemePreference : THEMES.DARK;
let isThemePreferenceLocked = hasStoredThemePreference;

const state = {
  currentLanguage: FALLBACK_LANGUAGE,
  currentTheme: initialTheme
};

document.documentElement.setAttribute('data-theme', state.currentTheme);

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function updateThemeToggleUI() {
  if (typeof themeToggleButton !== 'undefined' && themeToggleButton) {
    themeToggleButton.setAttribute('aria-pressed', String(state.currentTheme === THEMES.DARK));
  }
  if (typeof themeIcon !== 'undefined' && themeIcon) {
    const iconKey = state.currentTheme === THEMES.DARK ? THEMES.DARK : THEMES.LIGHT;
    themeIcon.textContent = THEME_ICONS[iconKey];
  }
}

function applyTheme(theme, { persist = true } = {}) {
  if (theme !== THEMES.LIGHT && theme !== THEMES.DARK) {
    return;
  }
  state.currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeToggleUI();
  if (persist) {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }
}

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
const themeToggleButton = document.querySelector('.theme-button');
const themeIcon = document.querySelector('[data-theme-icon]');

updateThemeToggleUI();

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', () => {
    const nextTheme = state.currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    isThemePreferenceLocked = true;
    applyTheme(nextTheme);
  });
}

if (typeof prefersDarkScheme.addEventListener === 'function') {
  prefersDarkScheme.addEventListener('change', (event) => {
    if (!isThemePreferenceLocked) {
      applyTheme(event.matches ? THEMES.DARK : THEMES.LIGHT, { persist: false });
    }
  });
} else if (typeof prefersDarkScheme.addListener === 'function') {
  prefersDarkScheme.addListener((event) => {
    if (!isThemePreferenceLocked) {
      applyTheme(event.matches ? THEMES.DARK : THEMES.LIGHT, { persist: false });
    }
  });
}

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
let teamCarouselController = null;
let pricingCarouselController = null;

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
  teamCarouselController?.refreshLabels();
  pricingCarouselController?.refreshLabels();
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

function initResponsiveCarousel({
  rootSelector,
  windowSelector,
  trackSelector,
  cardSelector,
  prevSelector,
  nextSelector,
  dotsSelector,
  dotClassName,
  readyClass,
  sliderBreakpoint = '(max-width: 900px)',
  getDotLabel,
  defaultIndex = 0
}) {
  const carousel = typeof rootSelector === 'string' ? document.querySelector(rootSelector) : rootSelector;
  if (!carousel) {
    return null;
  }

  const track = carousel.querySelector(trackSelector);
  const viewport = carousel.querySelector(windowSelector);
  const prevBtn = carousel.querySelector(prevSelector);
  const nextBtn = carousel.querySelector(nextSelector);
  const dotsContainer = carousel.querySelector(dotsSelector);

  if (!track || !viewport) {
    return null;
  }

  if (readyClass) {
    document.body.classList.add(readyClass);
  }

  const cards = Array.from(track.querySelectorAll(cardSelector));
  const useBreakpoint = typeof sliderBreakpoint === 'string' && sliderBreakpoint.length > 0;
  const mediaQuery = useBreakpoint ? window.matchMedia(sliderBreakpoint) : null;
  const hasMultipleCards = cards.length > 1;
  const clampIndex = (index) => Math.max(0, Math.min(cards.length - 1, index));
  const isSliderActive = () => hasMultipleCards && (!mediaQuery || mediaQuery.matches);
  let currentIndex = clampIndex(Number.isFinite(defaultIndex) ? defaultIndex : 0);
  let startX = 0;
  let deltaX = 0;
  let baseTranslate = 0;
  let isDragging = false;
  let slideWidth = 0;
  let dots = [];

  const updateButtons = () => {
    if (!prevBtn || !nextBtn) {
      return;
    }
    const active = isSliderActive();
    prevBtn.disabled = !active || currentIndex === 0;
    nextBtn.disabled = !active || currentIndex === cards.length - 1;
  };

  const updateDots = () => {
    if (!dots.length) {
      return;
    }
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  };

  const refreshDotLabels = () => {
    if (!dots.length) {
      return;
    }
    dots.forEach((dot, index) => {
      const label =
        typeof getDotLabel === 'function'
          ? getDotLabel(cards[index], index)
          : cards[index]?.querySelector('h3')?.textContent?.trim();
      dot.setAttribute('aria-label', label || `Slide ${index + 1}`);
    });
  };

  const computeSlideWidth = () => {
    if (!isSliderActive()) {
      return 0;
    }
    const firstCard = cards[0];
    if (!firstCard) {
      return viewport.offsetWidth;
    }
    const trackStyles = window.getComputedStyle(track);
    const gapValue = trackStyles.gap || trackStyles.columnGap || trackStyles.rowGap || '0';
    const gap = Number.parseFloat(gapValue) || 0;
    return firstCard.offsetWidth + gap;
  };

  const applyTranslate = () => {
    if (!isSliderActive()) {
      track.style.transform = '';
      slideWidth = 0;
      return;
    }
    slideWidth = computeSlideWidth();
    baseTranslate = -currentIndex * slideWidth;
    track.style.transform = `translateX(${baseTranslate}px)`;
  };

  const snapWithoutAnimation = () => {
    track.style.transition = 'none';
    applyTranslate();
    requestAnimationFrame(() => {
      track.style.transition = '';
    });
  };

  const moveToIndex = (index) => {
    if (!isSliderActive()) {
      return;
    }
    const targetIndex = clampIndex(index);
    if (targetIndex === currentIndex) {
      applyTranslate();
      return;
    }
    currentIndex = targetIndex;
    track.style.transition = 'transform 0.5s cubic-bezier(0.55, 0, 0.1, 1)';
    applyTranslate();
    updateDots();
    updateButtons();
  };

  const handleNav = (direction) => {
    moveToIndex(currentIndex + direction);
  };

  const handleDragStart = (event) => {
    if (!isSliderActive()) {
      return;
    }
    isDragging = true;
    startX = event.touches ? event.touches[0].clientX : event.clientX;
    deltaX = 0;
    slideWidth = computeSlideWidth();
    baseTranslate = -currentIndex * slideWidth;
    track.style.transition = 'none';
  };

  const handleDragMove = (event) => {
    if (!isDragging || !isSliderActive()) {
      return;
    }
    const currentX = event.touches ? event.touches[0].clientX : event.clientX;
    deltaX = currentX - startX;
    track.style.transform = `translateX(${baseTranslate + deltaX}px)`;
  };

  const handleDragEnd = () => {
    if (!isDragging || !isSliderActive()) {
      return;
    }
    isDragging = false;
    const threshold = slideWidth * 0.15;
    if (deltaX > threshold) {
      currentIndex = clampIndex(currentIndex - 1);
    } else if (deltaX < -threshold) {
      currentIndex = clampIndex(currentIndex + 1);
    }
    track.style.transition = 'transform 0.45s cubic-bezier(0.55, 0, 0.1, 1)';
    applyTranslate();
    updateDots();
    updateButtons();
    deltaX = 0;
  };

  const handleLayoutChange = () => {
    const active = isSliderActive();
    if (!active) {
      track.style.transition = '';
      track.style.transform = '';
      currentIndex = 0;
      slideWidth = 0;
    } else {
      if (!Number.isFinite(defaultIndex) || defaultIndex >= cards.length) {
        currentIndex = clampIndex(currentIndex);
      } else {
        currentIndex = clampIndex(defaultIndex);
      }
      snapWithoutAnimation();
      updateDots();
    }
    updateButtons();
  };

  const createDots = () => {
    if (!dotsContainer) {
      return;
    }
    dotsContainer.innerHTML = '';
    if (!hasMultipleCards) {
      dots = [];
      return;
    }
    dots = cards.map((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = dotClassName || 'carousel-dot';
      dotsContainer.appendChild(dot);
      dot.addEventListener('click', () => moveToIndex(index));
      return dot;
    });
    refreshDotLabels();
  };

  if (mediaQuery) {
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleLayoutChange);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handleLayoutChange);
    }
  }

  window.addEventListener('resize', () => {
    if (isSliderActive()) {
      snapWithoutAnimation();
    } else {
      track.style.transform = '';
    }
  });

  prevBtn?.addEventListener('click', () => handleNav(-1));
  nextBtn?.addEventListener('click', () => handleNav(1));

  createDots();
  updateDots();
  updateButtons();
  if (isSliderActive()) {
    snapWithoutAnimation();
  }

  track.addEventListener('touchstart', handleDragStart, { passive: true });
  track.addEventListener('touchmove', handleDragMove, { passive: true });
  track.addEventListener('touchend', handleDragEnd);
  track.addEventListener('touchcancel', handleDragEnd);

  track.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch' || !isSliderActive()) {
      return;
    }
    event.preventDefault();
    handleDragStart(event);
    const moveListener = (moveEvent) => handleDragMove(moveEvent);
    const upListener = () => {
      handleDragEnd();
      window.removeEventListener('pointermove', moveListener);
      window.removeEventListener('pointerup', upListener);
      window.removeEventListener('pointercancel', upListener);
    };
    window.addEventListener('pointermove', moveListener);
    window.addEventListener('pointerup', upListener);
    window.addEventListener('pointercancel', upListener);
  });

  return {
    refreshLabels: () => refreshDotLabels()
  };
}

function setupSellingVideoAutoplay() {
  const video = document.querySelector('[data-autoplay-when-visible]');
  if (!video || !('IntersectionObserver' in window)) {
    return;
  }

  const lockedClass = 'selling-video-locked';
  video.classList.add(lockedClass);
  video.controls = false;
  video.removeAttribute('controls');

  const interactionEvents = ['click', 'keydown', 'touchstart'];
  let awaitingUserGesture = false;
  let observer = null;
  let isVideoVisible = false;

  function ensureSoundEnabled() {
    video.muted = false;
    video.volume = 1;
  }

  function requestUserGesture() {
    if (awaitingUserGesture) {
      return;
    }

    awaitingUserGesture = true;

    const handleGesture = () => {
      interactionEvents.forEach((event) => window.removeEventListener(event, handleGesture));
      awaitingUserGesture = false;
      playVideo(true);
    };

    interactionEvents.forEach((event) => window.addEventListener(event, handleGesture));
  }

  function playVideo(triggeredByUser = false) {
    ensureSoundEnabled();
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch((error) => {
        if (!triggeredByUser) {
          requestUserGesture();
        }
        console.warn('Autoplay för säljavideon misslyckades', error);
      });
    }
  }

  const pauseVideo = () => {
    if (!video.paused) {
      video.pause();
    }
  };

  video.addEventListener('play', ensureSoundEnabled);

  video.addEventListener('ended', () => {
    if (isVideoVisible) {
      video.currentTime = 0;
      playVideo();
    }
  });

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target !== video) {
          return;
        }

        if (entry.intersectionRatio >= 0.95) {
          isVideoVisible = true;
          playVideo();
        } else {
          isVideoVisible = false;
          pauseVideo();
        }
      });
    },
    { threshold: [0.25, 0.5, 0.75, 0.95, 1] }
  );

  observer.observe(video);
}

teamCarouselController = initResponsiveCarousel({
  rootSelector: '[data-team-carousel]',
  windowSelector: '.team-carousel-window',
  trackSelector: '[data-team-track]',
  cardSelector: '[data-team-card]',
  prevSelector: '[data-team-prev]',
  nextSelector: '[data-team-next]',
  dotsSelector: '[data-team-dots]',
  dotClassName: 'team-carousel-dot',
  readyClass: 'team-carousel-ready',
  getDotLabel: (card) => card?.querySelector('[data-team-name]')?.textContent?.trim()
});

pricingCarouselController = initResponsiveCarousel({
  rootSelector: '[data-pricing-carousel]',
  windowSelector: '.pricing-carousel-window',
  trackSelector: '[data-pricing-track]',
  cardSelector: '[data-pricing-card]',
  prevSelector: '[data-pricing-prev]',
  nextSelector: '[data-pricing-next]',
  dotsSelector: '[data-pricing-dots]',
  dotClassName: 'pricing-carousel-dot',
  getDotLabel: (card) => card?.querySelector('h3')?.textContent?.trim(),
  defaultIndex: 1
});
setupSellingVideoAutoplay();
