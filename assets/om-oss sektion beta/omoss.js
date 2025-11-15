const initCarousel = () => {
  document.body.classList.add('loaded');

  const track = document.getElementById('peopleTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('peopleDots');
  const viewport = document.querySelector('.carousel-window');

  if (!track || !viewport) {
    return;
  }

  const cards = Array.from(track.querySelectorAll('.person-card'));
  let dots = [];

  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    dots = cards.map((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.type = 'button';
      dot.setAttribute('aria-label', `Visa person ${index + 1}`);
      dotsContainer.appendChild(dot);
      return dot;
    });
  }

  const mediaQuery = window.matchMedia('(max-width: 900px)');
  let sliderEnabled = mediaQuery.matches;
  let currentIndex = 0;
  let startX = 0;
  let deltaX = 0;
  let baseTranslate = 0;
  let isDragging = false;
  let slideWidth = 0;

  const clampIndex = (index) => Math.max(0, Math.min(cards.length - 1, index));

  const updateButtons = () => {
    if (!prevBtn || !nextBtn) return;
    prevBtn.disabled = !sliderEnabled || currentIndex === 0;
    nextBtn.disabled = !sliderEnabled || currentIndex === cards.length - 1;
  };

  const updateDots = () => {
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  };

  const computeSlideWidth = () => {
    if (!sliderEnabled) {
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
    if (!sliderEnabled) {
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
    if (!sliderEnabled) return;
    const nextIndex = clampIndex(index);
    if (nextIndex === currentIndex) {
      applyTranslate();
      return;
    }
    currentIndex = nextIndex;
    track.style.transition = 'transform 0.5s cubic-bezier(0.55, 0, 0.1, 1)';
    applyTranslate();
    updateDots();
    updateButtons();
  };

  const handleNav = (direction) => {
    moveToIndex(currentIndex + direction);
  };

  const handleDragStart = (event) => {
    if (!sliderEnabled) return;
    isDragging = true;
    startX = event.touches ? event.touches[0].clientX : event.clientX;
    deltaX = 0;
    slideWidth = computeSlideWidth();
    baseTranslate = -currentIndex * slideWidth;
    track.style.transition = 'none';
  };

  const handleDragMove = (event) => {
    if (!isDragging || !sliderEnabled) return;
    const currentX = event.touches ? event.touches[0].clientX : event.clientX;
    deltaX = currentX - startX;
    track.style.transform = `translateX(${baseTranslate + deltaX}px)`;
  };

  const handleDragEnd = () => {
    if (!isDragging || !sliderEnabled) return;
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

  const handleLayoutChange = (event) => {
    sliderEnabled = event.matches;
    if (!sliderEnabled) {
      track.style.transition = '';
      track.style.transform = '';
      slideWidth = 0;
    } else {
      currentIndex = clampIndex(currentIndex);
      snapWithoutAnimation();
      updateDots();
    }
    updateButtons();
  };

  mediaQuery.addEventListener('change', handleLayoutChange);
  window.addEventListener('resize', () => {
    if (sliderEnabled) {
      snapWithoutAnimation();
    }
  });

  prevBtn?.addEventListener('click', () => handleNav(-1));
  nextBtn?.addEventListener('click', () => handleNav(1));

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => moveToIndex(index));
  });

  track.addEventListener('touchstart', handleDragStart, { passive: true });
  track.addEventListener('touchmove', handleDragMove, { passive: true });
  track.addEventListener('touchend', handleDragEnd);
  track.addEventListener('touchcancel', handleDragEnd);

  track.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch' || !sliderEnabled) return;
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

  updateDots();
  updateButtons();
  if (sliderEnabled) {
    snapWithoutAnimation();
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarousel);
} else {
  initCarousel();
}
