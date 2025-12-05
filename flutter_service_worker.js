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
"assets/AssetManifest.bin.json": "35f2f65c57a7d7dd916bb767486a21da",
"assets/assets/images/skill-icon-asp-net.png": "bfbabd6724ec2b82b5eb02eb36960dfd",
"assets/assets/images/app-icon-camera.png": "33538a88314ebe10fdc88ac67adeb935",
"assets/assets/images/company-logo-grapes.jpg": "5780fbf655fbe775ae78258cb5ed5a34",
"assets/assets/images/skill-icon-jira.png": "27885b7a5f0eaa60a3dc8bfdcbe2a58a",
"assets/assets/images/ic-google-lens.png": "0abab8e0bc2fac555987bc1406cf9f5d",
"assets/assets/images/ic-linked-in.png": "1d118ef41f58c72654904d923ec3bd63",
"assets/assets/images/ic-call.png": "1e460cb26d5eeac5dbaa93c195e3f2a2",
"assets/assets/images/app-icon-photos.png": "7c8e313a301cfccfd98885b22b869941",
"assets/assets/images/skill-icon-postman.png": "64eecd177444295c6dc32e7f83782b29",
"assets/assets/images/skill-icon-xcode.png": "abdb0db37cc038c5e18579bfeb96e5a3",
"assets/assets/images/skill-icon-php-laravel.png": "f69fe6a420dd8516e8d303bf774eac1d",
"assets/assets/images/app-icon-phone.png": "f289a643e9d311fffa2eca3b26e82aae",
"assets/assets/images/skill-icon-java.png": "8b831457b363d14e8cc4b768a1d0baa9",
"assets/assets/images/skill-icon-flutter.png": "b4d9df970a6d94970a3d7b8db8092b6d",
"assets/assets/images/skill-icon-firestore.png": "bc950782d4eb2e9dd60a64935e6c173d",
"assets/assets/images/profile_image.png": "9974dec89de3575d4cb244f0efe37c06",
"assets/assets/images/wallpaper.jpg": "54add6d4fb82a51b915da1250f236ed5",
"assets/assets/images/ic-google-g.png": "032c092828f1769f15cd6adb5ee69cb7",
"assets/assets/images/skill-icon-kotlin.png": "83d404ad07e410a10238283c26bcc2ca",
"assets/assets/images/skill-icon-my-sql.png": "88e3270dd2c62145c8df386fe6a9f5fa",
"assets/assets/images/skill-icon-android-studio.png": "5034a8b9e730fba9a91a1814ab7b6f78",
"assets/assets/images/skill-icon-vs-code.png": "36878e7a8db3cf05d4234fcba0212a93",
"assets/assets/images/skill-icon-ios.png": "8e4386b7f47fe3fcd1be0cc73cd1c17c",
"assets/assets/images/app-icon-portfolio.png": "6789ea191e6ef61dbcb8d6f2da1bc52f",
"assets/assets/images/skill-icon-node-js.png": "d11f3229a39b44acd49470165f99e890",
"assets/assets/images/company-logo-audrey.jpg": "0ec990a6d8b1b9653cfc21563a695e16",
"assets/assets/images/skill-icon-ms-sql-server.png": "c69092b06f8d9d92523c7087b1f82028",
"assets/assets/images/skill-icon-figma.png": "49e10464e32371b59c40a197cc3c9e9b",
"assets/assets/images/skill-icon-sqlite.png": "de51a2fc24f0f9ac4d80c6ce9a80f4c1",
"assets/assets/images/skill-icon-git.png": "5d1eeb07a57e5fdf63e9f3eb50107563",
"assets/assets/images/skill-icon-dart.png": "2da8f27943c6caf756e5b7e4ddedb0b3",
"assets/assets/images/company-logo-beinex.jpg": "490160b50ece377aecec6941e39ab42f",
"assets/assets/images/company-logo-cocoalabs.jpg": "6d4f9d653855744c94a9a51ba3d26f41",
"assets/assets/images/skill-icon-android.png": "f086177a672c81f1f1de63ffcbf0ff31",
"assets/assets/images/ic-email.png": "97857e733ecfee7498de947acf75b160",
"assets/fonts/MaterialIcons-Regular.otf": "aa2ba7643fdc2fbaafbc33d0dc5f97fb",
"assets/NOTICES": "c5b4dd2161fe051df69db704c0e5ce48",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "667aa5aeedd1a0c678b1e7c9e9679c45",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "452adaca28980c6ab6c5807c0b51ebb7",
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
"flutter_bootstrap.js": "e9d589121cad968cef698c847029e71d",
"version.json": "536dc42524442522d15a255b5eeebed3",
"main.dart.js": "f695366a0cb316892588658474bfaa9e"};
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
