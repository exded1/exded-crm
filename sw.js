// Кэширует только файлы приложения. Запросы к базе с клиентами не кэшируются.
const VERSION = 'exded-crm-v6';
const SHELL = [
  "./",
  "./index.html",
  "./assets/app.css",
  "./assets/app.js",
  "./config.js",
  "./vendor/supabase.js",
  "./manifest.webmanifest",
  "./fonts/onest-cyrillic-400-normal.woff2",
  "./fonts/onest-cyrillic-500-normal.woff2",
  "./fonts/onest-cyrillic-700-normal.woff2",
  "./fonts/onest-cyrillic-ext-400-normal.woff2",
  "./fonts/onest-cyrillic-ext-500-normal.woff2",
  "./fonts/onest-cyrillic-ext-700-normal.woff2",
  "./fonts/onest-latin-400-normal.woff2",
  "./fonts/onest-latin-500-normal.woff2",
  "./fonts/onest-latin-700-normal.woff2",
  "./fonts/onest-latin-ext-400-normal.woff2",
  "./fonts/onest-latin-ext-500-normal.woff2",
  "./fonts/onest-latin-ext-700-normal.woff2",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/icon.svg"
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(fetch(req).then((res) => {
    if (res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || (req.mode === 'navigate' ? caches.match('./index.html') : new Response('', { status: 504 })))));
});
