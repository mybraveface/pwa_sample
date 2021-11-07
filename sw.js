// キャッシュ名
const CACHE_NAME = 'pwa-sample-cache-v1';

// キャッシュ対象
const urlsToCache = [
    './',
    './index.html',
    './page1.html',
    './page2.html'
];

self.addEventListener('install', (event) => {
    console.log('サービスワーカー : Installイベント');
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('必要なデータをキャッシュしました');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
        .then((r) => {
            console.log('次のリソースファイルをフェッチ : ' + e.request.url);
            return r || fetch(e.request)
            .then((response) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    console.log('次のリソースファイルをキャッシュ : ' + e.request.url);
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});
