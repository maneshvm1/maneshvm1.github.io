'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "7d06b3c28df1d91c973fb672a0b5fa99",
"icons/Icon-maskable-512.png": "bb12891352c149830c60d5e733f20077",
"icons/Icon-192.png": "56ea72a734fd34b2424e1d3dd090a983",
"icons/Icon-maskable-192.png": "4107b0eda0e2f4f5cb675e0fd3bed6f3",
"manifest.json": "e7fb76b900a23fdf91e85a206288d57f",
"index.html": "0f812c49a6aed6a0fb3795ba8c0658c1",
"/": "0f812c49a6aed6a0fb3795ba8c0658c1",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "658cf43f9e5625c8fe93abb0b95872ec",
"assets/assets/images/ic-camera-lens.png": "e5a309c7859cef3fbb1a1c171876042f",
"assets/assets/images/ic-google-lens.png": "0abab8e0bc2fac555987bc1406cf9f5d",
"assets/assets/images/stores/store-snap.webp": "f247ecd81991f6619fa30d302fd20a4e",
"assets/assets/images/stores/store-play.webp": "13e21af627e43ade83379ce416a58568",
"assets/assets/images/stores/store-microsoft.webp": "ff51824ce89b981f7575d46b9164688f",
"assets/assets/images/stores/store-appstore.webp": "0ef704dc872d020e9bb001a7da2da855",
"assets/assets/images/ic-call.png": "1e460cb26d5eeac5dbaa93c195e3f2a2",
"assets/assets/images/app_icons/app-icon-camera.png": "5af980bc70627a8ef84a801bb4b6b3dd",
"assets/assets/images/app_icons/app-icon-photos.png": "ac665e8d81ab0fe74dd4dac2530dc853",
"assets/assets/images/app_icons/app-icon-phone.png": "cf5befbebf3eeac2749ec633be42e77f",
"assets/assets/images/app_icons/app-icon-portfolio.png": "f0e5afc035f5d9c0eb868f1674cdf678",
"assets/assets/images/projects/project-tamm.webp": "5e9bd45430399dc41082429990f0e9c1",
"assets/assets/images/projects/project-bayaan-app.webp": "b81ff0e543eaa0d72b6fd4f20e813d01",
"assets/assets/images/projects/project-beinex-time.webp": "d9a5429ab76cdb8174cda89753545e43",
"assets/assets/images/profile_image.png": "1fdd02475107712498501ac01fb4c944",
"assets/assets/images/ic-google-g.png": "032c092828f1769f15cd6adb5ee69cb7",
"assets/assets/images/company_logos/company-logo-grapes.jpg": "5780fbf655fbe775ae78258cb5ed5a34",
"assets/assets/images/company_logos/company-logo-cocoalabs.png": "d9e36f321cdb9c131d03eaec3f39b8a2",
"assets/assets/images/company_logos/company-logo-audrey.jpg": "47e0e7a9a315c21bceb957675ab78627",
"assets/assets/images/company_logos/company-logo-beinex.jpg": "490160b50ece377aecec6941e39ab42f",
"assets/assets/images/wallpaper.webp": "777a8784d7359c147245dd3aeeb533ed",
"assets/assets/images/skills/skill-icon-asp-net.png": "484368bc65f7964138b1f375ecac0231",
"assets/assets/images/skills/skill-icon-jira.png": "2c517277a4679617756edfc637e5097a",
"assets/assets/images/skills/skill-icon-postman.png": "b485dc0e2c339ecbcecd9098a995acd2",
"assets/assets/images/skills/skill-icon-xcode.png": "64ec509d14a99277e27d4024801d7d36",
"assets/assets/images/skills/skill-icon-php-laravel.png": "3d5bc45b50130a88364aee79cc8d8bee",
"assets/assets/images/skills/skill-icon-java.png": "c2b9401c8df4c3f66ac87ec4a1f3d2cb",
"assets/assets/images/skills/skill-icon-flutter.png": "0041eb3f30ea40a632cfdaee8755090d",
"assets/assets/images/skills/skill-icon-firestore.png": "161ee05b4f83d6dd992a53ecb4c070f9",
"assets/assets/images/skills/skill-icon-kotlin.png": "18ed5b78c85d17a4be289e71b5ead7b3",
"assets/assets/images/skills/skill-icon-my-sql.png": "3ac0705ecddbf5607c38d114e5995884",
"assets/assets/images/skills/skill-icon-android-studio.png": "698761214930b9dc7049edc45f64a501",
"assets/assets/images/skills/skill-icon-vs-code.png": "241c160af30f621915213df49131328c",
"assets/assets/images/skills/skill-icon-ios.png": "dd5da96283206a0b91eb40f1940be0be",
"assets/assets/images/skills/skill-icon-node-js.png": "c504abd1bf122d59ff45d55d60d2889d",
"assets/assets/images/skills/skill-icon-ms-sql-server.png": "522c9c8241d013f0f5001b6755627ae9",
"assets/assets/images/skills/skill-icon-figma.png": "cb7eb3d673f5537c074373697ab276d6",
"assets/assets/images/skills/skill-icon-github.png": "d047fb9fd11aa34088072a7fa21f793c",
"assets/assets/images/skills/skill-icon-sqlite.png": "4cc88581ab92423701b7bea3ecbb53e2",
"assets/assets/images/skills/skill-icon-git.png": "2100c0930db2cd88cdf5fe54b61f30a0",
"assets/assets/images/skills/skill-icon-dart.png": "6d04b38dd16b87fee67c8fa0c4dff4ec",
"assets/assets/images/skills/skill-icon-android.png": "96a59e10a3f5d5808bc8c8b0b2b5e83b",
"assets/assets/images/ic-email.png": "97857e733ecfee7498de947acf75b160",
"assets/fonts/MaterialIcons-Regular.otf": "0fa40e5b49a96da7112bf86f028637a9",
"assets/NOTICES": "28b79183ae722adecf50221de74ccee8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "6e4a5d8416ebfbe0ec4b5e3e6d14cc21",
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
"flutter_bootstrap.js": "5f685f89cb447fe31f625c8dc79f064f",
"version.json": "009c9e65172e010890f7f65fde438006",
"main.dart.js": "44687812c2f7f83fc95ce9a98505ff2b"};
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
