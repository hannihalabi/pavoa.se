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

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const createRotatingTextInstance = ({ element, statements, interval = 5200, transitionDuration = 600 }) => {
  if (!element || !Array.isArray(statements) || statements.length === 0) {
    return null;
  }

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
    statements.forEach((statement) => {
      measurement.textContent = statement;
      const height = measurement.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    element.style.minHeight = `${Math.ceil(maxHeight)}px`;
    measurement.remove();
  };

  const scheduleMinHeight = () => {
    window.clearTimeout(measurementTimer);
    measurementTimer = window.setTimeout(setMinHeight, 120);
  };

  const animate = () => {
    element.classList.add('is-leaving');

    window.setTimeout(() => {
      currentIndex = (currentIndex + 1) % statements.length;
      element.textContent = statements[currentIndex];
      element.classList.remove('is-leaving');
      element.classList.add('is-entering');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.classList.remove('is-entering');
        });
      });
    }, transitionDuration);
  };

  const stopRotation = () => {
    if (rotationTimer) {
      window.clearInterval(rotationTimer);
      rotationTimer = undefined;
    }
  };

  const startRotation = () => {
    if (prefersReducedMotion.matches || statements.length <= 1 || rotationTimer) {
      return;
    }
    rotationTimer = window.setInterval(animate, interval);
  };

  const resetToFirstStatement = () => {
    currentIndex = 0;
    element.classList.remove('is-entering', 'is-leaving');
    element.textContent = statements[0];
    scheduleMinHeight();
  };

  element.textContent = statements[0];
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
    }
  };
};

const rotatingTextInstances = [];

const registerRotatingText = (config) => {
  const instance = createRotatingTextInstance(config);
  if (instance) {
    rotatingTextInstances.push(instance);
  }
};

registerRotatingText({
  element: document.querySelector('.hero-rotating-text'),
  statements: [
    'Vi hjälper nystartade och etablerade företag att lansera eller optimera tydliga, professionella webbplatser som fungerar lika bra i mobilen som på datorn och är optimerade för att synas på Google och ChatGPT.',
    'Vi tar fram struktur, design och copy som guidar besökare från första intryck till affär – utan att du behöver samordna flera leverantörer.',
    'Teknik, SEO, support och löpande optimering ingår så att du kan lansera snabbt och fortsätta växa utan oväntade kostnader.'
  ],
  interval: 5200
});

registerRotatingText({
  element: document.querySelector('.services-rotating-text'),
  statements: [
    'Allt du behöver för att lansera med självförtroende – från första designskiss till live-sajt.',
    'Vi kombinerar strategi, design och teknik så att lanseringen känns trygg från start till mål.',
    'Ett och samma team guidar dig genom skiss, copy, bygg och lansering utan onödiga stopp.'
  ],
  interval: 5600
});

const broadcastMotionPreferenceChange = (matches) => {
  rotatingTextInstances.forEach((instance) => instance.handleMotionPreferenceChange(matches));
};

if (typeof prefersReducedMotion.addEventListener === 'function') {
  prefersReducedMotion.addEventListener('change', (event) => broadcastMotionPreferenceChange(event.matches));
} else if (typeof prefersReducedMotion.addListener === 'function') {
  prefersReducedMotion.addListener((event) => broadcastMotionPreferenceChange(event.matches));
}

// Uppdatera footer med nuvarande årtal
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
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

    if (summaryText) {
      summaryText.textContent = buildSummary(score, metrics);
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
        id: config.id,
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

    const summaryParts = [];

    if (score >= 90) {
      summaryParts.push('Din sida laddar riktigt snabbt och ger ett starkt första intryck.');
    } else if (score >= 65) {
      summaryParts.push('Din sida känns okej, men det finns tydliga vinster att hämta.');
    } else {
      summaryParts.push('Din sida upplevs trög och riskerar att tappa besökare på vägen.');
    }

    const worstMetric = metrics.find((metric) => metric.statusKey === 'poor');
    const okMetric = metrics.find((metric) => metric.statusKey === 'ok');

    if (worstMetric) {
      summaryParts.push(`Mest tid går åt när ${worstMetric.title.toLowerCase()}.`);
    } else if (okMetric) {
      summaryParts.push(`Titta gärna på hur ${okMetric.title.toLowerCase()} kan bli ännu snabbare.`);
    } else {
      summaryParts.push('Fortsätt hålla koll på bilder, skript och stabilitet så behåller du försprånget.');
    }

    const findMetricById = (id) => metrics.find((metric) => metric.id === id);

    const fcp = findMetricById('first-contentful-paint');
    const lcp = findMetricById('largest-contentful-paint');
    const speedIndex = findMetricById('speed-index');
    const tbt = findMetricById('total-blocking-time');

    const detailParts = [];

    if (fcp) {
      detailParts.push(`Första intrycket syns efter ${fcp.valueText}.`);
    }
    if (lcp) {
      detailParts.push(`Huvudinnehållet är på plats efter ${lcp.valueText}.`);
    }
    if (speedIndex) {
      detailParts.push(`Helhetskänslan av fart landar på ${speedIndex.valueText}.`);
    }
    if (tbt) {
      detailParts.push(`Knappar svarar efter ${tbt.valueText}.`);
    }

    if (detailParts.length) {
      summaryParts.push(detailParts.join(' '));
    }

    return summaryParts.join(' ');
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
}
