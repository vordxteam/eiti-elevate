const cached = new Set<string>();

export const preloadImage = (src: string) => {
  if (cached.has(src)) return;
  const img = new Image();
  img.src = src;
  cached.add(src);
};

export const preloadImages = (srcs: string[]) => {
  srcs.forEach(preloadImage);
};