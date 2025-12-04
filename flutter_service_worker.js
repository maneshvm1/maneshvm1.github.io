'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "efcb78b85ae6383dea58eb9f60cc1098",
"index.html": "bb1ee9929f6aeb48768481536a360f0d",
"/": "bb1ee9929f6aeb48768481536a360f0d",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "a2c8701e9a82ab20d8214b4ed2ca3e7a",
"assets/assets/images/ic-xcode.png": "49839adae48ed0966b5b48e57b903300",
"assets/assets/images/ic-linked-in.png": "7cf175380ba988a83e1c3fb5dbddaea7",
"assets/assets/images/ic-call.png": "91267ccae376e258c5e71ad6623a2d3e",
"assets/assets/images/ic-node-js.png": "feb71d01edee0dd39ae1f8c728015e21",
"assets/assets/images/ic-figma.png": "a0f59ca42ffc450ffbc4d62ebc124c3c",
"assets/assets/images/ic-asp-net.png": "5d963ec454f06c88648e1868010daff2",
"assets/assets/images/ic-flutter.png": "8c33ecb7c999d934f017b1757b2660d4",
"assets/assets/images/logo-beinex.jpg": "d643e8922de21cd4e9e7c0509d1b3496",
"assets/assets/images/ic-android.png": "63d2eaa6a7fd64a84d9e6e2f3de1da3b",
"assets/assets/images/ic-my-sql.png": "d936c28a26b62ab3b3950da7f318a5c7",
"assets/assets/images/ic-vs-code.png": "9e65d207c48b7bc946b69205a0182055",
"assets/assets/images/ic-android-studio.png": "e91eb997563c91c13111bb49d5bd6687",
"assets/assets/images/profile_image.png": "e03b7ae952fe79a709a315aefa7866b7",
"assets/assets/images/ic-jira.png": "f3a4bc7d24959b3d153e940233f30f1d",
"assets/assets/images/ic-ms-sql-server.png": "faa6f4f77f4407cba4690849f02d2a22",
"assets/assets/images/ic-dart.png": "689b26cd4d56f2eddc2f18a3d524742b",
"assets/assets/images/ic-postman.png": "07e4847c785d002814f9fb9b2079d7b4",
"assets/assets/images/logo-audrey.jpg": "05b9903f5a2c8e1eae586d9ac8c7bea7",
"assets/assets/images/ic-git.png": "e7b216a059e833d0125ff9d3b803e2c7",
"assets/assets/images/ic-java.png": "d5d4c9cb1972c0e2b72ee9155a23ce53",
"assets/assets/images/ic-sqlite.png": "e83bac17e4cdc58e26292a82abf2eacf",
"assets/assets/images/logo-cocoalabs.jpg": "6c7cddb048b47309766c960699f7af9e",
"assets/assets/images/ic-ios.png": "9079194226cfe58a2b670ad68982b60d",
"assets/assets/images/logo-grapes.jpg": "5780fbf655fbe775ae78258cb5ed5a34",
"assets/assets/images/ic-kotlin.png": "c1d33b8de56d02a16c8b7ef3dddc84bf",
"assets/assets/images/ic-firestore.png": "9656ce5da04dc3b623477c89ff0a4499",
"assets/assets/images/ic-php-laravel.png": "7111109f401c8e5f8db5488aa1410e5b",
"assets/assets/images/ic-email.png": "ec1e6cab6e813193cf66cad88d42bb8d",
"assets/fonts/MaterialIcons-Regular.otf": "14cffdbaa13f76222c3029244b91c661",
"assets/NOTICES": "e75da7c895af3c93554ad3c7380be09c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "667aa5aeedd1a0c678b1e7c9e9679c45",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "665ed99201e2b74a4ab9120737c3c0f2",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "2eea9a71569bacebe630e827d8447734",
"version.json": "536dc42524442522d15a255b5eeebed3",
"main.dart.js": "d7de53034a5257fe997cec2304192cc0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
