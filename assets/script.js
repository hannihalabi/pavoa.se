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

// PageSpeed Insights-integration
const pageSpeedForm = document.getElementById('pagespeed-form');
if (pageSpeedForm) {
  const pageSpeedUrlInput = document.getElementById('pagespeed-url');
  const pageSpeedStrategySelect = document.getElementById('pagespeed-strategy');
  const pageSpeedSubmit = document.getElementById('pagespeed-submit');
  const pageSpeedStatus = document.getElementById('pagespeed-status');
  const pageSpeedFormCard = document.getElementById('pagespeed-form-card');
  const pageSpeedResultCard = document.getElementById('pagespeed-result');

  if (!pageSpeedUrlInput || !pageSpeedStrategySelect || !pageSpeedSubmit || !pageSpeedStatus || !pageSpeedFormCard || !pageSpeedResultCard) {
    return;
  }

  const PAGESPEED_API_KEY = 'AIzaSyBGQhx55E6-dIVVxr21hXg_7SCmUWr2vV4';
  const PAGESPEED_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

  const resolveScoreClass = (score) => {
    if (score >= 80) return 'score-high';
    if (score >= 51) return 'score-medium';
    return 'score-low';
  };

  const describeScore = (score) => {
    if (score >= 90) {
      return {
        label: 'Toppen!',
        message: 'Din sida laddar mycket snabbt och ger en riktigt bra upplevelse.'
      };
    }
    if (score >= 70) {
      return {
        label: 'Stabilt',
        message: 'Prestandan är helt okej men du kan vinna på att följa rekommendationerna.'
      };
    }
    if (score >= 50) {
      return {
        label: 'Behöver förbättras',
        message: 'Besökare upplever väntetid. Gå igenom förslagen för att snabba upp sidan.'
      };
    }
    return {
      label: 'Långsam',
      message: 'Sidan är långsam att ladda och riskerar att tappa besökare. Åtgärda förslagen så snart som möjligt.'
    };
  };

  const createMetricList = (audits) => {
    const metricKeys = [
      { id: 'first-contentful-paint', label: 'När något syns på sidan' },
      { id: 'largest-contentful-paint', label: 'När huvudinnehållet laddat klart' },
      { id: 'total-blocking-time', label: 'Tid sidan känns låst' },
      { id: 'speed-index', label: 'Upplevd laddningshastighet' },
      { id: 'cumulative-layout-shift', label: 'Hur mycket sidan hoppar runt' }
    ];

    return metricKeys
      .map(({ id, label }) => {
        const audit = audits[id];
        if (!audit) return '';
        const value = audit.displayValue || 'N/A';
        return `<li><span>${label}</span><span>${value}</span></li>`;
      })
      .join('');
  };

  const formatMilliseconds = (value) => {
    if (value >= 10000) return `${Math.round(value / 1000).toLocaleString('sv-SE')} s`;
    if (value >= 1000) return `${(value / 1000).toLocaleString('sv-SE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} s`;
    return `${Math.round(value).toLocaleString('sv-SE')} ms`;
  };

  const formatClsScore = (value) => (value / 100).toLocaleString('sv-SE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const createFieldMetrics = (metrics) => {
    if (!metrics) return '';

    const labelMap = {
      FIRST_CONTENTFUL_PAINT_MS: 'När något syns på sidan',
      LARGEST_CONTENTFUL_PAINT_MS: 'När huvudinnehållet laddat klart',
      FIRST_INPUT_DELAY_MS: 'Tid tills sidan svarar på klick',
      CUMULATIVE_LAYOUT_SHIFT_SCORE: 'Hur mycket sidan hoppar runt'
    };

    const categoryCopy = {
      FAST: 'Detta upplevs som snabbt för de flesta besökare.',
      AVERAGE: 'Det fungerar okej men kan bli snabbare.',
      SLOW: 'Många besökare tycker att detta går långsamt.'
    };

    const cards = Object.entries(metrics)
      .map(([id, metric]) => {
        const label = labelMap[id] || 'Övrigt mått';
        const value = id.endsWith('_MS') ? formatMilliseconds(metric.percentile) : formatClsScore(metric.percentile);
        const context = categoryCopy[metric.category] || 'Blandad upplevelse bland besökarna.';

        return `
          <div class="field-card">
            <p class="field-label">${label}</p>
            <p class="field-value">${value}</p>
            <p class="field-description">${context}</p>
          </div>
        `;
      })
      .join('');

    return cards ? `<div class="pagespeed-field-list" aria-label="Fältmätvärden">${cards}</div>` : '';
  };

  const formatSavings = (value) => {
    if (!value) return '';
    if (value >= 1000) {
      const seconds = value / 1000;
      const formatted = seconds.toLocaleString('sv-SE', { minimumFractionDigits: seconds >= 10 ? 0 : 1, maximumFractionDigits: seconds >= 10 ? 0 : 1 });
      return `${formatted} sekunder`;
    }
    return `${Math.round(value).toLocaleString('sv-SE')} ms`;
  };

  const friendlyOpportunityMap = {
    'Reduce unused JavaScript': 'Rensa bort skript som inte används',
    'Serve images in next-gen formats': 'Använd modernare bildformat som laddar snabbare',
    'Properly size images': 'Anpassa bildernas storlek till layouten',
    'Eliminate render-blocking resources': 'Låt innehållet visas innan allt är färdigladdat',
    'Reduce initial server response time': 'Snabba upp svarstiden från servern',
    'Avoid enormous network payloads': 'Minska mängden data som behöver laddas',
    'Defer offscreen images': 'Ladda bilder längre ned först när de behövs',
    'Reduce unused CSS': 'Ta bort CSS-regler som inte används',
    'Minify JavaScript': 'Komprimera JavaScript-filerna',
    'Minify CSS': 'Komprimera CSS-filerna',
    'Efficiently encode images': 'Komprimera bilderna bättre',
    'Largest Contentful Paint image was lazily loaded': 'Ladda huvudbilden direkt istället för senare'
  };

  const translateOpportunityTitle = (title) => {
    if (friendlyOpportunityMap[title]) return friendlyOpportunityMap[title];

    const lower = title.toLowerCase();
    if (lower.includes('javascript')) return 'Minska mängden JavaScript som laddas';
    if (lower.includes('css')) return 'Minska mängden CSS som laddas';
    if (lower.includes('image')) return 'Se över hur bilderna laddas';
    if (lower.includes('payload')) return 'Minska mängden data som sidan laddar';
    if (lower.includes('server')) return 'Snabba upp serverns svarstid';
    if (lower.includes('render')) return 'Visa innehållet tidigare i laddningen';

    return `Se över: ${title}`;
  };

  const createOpportunityList = (audits) => {
    const opportunities = Object.values(audits)
      .filter((audit) => audit.details && audit.details.type === 'opportunity')
      .sort((a, b) => (b.details?.overallSavingsMs || 0) - (a.details?.overallSavingsMs || 0))
      .slice(0, 5);

    if (!opportunities.length) {
      return '<p class="status-message">Inga tydliga förbättringar identifierade i denna körning.</p>';
    }

    const totalSavingsMs = opportunities.reduce((sum, audit) => sum + (audit.details?.overallSavingsMs || 0), 0);
    const intro = totalSavingsMs > 0
      ? `<p class="opportunity-intro">Åtgärda nedanstående så kan du spara upp till ${formatSavings(totalSavingsMs)} i laddtid.</p>`
      : '<p class="opportunity-intro">Här är de viktigaste förbättringarna du kan göra just nu.</p>';

    const items = opportunities
      .map((audit) => {
        const friendlyTitle = translateOpportunityTitle(audit.title);
        const impactText = audit.details?.overallSavingsMs ? `Tidsvinst: cirka ${formatSavings(audit.details.overallSavingsMs)}` : audit.displayValue;

        return `
          <div class="opportunity-item">
            <p class="opportunity-title">${friendlyTitle}</p>
            ${impactText ? `<p class="opportunity-impact">${impactText}</p>` : ''}
          </div>
        `;
      })
      .join('');

    return `<div class="pagespeed-opportunity-summary" aria-label="Förbättringsförslag">${intro}${items}</div>`;
  };

  const setStatus = (message, isLoading = false) => {
    pageSpeedStatus.textContent = message;
    pageSpeedSubmit.disabled = isLoading;
    pageSpeedSubmit.textContent = isLoading ? 'Kör analys...' : 'Kör analys';
  };

  const normalizeUrl = (value) => {
    if (/^https?:\/\//i.test(value)) {
      return value;
    }
    return `https://${value}`;
  };

  let progressInterval = null;

  const showResultCard = () => {
    if (pageSpeedFormCard) {
      pageSpeedFormCard.hidden = true;
    }
    if (pageSpeedResultCard) {
      pageSpeedResultCard.hidden = false;
    }
  };

  const resetView = () => {
    stopProgressAnimation(0);
    if (pageSpeedResultCard) {
      pageSpeedResultCard.hidden = true;
      pageSpeedResultCard.innerHTML = '';
    }
    if (pageSpeedFormCard) {
      pageSpeedFormCard.hidden = false;
    }
    pageSpeedForm.reset();
    setStatus('', false);
    pageSpeedUrlInput.focus();
  };

  const startProgressAnimation = () => {
    let progress = 0;
    const valueTarget = document.querySelector('.pagespeed-progress-value');
    const fillTarget = document.querySelector('.pagespeed-progress-fill');
    if (!valueTarget || !fillTarget) return;

    clearInterval(progressInterval);
    valueTarget.textContent = '0';
    fillTarget.style.width = '0%';
    progressInterval = setInterval(() => {
      // Öka snabbt i början, långsammare mot slutet för mer dramatik
      const increment = progress < 60 ? 5 : progress < 85 ? 3 : 1;
      progress = Math.min(progress + increment, 98);
      valueTarget.textContent = `${progress}`;
      fillTarget.style.width = `${progress}%`;
    }, 160);
  };

  const stopProgressAnimation = (finalScore) => {
    clearInterval(progressInterval);
    progressInterval = null;
    const valueTarget = document.querySelector('.pagespeed-progress-value');
    const fillTarget = document.querySelector('.pagespeed-progress-fill');
    if (valueTarget) {
      valueTarget.textContent = `${finalScore}`;
    }
    if (fillTarget) {
      fillTarget.style.width = `${Math.max(0, Math.min(finalScore, 100))}%`;
    }
  };

  const renderLoadingState = () => `
    <div class="pagespeed-loader" role="status" aria-live="polite">
      <div class="pagespeed-progress" aria-hidden="true">
        <div class="pagespeed-progress-bar">
          <div class="pagespeed-progress-fill" style="width: 0%"></div>
        </div>
        <span class="pagespeed-progress-text"><span class="pagespeed-progress-value">0</span> / 100</span>
      </div>
      <p>Analyserar din sida…</p>
    </div>
  `;

  pageSpeedForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
      const rawUrl = pageSpeedUrlInput.value.trim();
      if (!rawUrl) {
        setStatus('Ange en webbadress för att börja.', false);
        return;
      }

      let formattedUrl;
      try {
        formattedUrl = new URL(normalizeUrl(rawUrl)).href;
      } catch {
        setStatus('Ogiltig URL. Kontrollera stavningen och försök igen.', false);
        return;
      }

      const strategy = pageSpeedStrategySelect.value;
      setStatus('Hämtar analys från Google PageSpeed Insights...', true);
      showResultCard();
      pageSpeedResultCard.innerHTML = renderLoadingState();
      startProgressAnimation();

      const queryParams = new URLSearchParams({
        url: formattedUrl,
        strategy,
        key: PAGESPEED_API_KEY
      });

      ['performance', 'seo', 'accessibility', 'best-practices'].forEach((category) => {
        queryParams.append('category', category);
      });

      const response = await fetch(`${PAGESPEED_ENDPOINT}?${queryParams.toString()}`);

      if (!response.ok) {
        throw new Error(`API anrop misslyckades (${response.status})`);
      }

      const data = await response.json();

      if (!data.lighthouseResult) {
        throw new Error('Inget Lighthouse-resultat hittades för URL:en.');
      }

      const { lighthouseResult, loadingExperience } = data;
      const score = Math.round((lighthouseResult.categories.performance.score || 0) * 100);
      const audits = lighthouseResult.audits || {};
      const scoreSummary = describeScore(score);

      const metricList = createMetricList(audits);
      const opportunityMarkup = createOpportunityList(audits);
      const fieldMetricsMarkup = loadingExperience?.metrics ? createFieldMetrics(loadingExperience.metrics) : '';

      stopProgressAnimation(score);
      pageSpeedResultCard.innerHTML = `
        <div class="result-section">
          <h3>Prestandapoäng</h3>
          <p>Analys körd för <strong>${formattedUrl}</strong> (${strategy === 'mobile' ? 'mobil' : 'desktop'}).</p>
          <div class="score-indicator">
            <div class="score-badge ${resolveScoreClass(score)}" aria-label="Prestandapoäng">${score}</div>
            <p class="score-total">(${score} av 100 möjliga)</p>
            <div class="score-summary">
              <p class="score-label">${scoreSummary.label}</p>
              <p>${scoreSummary.message}</p>
            </div>
          </div>
          <ul class="pagespeed-metric-list" aria-label="Lab-mätvärden">${metricList}</ul>
        </div>
        <div class="result-section">
          <h3>Fältdata</h3>
          <p>Data från verkliga Chrome-användare (om tillgänglig).</p>
          ${fieldMetricsMarkup || '<p class="status-message">Ingen fältdata tillgänglig för den här sidan.</p>'}
        </div>
        <div class="result-section">
          <h3>Förbättringsförslag</h3>
          <p>De viktigaste möjligheterna från Lighthouse-rapporten.</p>
          ${opportunityMarkup}
        </div>
        <div class="pagespeed-reset-wrapper">
          <button type="button" class="pagespeed-reset" data-reset-pagespeed>Gör en ny analys</button>
        </div>
      `;

      setStatus('Analys klar.', false);
    } catch (error) {
      console.error(error);
      stopProgressAnimation(0);
      pageSpeedResultCard.innerHTML = `
        <div class="pagespeed-error">
          <p class="status-message">Kunde inte hämta rapport: ${error.message}</p>
          <div class="pagespeed-reset-wrapper">
            <button type="button" class="pagespeed-reset" data-reset-pagespeed>Försök igen</button>
          </div>
        </div>
      `;
      setStatus('Ett fel uppstod. Försök igen.', false);
    }
  });

  pageSpeedResultCard?.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.matches('[data-reset-pagespeed]')) {
      event.preventDefault();
      resetView();
    }
  });
}
