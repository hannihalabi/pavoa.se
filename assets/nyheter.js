// Hantera visning av nyhetsarkivet
const archiveToggle = document.querySelector('.archive-toggle');

if (archiveToggle instanceof HTMLButtonElement) {
  const archiveId = archiveToggle.dataset.archiveTarget;
  const archiveSection = archiveId ? document.getElementById(archiveId) : null;

  if (archiveSection) {
    archiveToggle.addEventListener('click', () => {
      const isHidden = archiveSection.hasAttribute('hidden');

      if (isHidden) {
        archiveSection.removeAttribute('hidden');
      } else {
        archiveSection.setAttribute('hidden', '');
      }

      archiveToggle.setAttribute('aria-expanded', String(isHidden));
      archiveToggle.textContent = isHidden ? 'Dölj äldre nyheter' : 'Visa äldre nyheter';
    });
  }
}
