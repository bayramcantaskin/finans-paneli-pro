self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("finans-v1").then(cache =>
      cache.addAll([
        "/",
        "/index.html",
        "/css/style.css",
        "/js/api.js",
        "/js/charts.js",
        "/js/theme.js",
        "/js/alerts.js"
      ])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
