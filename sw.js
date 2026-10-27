const CACHE = "fc-lite-2026-10-27T19:40:03.093Z";
const FILES = ["/farbod-coaching-app/assets/index-BBCegg6A.css","/farbod-coaching-app/assets/index-CDB6_0O3.js","/farbod-coaching-app/fonts/Lalezar-arabic.woff2","/farbod-coaching-app/fonts/Vazirmatn-wght.woff2","/farbod-coaching-app/icons/apple-touch-icon.png","/farbod-coaching-app/icons/icon-192.png","/farbod-coaching-app/icons/icon-512.png","/farbod-coaching-app/icons/icon-maskable-512.png","/farbod-coaching-app/manifest.webmanifest","/farbod-coaching-app/"];
self.addEventListener("install", (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener("activate", (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    // The app shell: fresh when online, the saved copy when not.
    e.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put("/farbod-coaching-app/", copy)); return res; }).catch(() => caches.match("/farbod-coaching-app/", { ignoreVary: true })));
    return;
  }
  e.respondWith(caches.match(req.url, { ignoreVary: true }).then((hit) => hit || fetch(req)));
});
