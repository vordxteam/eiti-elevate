export function prioritizeHeroImage() {
  // Lazy load ALL img tags on the page
  // Hero is a CSS background so it is unaffected by this
  // This stops all img tags from stealing bandwidth from the hero
  document.querySelectorAll('img').forEach((img) => {
    img.setAttribute('loading', 'lazy');
  });
}