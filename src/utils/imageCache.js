const cache = new Map();

export function cacheImages(selector = 'img') {
  document.querySelectorAll(selector).forEach(img => {
    const src = img.src || img.dataset.src;
    if (!src || cache.has(src)) return;

    const image = new Image();
    image.src = src;
    cache.set(src, image); // keeps reference alive = stays in browser cache
  });
}   