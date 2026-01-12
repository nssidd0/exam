self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('ns-sidd-store').then((cache) => cache.addAll([
      './index.html',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
