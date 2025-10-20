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
