const CACHE_NAME = "zinox-pwa-v1";
const FILES = [
  "./",
  "./index.html",
  "./manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
