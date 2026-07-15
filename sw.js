const CACHE_NAME = 'ata-v2-pwa-v2.0.0';
const PAGES_TO_CACHE = [
  './',
  './index.html',
  './marketplace.html',
  './product-detail.html',
  './cold-chain.html',
  './cold-storage.html',
  './orders.html',
  './tracking.html',
  './fintech.html',
  './price-index.html',
  './cooperative.html',
  './sustainability.html',
  './profile.html',
  './enterprise.html',
  './docs.html',
  './assets/styles.css',
  './assets/app.js',
  './assets/favicon.svg',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './manifest.json'
];

// Install Event - Pre-cache multi-page HTML shell and assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker v2] Caching Multi-Page Shell');
      return cache.addAll(PAGES_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up stale caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker v2] Purging Old Cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Stale-While-Revalidate with Network Fallback
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return networkResponse;
      }).catch(() => {
        // Fallback for HTML page navigation when offline
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });

      return cachedResponse || fetchPromise;
    })
  );
});

// Offline Queue Background Sync for Remote Farming Hubs
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-offline-logs') {
    event.waitUntil(syncOfflineLogs());
  }
});

async function syncOfflineLogs() {
  console.log('[Service Worker v2] Flushing cached offline QC logs and sensor readings...');
}
