'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5007b09047fe04cd6ff6f5219753e366",
"index.html": "04451016812b2f7c267902c64c03566a",
"/": "04451016812b2f7c267902c64c03566a",
"main.dart.js": "4afcf8e1284508360b4f9d6ca262cf57",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "77aae862e665405a5eca04f26918e017",
"assets/AssetManifest.json": "91ae300aa955c66bc8d6afdbe92ee932",
"assets/NOTICES": "417cef0f749880b35c50bba64cde6e35",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/video/working_space.mp4": "bd5663b375cec5e23e40100ac6e9ec93",
"assets/assets/images/photo_3.jpeg": "a999a58dc86f074f8ab6470d01ea8cf6",
"assets/assets/images/person_4.jpeg": "d9ca33f00559a90389a895a833e366b7",
"assets/assets/images/photo_2.jpeg": "67131f88b4c22f970464d62bebda2125",
"assets/assets/images/person_2.jpeg": "d8fe8c88111bc00315834213bab819d8",
"assets/assets/images/person_3.jpeg": "a62b33951eb9d336f8afcf9c1f495ab8",
"assets/assets/images/pattern.jpg": "58b41defd7ee6f93613a1aa0987bfdf3",
"assets/assets/images/photo_4.jpeg": "85422d3ffb4f441ce48ad29500cad170",
"assets/assets/images/person_5.png": "9b718e667b4ad836300bc0c3b3356dd1",
"assets/assets/images/photo_1.jpg": "ab1f68ac06acf967bb73f6ea490ead44",
"assets/assets/images/person_1.jpeg": "364c213f3c4005058a708593a6f323bb",
"assets/assets/images/onix_logo.svg": "9051f7574bda0361000499628685d579",
"assets/assets/images/join_1.png": "2dcae70baa464a38cd36389fbbe996cc",
"assets/assets/images/join_3.png": "c750d370f76679fcfbbeefb7730ec535",
"assets/assets/images/join_2.png": "c532c98f7f1ff61f7d19afc6aba8164e",
"assets/assets/icons/megaphone.svg": "f54b6637f18e6165a2a92c3de54ac77d",
"assets/assets/icons/coffee-cup.svg": "d6129cf0d5d8eb350346fa1d6a6c45a7",
"assets/assets/icons/lang_en.png": "ae506a6c014bfeb8d8cbfdfbe94c14c9",
"assets/assets/icons/mail.svg": "3b93215ecf56755645d263d531901ec4",
"assets/assets/icons/telegram.svg": "e0082cebdadf9c5e828c9df1284d596f",
"assets/assets/icons/facebook.svg": "6bfdf3df7e83f8473465380abf832238",
"assets/assets/icons/armchair.svg": "0f35a2255ea0e09d1e8815c04baf4b0d",
"assets/assets/icons/lang_uk.png": "e2b587a3b15e34cb226afa3e572af279",
"assets/assets/icons/mortarboard.svg": "9434cced836f8b0827f804935df112a5",
"assets/assets/icons/clock.svg": "17dbdb44212473874295ab2a8446a9ad",
"assets/assets/icons/phone.svg": "d9d8b58e44213d27bbb20c795194a59d",
"assets/assets/icons/linkedin.svg": "1390e701498b10cb6d6b3fe68d11cffb",
"assets/assets/icons/insta.svg": "974335785792c8ff8d30abda115cff98",
"assets/assets/icons/medal.svg": "720d70a1affc560e6392252eb600f15f",
"assets/assets/icons/quote.svg": "05110ba41bcb48fbf043240bf31b2c51",
"assets/assets/translations/uk-UA.json": "668fb34d039c57726975871ab1f93f15",
"assets/assets/translations/en-US.json": "b838c9882ca66478dfe30b9f8e5cf86f",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
