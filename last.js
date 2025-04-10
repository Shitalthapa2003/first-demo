self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('shop-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/app.js'
        ]);
      })
    );
    console.log('Service Worker installed!');
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
  });
  