// service-worker.js

const CACHE_NAME = 'file-decryption-v1';
const ASSETS = [
  '/', // Cache the root HTML file
  '/index.html', // Cache the HTML file
  '/styles.css', // Cache the CSS file (if external)
  '/script.js', // Cache the JavaScript file (if external)
  // Add other assets like fonts, images, etc., if needed
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch cached assets when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});