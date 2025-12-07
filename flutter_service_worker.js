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
"assets/AssetManifest.bin.json": "6722c21b68e4d11e0c997b2bf96f2749",
"assets/assets/images/skill-icon-asp-net.png": "484368bc65f7964138b1f375ecac0231",
"assets/assets/images/app-icon-camera.png": "e44d872fc77242d00871fad24a501d83",
"assets/assets/images/ic-camera-lens.png": "e5a309c7859cef3fbb1a1c171876042f",
"assets/assets/images/company-logo-grapes.jpg": "5780fbf655fbe775ae78258cb5ed5a34",
"assets/assets/images/skill-icon-jira.png": "2c517277a4679617756edfc637e5097a",
"assets/assets/images/ic-google-lens.png": "0abab8e0bc2fac555987bc1406cf9f5d",
"assets/assets/images/ic-linked-in.png": "1d118ef41f58c72654904d923ec3bd63",
"assets/assets/images/ic-call.png": "1e460cb26d5eeac5dbaa93c195e3f2a2",
"assets/assets/images/app-icon-photos.png": "668ac75698c89c7850ff1c18d9c7c661",
"assets/assets/images/skill-icon-postman.png": "b485dc0e2c339ecbcecd9098a995acd2",
"assets/assets/images/skill-icon-xcode.png": "64ec509d14a99277e27d4024801d7d36",
"assets/assets/images/skill-icon-php-laravel.png": "3d5bc45b50130a88364aee79cc8d8bee",
"assets/assets/images/app-icon-phone.png": "8edb75935b636b90c44e242d26bd66f4",
"assets/assets/images/skill-icon-java.png": "c2b9401c8df4c3f66ac87ec4a1f3d2cb",
"assets/assets/images/skill-icon-flutter.png": "0041eb3f30ea40a632cfdaee8755090d",
"assets/assets/images/skill-icon-firestore.png": "161ee05b4f83d6dd992a53ecb4c070f9",
"assets/assets/images/profile_image.png": "258920b0a8ea73371950fb81b4a3a4d9",
"assets/assets/images/company-logo-cocoalabs.png": "d9e36f321cdb9c131d03eaec3f39b8a2",
"assets/assets/images/ic-google-g.png": "032c092828f1769f15cd6adb5ee69cb7",
"assets/assets/images/skill-icon-kotlin.png": "18ed5b78c85d17a4be289e71b5ead7b3",
"assets/assets/images/skill-icon-my-sql.png": "3ac0705ecddbf5607c38d114e5995884",
"assets/assets/images/skill-icon-android-studio.png": "698761214930b9dc7049edc45f64a501",
"assets/assets/images/skill-icon-vs-code.png": "241c160af30f621915213df49131328c",
"assets/assets/images/skill-icon-ios.png": "dd5da96283206a0b91eb40f1940be0be",
"assets/assets/images/app-icon-portfolio.png": "f0e5afc035f5d9c0eb868f1674cdf678",
"assets/assets/images/skill-icon-node-js.png": "c504abd1bf122d59ff45d55d60d2889d",
"assets/assets/images/company-logo-audrey.jpg": "47e0e7a9a315c21bceb957675ab78627",
"assets/assets/images/wallpaper.webp": "777a8784d7359c147245dd3aeeb533ed",
"assets/assets/images/skill-icon-ms-sql-server.png": "522c9c8241d013f0f5001b6755627ae9",
"assets/assets/images/skill-icon-figma.png": "cb7eb3d673f5537c074373697ab276d6",
"assets/assets/images/skill-icon-sqlite.png": "4cc88581ab92423701b7bea3ecbb53e2",
"assets/assets/images/skill-icon-git.png": "2100c0930db2cd88cdf5fe54b61f30a0",
"assets/assets/images/skill-icon-dart.png": "6d04b38dd16b87fee67c8fa0c4dff4ec",
"assets/assets/images/company-logo-beinex.jpg": "490160b50ece377aecec6941e39ab42f",
"assets/assets/images/skill-icon-android.png": "96a59e10a3f5d5808bc8c8b0b2b5e83b",
"assets/assets/images/ic-email.png": "97857e733ecfee7498de947acf75b160",
"assets/fonts/MaterialIcons-Regular.otf": "eeb6792331f112607e4f44a59103f68c",
"assets/NOTICES": "8a642cb15acef11a311ed44914a1d4f2",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "4d57f5ce5e37c79c8f8de93d6021ab0c",
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
"favicon.png": "44a7774cca6270ba874e4648af5d561b",
"flutter_bootstrap.js": "bb79a71a315c9afc0d320fa26b36b6c5",
"version.json": "536dc42524442522d15a255b5eeebed3",
"main.dart.js": "cca264708f478862b8bc293e01a47bc7"};
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
