// Initialize interactive features once DOM is parsed (script is deferred)
// Referenser till knappen och listan i navigationen
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('primary-navigation');

// Fortsätt bara om markup innehåller navigationen
if (menuToggle && navLinks) {
  // Hantera öppna/stäng meny och uppdatera aria-attribut
  const toggleMenu = () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  };

  // Klick på knappen växlar menyn
  menuToggle.addEventListener('click', toggleMenu);

  // Stäng menyn när användaren valt en länk
  navLinks.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.tagName === 'A' && navLinks.classList.contains('is-open')) {
      navLinks.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Tillåt Escape för att stänga menyn och återfokusera knappen
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navLinks.classList.contains('is-open')) {
      navLinks.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  });
}

// Uppdatera footer med nuvarande årtal
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
  // Sätt textinnehållet till årets siffra
  currentYearElement.textContent = String(new Date().getFullYear());
}

const PAGESPEED_API_KEY = 'AIzaSyBGQhx55E6-dIVVxr21hXg_7SCmUWr2vV4';
const PAGESPEED_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

const pagespeedForm = document.getElementById('pagespeed-form');

if (pagespeedForm) {
  const urlInput = document.getElementById('pagespeed-url');
  const loadingWrapper = document.getElementById('analysis-loading');
  const loadingMeter = loadingWrapper?.querySelector('.progress-meter');
  const loadingFill = document.getElementById('loading-fill');
  const loadingValue = document.getElementById('loading-value');
  const resultWrapper = document.getElementById('analysis-result');
  const errorBox = document.getElementById('analysis-error');
  const scoreValue = document.getElementById('performance-score');
  const summaryText = document.getElementById('summary-text');
  const metricList = document.getElementById('metric-list');
  const fieldList = document.getElementById('field-list');
  const tipsText = document.getElementById('tips-text');

  let progressTimer;
  let currentProgress = 0;

  const formatNumber = (value, maximumFractionDigits) => {
    return new Intl.NumberFormat('sv-SE', {
      minimumFractionDigits: 0,
      maximumFractionDigits
    }).format(value);
  };

  const metricConfig = [
    {
      id: 'first-contentful-paint',
      title: 'Tid tills något syns',
      convert: (value) => value / 1000,
      format: (seconds) => `${formatNumber(seconds, 1)} sek`,
      thresholds: { good: 1.8, ok: 3 },
      detail: (seconds, formatted) =>
        `Första intrycket dyker upp efter ${formatted}. Försök hålla dig under ${formatNumber(1.8, 1)} sekunder.`
    },
    {
      id: 'largest-contentful-paint',
      title: 'När huvudinnehållet syns',
      convert: (value) => value / 1000,
      format: (seconds) => `${formatNumber(seconds, 1)} sek`,
      thresholds: { good: 2.5, ok: 4 },
      detail: (seconds, formatted) =>
        `Det viktigaste innehållet syns efter ${formatted}. Ett bra mål är ${formatNumber(2.5, 1)} sekunder.`
    },
    {
      id: 'speed-index',
      title: 'Helhetskänslan av fart',
      convert: (value) => value / 1000,
      format: (seconds) => `${formatNumber(seconds, 1)} sek`,
      thresholds: { good: 3.4, ok: 5.8 },
      detail: (seconds, formatted) =>
        `Så lång tid tar det innan sidan ser färdig ut: ${formatted}. Satsa på max ${formatNumber(3.4, 1)} sekunder.`
    },
    {
      id: 'total-blocking-time',
      title: 'Hur snabbt knapparna reagerar',
      convert: (value) => value,
      format: (ms) => {
        if (ms >= 1000) {
          return `${formatNumber(ms / 1000, 1)} sek`;
        }
        return `${formatNumber(ms, 0)} ms`;
      },
      thresholds: { good: 200, ok: 600 },
      detail: (value, formatted) =>
        `Så lång fördröjning uppstår innan sidan svarar: ${formatted}. Håll den under ${formatNumber(200, 0)} ms.`
    },
    {
      id: 'cumulative-layout-shift',
      title: 'Hur stabil sidan känns',
      convert: (value) => value,
      format: (value) => formatNumber(value, 2),
      thresholds: { good: 0.1, ok: 0.25 },
      detail: (value, formatted) =>
        `Sidan hoppar omkring ${formatted}. För en lugn upplevelse – håll dig under ${formatNumber(0.1, 2)}.`
    }
  ];

  const fieldMetricConfig = [
    {
      keys: ['FIRST_CONTENTFUL_PAINT_MS'],
      title: 'När något syns för besökare',
      convert: (value) => value / 1000,
      format: (seconds) => `${formatNumber(seconds, 1)} sek`,
      goal: `Sikta på att något syns inom ${formatNumber(1.8, 1)} sekunder.`
    },
    {
      keys: ['LARGEST_CONTENTFUL_PAINT_MS'],
      title: 'När huvudinnehållet dyker upp',
      convert: (value) => value / 1000,
      format: (seconds) => `${formatNumber(seconds, 1)} sek`,
      goal: `För bästa upplevelse, se till att det viktiga syns före ${formatNumber(2.5, 1)} sekunder.`
    },
    {
      keys: ['INTERACTION_TO_NEXT_PAINT', 'EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT', 'FIRST_INPUT_DELAY_MS'],
      title: 'Hur snabbt knappar svarar',
      convert: (value) => value,
      format: (ms) => {
        if (ms >= 1000) {
          return `${formatNumber(ms / 1000, 1)} sek`;
        }
        return `${formatNumber(ms, 0)} ms`;
      },
      goal: 'Målet är att det ska gå under 200 ms från klick till respons.'
    },
    {
      keys: ['CUMULATIVE_LAYOUT_SHIFT_SCORE'],
      title: 'Hur stabil sidan känns',
      convert: (value) => value / 100,
      format: (value) => formatNumber(value, 2),
      goal: 'Håll siffran nära noll så slipper besökare hoppande element.'
    }
  ];

  const opportunityMessages = {
    'uses-optimized-images': 'komprimera bilderna',
    'efficient-animated-content': 'lätta på tunga animationer',
    'modern-image-formats': 'byta till modernare bildformat',
    'render-blocking-resources': 'låta sidan visa innehållet innan extra skript laddas',
    'unused-javascript': 'plocka bort skript som inte används',
    'unused-css-rules': 'rensa bort oanvänd designkod',
    'uses-text-compression': 'slå på komprimering så text laddar snabbare',
    'server-response-time': 'snabba upp serverns svarstid',
    'total-byte-weight': 'minska mängden data som laddas',
    'offscreen-images': 'ladda tunga bilder först när de syns på skärmen',
    'redirects': 'undvika onödiga omdirigeringar',
    'uses-responsive-images': 'skala ned bilderna till rätt storlek',
    'unused-third-party-code': 'plocka bort externa skript du inte använder',
    'uses-long-cache-ttl': 'låta återkommande besökare slippa ladda om allt',
    'uses-rel-preconnect': 'förbereda uppkopplingar till externa tjänster'
  };

  pagespeedForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!urlInput) {
      return;
    }

    const rawValue = urlInput.value.trim();

    if (!rawValue) {
      showError('Skriv in en webbadress, till exempel aftonbladet.se.');
      return;
    }

    let normalisedUrl;

    try {
      normalisedUrl = normaliseUrl(rawValue);
    } catch (error) {
      showError('Webbadressen verkar felstavad. Dubbelkolla och försök igen.');
      return;
    }

    hideElement(errorBox);
    hideElement(resultWrapper);

    startLoading();

    try {
      const apiUrl = `${PAGESPEED_ENDPOINT}?url=${encodeURIComponent(normalisedUrl)}&category=performance&strategy=mobile&locale=sv_SE&key=${PAGESPEED_API_KEY}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('API-svar misslyckades');
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message || 'API-fel');
      }

      renderAnalysis(data);
      finishLoading();
    } catch (error) {
      finishLoading();
      showError('Vi kunde tyvärr inte läsa in resultatet just nu. Försök igen om en liten stund.');
      console.error(error);
    }
  });

  const startLoading = () => {
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
  };

  const finishLoading = () => {
    stopLoadingTimer();
    updateProgress(100);
    window.setTimeout(() => {
      hideElement(loadingWrapper);
    }, 400);
  };

  const stopLoadingTimer = () => {
    if (progressTimer) {
      window.clearInterval(progressTimer);
      progressTimer = undefined;
    }
  };

  const updateProgress = (value) => {
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
  };

  const renderAnalysis = (data) => {
    const lighthouseResult = data?.lighthouseResult;
    const scoreRaw = lighthouseResult?.categories?.performance?.score;
    const score = typeof scoreRaw === 'number' ? Math.round(scoreRaw * 100) : null;

    if (scoreValue) {
      scoreValue.textContent = typeof score === 'number' ? `${score} av 100` : 'Ingen poäng';
    }

    const metrics = buildMetricEntries(lighthouseResult);
    renderMetrics(metrics);

    if (summaryText) {
      summaryText.textContent = buildSummary(score, metrics);
    }

    const fieldMetrics = getFieldMetrics(data);
    renderFieldMetrics(fieldMetrics);

    const opportunities = extractOpportunities(lighthouseResult);
    if (tipsText) {
      tipsText.textContent = buildTips(opportunities, score);
    }

    showElement(resultWrapper);
  };

  const buildMetricEntries = (lighthouseResult) => {
    const entries = [];

    metricConfig.forEach((config) => {
      const audit = lighthouseResult?.audits?.[config.id];
      if (!audit || typeof audit.numericValue !== 'number') {
        return;
      }

      const convertedValue = config.convert(audit.numericValue);
      const formattedValue = config.format(convertedValue);
      const status = evaluateStatus(convertedValue, config.thresholds);

      entries.push({
        title: config.title,
        valueText: formattedValue,
        detail: config.detail(convertedValue, formattedValue),
        statusKey: status.key,
        statusText: status.text,
        statusClassSuffix: status.classSuffix
      });
    });

    return entries;
  };

  const renderMetrics = (metrics) => {
    if (!metricList) {
      return;
    }

    metricList.innerHTML = '';

    if (!metrics.length) {
      const fallback = document.createElement('li');
      fallback.className = 'metric-item';
      fallback.textContent = 'Vi kunde inte läsa in nyckelpunkterna den här gången.';
      metricList.appendChild(fallback);
      return;
    }

    metrics.forEach((metric) => {
      const item = document.createElement('li');
      item.className = 'metric-item';

      const title = document.createElement('span');
      title.className = 'metric-title';
      title.textContent = metric.title;

      const detail = document.createElement('p');
      detail.className = 'metric-detail';
      detail.textContent = metric.detail;

      const status = document.createElement('span');
      status.className = `metric-status metric-status-${metric.statusClassSuffix}`;
      status.textContent = `${metric.statusText} – ${metric.valueText}`;

      item.append(title, status, detail);
      metricList.appendChild(item);
    });
  };

  const getFieldMetrics = (data) => {
    const loadingExperience = data?.loadingExperience?.metrics;
    const originExperience = data?.originLoadingExperience?.metrics;
    return Object.keys(loadingExperience || {}).length ? loadingExperience : originExperience || {};
  };

  const renderFieldMetrics = (metrics) => {
    if (!fieldList) {
      return;
    }

    fieldList.innerHTML = '';

    const items = buildFieldEntries(metrics);

    if (!items.length) {
      const fallback = document.createElement('li');
      fallback.className = 'field-item';
      fallback.textContent = 'Vi saknar tillräckligt med fältdata för den här sidan.';
      fieldList.appendChild(fallback);
      return;
    }

    items.forEach((itemData) => {
      const item = document.createElement('li');
      item.className = 'field-item';

      const title = document.createElement('span');
      title.className = 'field-title';
      title.textContent = itemData.title;

      const detail = document.createElement('p');
      detail.className = 'field-detail';
      detail.textContent = itemData.detail;

      item.append(title, detail);
      fieldList.appendChild(item);
    });
  };

  const buildFieldEntries = (metrics) => {
    const entries = [];

    fieldMetricConfig.forEach((config) => {
      const metricData = findMetric(metrics, config.keys);

      if (!metricData || typeof metricData.percentile !== 'number') {
        return;
      }

      const converted = config.convert(metricData.percentile);
      const formattedValue = config.format(converted);
      const category = describeCategory(metricData.category);
      const share = getDominantShare(metricData.distributions);

      let detail = `Ungefär ${formattedValue}.`;

      if (share) {
        detail = `${formattedValue} för cirka ${share.percentage}% av besökarna – de upplever det som ${share.label}.`;
      } else if (category) {
        detail = `${formattedValue}. Upplevs som ${category} för de flesta.`;
      }

      detail += ` ${config.goal}`;

      entries.push({
        title: config.title,
        detail
      });
    });

    return entries;
  };

  const extractOpportunities = (lighthouseResult) => {
    const audits = lighthouseResult?.audits || {};

    return Object.entries(audits)
      .filter(([, audit]) => audit?.details?.type === 'opportunity')
      .map(([id, audit]) => ({
        id,
        title: audit.title,
        savings: audit.details.overallSavingsMs || 0
      }))
      .sort((a, b) => b.savings - a.savings);
  };

  const buildTips = (opportunities, score) => {
    const actions = [];

    opportunities.forEach((opportunity) => {
      const action = mapOpportunity(opportunity.id, opportunity.title);
      if (action && !actions.includes(action)) {
        actions.push(action);
      }
    });

    if (!actions.length) {
      if (typeof score === 'number' && score >= 90) {
        return 'Din sida är redan pigg. Fortsätt hålla koll på bilder och uppdatera innehållet regelbundet.';
      }
      return 'Inga tydliga förbättringar stack ut. Håll extra koll på bilder, skript och serverns svarstid.';
    }

    if (actions.length === 1) {
      return `Störst effekt får du genom att ${actions[0]}.`;
    }

    if (actions.length === 2) {
      return `Börja med att ${actions[0]} och därefter ${actions[1]}.`;
    }

    return `Börja med att ${actions[0]}, fortsätt med att ${actions[1]} och avsluta med att ${actions[2]}.`;
  };

  const describeCategory = (category) => {
    if (category === 'FAST') {
      return 'snabbt';
    }
    if (category === 'AVERAGE') {
      return 'okej';
    }
    if (category === 'SLOW') {
      return 'långsamt';
    }
    return undefined;
  };

  const getDominantShare = (distributions) => {
    if (!Array.isArray(distributions) || distributions.length === 0) {
      return undefined;
    }

    const sorted = [...distributions].sort((a, b) => (b.proportion || 0) - (a.proportion || 0));
    const top = sorted[0];

    if (!top || typeof top.proportion !== 'number') {
      return undefined;
    }

    let label = 'okej';

    if (top.max <= 1800 || top.max <= 0.1) {
      label = 'snabbt';
    } else if (top.min >= 4000 || top.min >= 0.25) {
      label = 'långsamt';
    }

    return {
      percentage: Math.round(top.proportion * 100),
      label
    };
  };

  const mapOpportunity = (id, title) => {
    const lowerId = id.toLowerCase();

    if (opportunityMessages[lowerId]) {
      return opportunityMessages[lowerId];
    }

    const fuzzyMatch = Object.entries(opportunityMessages).find(([key]) => lowerId.includes(key));
    if (fuzzyMatch) {
      return fuzzyMatch[1];
    }

    if (title) {
      return 'gå igenom övriga åtgärder som rapporten tipsar om';
    }

    return undefined;
  };

  const evaluateStatus = (value, thresholds) => {
    if (typeof value !== 'number') {
      return { key: 'unknown', text: 'Data saknas', classSuffix: 'ok' };
    }

    if (value <= thresholds.good) {
      return { key: 'good', text: 'Känns snabbt', classSuffix: 'good' };
    }

    if (value <= thresholds.ok) {
      return { key: 'ok', text: 'Okej men kan vässas', classSuffix: 'ok' };
    }

    return { key: 'poor', text: 'Segt – prioritera detta', classSuffix: 'poor' };
  };

  const buildSummary = (score, metrics) => {
    if (typeof score !== 'number') {
      return 'Vi kunde inte få fram någon prestandapoäng just nu.';
    }

    let summary;

    if (score >= 90) {
      summary = 'Din sida laddar riktigt snabbt och ger ett starkt första intryck.';
    } else if (score >= 65) {
      summary = 'Din sida känns okej, men det finns tydliga vinster att hämta.';
    } else {
      summary = 'Din sida upplevs trög och riskerar att tappa besökare på vägen.';
    }

    const worstMetric = metrics.find((metric) => metric.statusKey === 'poor');
    const okMetric = metrics.find((metric) => metric.statusKey === 'ok');

    if (worstMetric) {
      summary += ` Mest tid går åt när ${worstMetric.title.toLowerCase()}.`;
    } else if (okMetric) {
      summary += ` Titta gärna på hur ${okMetric.title.toLowerCase()} kan bli ännu snabbare.`;
    } else {
      summary += ' Fortsätt hålla koll på bilder, skript och stabilitet så behåller du försprånget.';
    }

    return summary;
  };

  const showError = (message) => {
    if (!errorBox) {
      alert(message);
      return;
    }
    errorBox.textContent = message;
    showElement(errorBox);
  };

  const hideElement = (element) => {
    if (!element) {
      return;
    }
    element.setAttribute('hidden', '');
  };

  const showElement = (element) => {
    if (!element) {
      return;
    }
    element.removeAttribute('hidden');
  };

  const normaliseUrl = (value) => {
    const hasProtocol = /^https?:\/\//i.test(value);
    const candidate = hasProtocol ? value : `https://${value}`;
    const url = new URL(candidate);
    if (!url.hostname.includes('.')) {
      throw new Error('Invalid hostname');
    }
    return url.toString();
  };

  const findMetric = (metrics, keys) => {
    for (const key of keys) {
      if (metrics && metrics[key]) {
        return metrics[key];
      }
    }
    return undefined;
  };
}
