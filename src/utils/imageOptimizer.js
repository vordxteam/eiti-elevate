export function prioritizeHeroImage() {
  // Give hero image high fetch priority
  const hero = document.querySelector('.hero img, [data-hero] img, section:first-of-type img');
  if (hero) {
    hero.setAttribute('fetchpriority', 'high');
    hero.removeAttribute('loading');
  }

  // Lazy load everything else
  document.querySelectorAll('img:not([data-hero] img)').forEach((img, i) => {
    if (i > 0) img.setAttribute('loading', 'lazy');
  });
} 