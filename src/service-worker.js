/* global self, caches, fetch */

console.log('service worker start');

var cacheName = '5to6';
var cache;

self.addEventListener('install', function(event) {

  console.log('service worker install');

  event.waitUntil(
    caches.open(cacheName).then(function(_cache) {
      cache = _cache;

      console.log('service worker installed', cache);
    })
  );
});

self.addEventListener('activate', function() {

  console.log('service worker activated');

});

self.addEventListener('fetch', function(event) {

  console.log('service worker fetch', event.request);

  event.respondWith(
    cache.match(event.request).then(function (response) {
      console.log('service worker cache', event.request, response);

      return response || fetch(event.request).then(function(response) {
        console.log('service worker fetch', event.request, response);

        cache.put(event.request, response.clone());
        return response;
      });
    })
  );

});
