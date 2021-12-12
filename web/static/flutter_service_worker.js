'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d3b16a76d3ac0e0acef87cbc45dad5aa",
"assets/assets/alaqsha/hero-bg.jpg": "b5fcec5edf66180f918c4dfb71ef7bd0",
"assets/assets/alaqsha/logo.png": "30fbdd8ce300486f748b688e56dcff6e",
"assets/assets/alaqsha/profile_pic.png": "6d7d03122bdd8616efbc278255cd5f4d",
"assets/assets/alaqsha/splash.png": "30fbdd8ce300486f748b688e56dcff6e",
"assets/assets/fometic/hero-bg.jpg": "9d43fa03f37531ff1a733ac7d976f083",
"assets/assets/fometic/logo.png": "449b7cdd11e78b3e7daed944fd4a6132",
"assets/assets/fometic/profile_pic.png": "6d7d03122bdd8616efbc278255cd5f4d",
"assets/assets/fometic/splash.png": "449b7cdd11e78b3e7daed944fd4a6132",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/menu_dashbord.svg": "f7f37cb6889f12c06333067310998af9",
"assets/assets/icons/menu_home.svg": "842d7b6cee84fc9c1991986788d0066f",
"assets/assets/icons/menu_profile.svg": "7a896e0f2111be78edc425fa9d4c9bbc",
"assets/assets/icons/menu_setting.svg": "8385f10891b85a8a1f8bbc6d377a836f",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/visibility.svg": "80b130c5b656dc0601bc1096881764f0",
"assets/assets/icons/visibility_off.svg": "1cb5e17d93c4d8d508b7441a26ad8e01",
"assets/assets/images/hero-bg.jpg": "9d43fa03f37531ff1a733ac7d976f083",
"assets/assets/images/logo.png": "449b7cdd11e78b3e7daed944fd4a6132",
"assets/assets/images/profile_pic.png": "93676ee8ceaddeec712a3f45b5c96d91",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a8e23b01a8340d4730cc173c13603763",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.ico": "7dd173a8d148d73e42dd8276bc09846d",
"favicon.png": "35444a7455a7812ba5732c065e98ac01",
"index.html": "59e83ffd7f2c6dd80ecdd5567e25e070",
"/": "59e83ffd7f2c6dd80ecdd5567e25e070",
"main.dart.js": "01e415ad31f40e994f86cdb7ac800dcf",
"main.dart.js_1.part.js": "e946154262ef6ba4b318f99632ac1c78",
"main.dart.js_10.part.js": "6d186c9c2e9b5be9684e4aa756a6a603",
"main.dart.js_11.part.js": "02dcc89e5fa42446a2933ac2eb497095",
"main.dart.js_12.part.js": "e2cf0d3fe68896103b209f3f98dca743",
"main.dart.js_13.part.js": "9d4eecbf01738770f3dbd22a01c63183",
"main.dart.js_14.part.js": "a051cf97078aa66c3ca9c64412f0ff10",
"main.dart.js_15.part.js": "dfb161446aaa57e3b0fa5d832804086d",
"main.dart.js_16.part.js": "60e5062f580a602ada58a83b1f39559b",
"main.dart.js_17.part.js": "a67121c0cf32034271f1d1ddb7819ae1",
"main.dart.js_18.part.js": "eca323e49095e7f419ce2643f7ccdf10",
"main.dart.js_19.part.js": "b4712587fde65f80e95ddc68740f94dd",
"main.dart.js_2.part.js": "557649c06de1292cd79c84d879d28ca3",
"main.dart.js_20.part.js": "6a20ab9d308745fa6a3beb5ebeafce6f",
"main.dart.js_22.part.js": "d12245184b519b3c3c03d61dc56b83fe",
"main.dart.js_25.part.js": "d24bc250916d289ba38bdc582e2580a0",
"main.dart.js_28.part.js": "8d52af5344b28fc5cae1804972efa6a5",
"main.dart.js_29.part.js": "a5f029833c2f2d3baeaf940f7e1539df",
"main.dart.js_31.part.js": "1b0d3d36f4c955d3a1028e95f5d53322",
"main.dart.js_32.part.js": "7624aa59385274aff579f4884247b809",
"main.dart.js_33.part.js": "3d4d00512a7d3528ae68b0cab466f0fb",
"main.dart.js_34.part.js": "8f8a6409e5eb69169a566184f17d6aef",
"main.dart.js_36.part.js": "bd8b500332d6b7d748b238a322292f46",
"main.dart.js_4.part.js": "8192d9d8f1dc0d229e03659188c067df",
"main.dart.js_7.part.js": "086bbd8235f4701856068e0558fd3792",
"main.dart.js_8.part.js": "f91e84fa093ac09631de232aab37f379",
"main.dart.js_9.part.js": "a68214b4e7924e03efd018a7ad8aff57",
"manifest.json": "ba136a0d2bf46fd2316dc572bfdc20c9",
"splash/img/dark-1x.png": "c0c9ddff67858cb3b48db9a0f405fd18",
"splash/img/dark-2x.png": "c0c9ddff67858cb3b48db9a0f405fd18",
"splash/img/dark-3x.png": "c0c9ddff67858cb3b48db9a0f405fd18",
"splash/img/light-1x.png": "2a6c59ad541a72179f476f5cf44b0115",
"splash/img/light-2x.png": "2a6c59ad541a72179f476f5cf44b0115",
"splash/img/light-3x.png": "2a6c59ad541a72179f476f5cf44b0115",
"splash/img/light-4x.png": "2a6c59ad541a72179f476f5cf44b0115",
"splash/img/Wanthat%20dark.png": "c0c9ddff67858cb3b48db9a0f405fd18",
"splash/style.css": "2433ebe06a6440c3d3945f4981fe3a40",
"version.json": "84925103f30037c8ecbf0c33947b5150",
"wticons/demo.svg": "62341eeda317f6b6aaa7eadc2c934f4b",
"wticons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"wticons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"wticons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"wticons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"wticons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"wticons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"wticons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"wticons/Icon-192.png": "4a0cc2ecaf5b22f32f36c35b99cb7982",
"wticons/Icon-512.png": "4a0cc2ecaf5b22f32f36c35b99cb7982",
"wticons/Icon-maskable-192.png": "4a0cc2ecaf5b22f32f36c35b99cb7982",
"wticons/Icon-maskable-512.png": "4a0cc2ecaf5b22f32f36c35b99cb7982",
"wticons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"wticons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"wticons/menu_agenda.svg": "f5b01a82aeef26e6efad296397555a39",
"wticons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"wticons/menu_notification.svg": "cb5eb46816273783337a84b735472342",
"wticons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"wticons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"wticons/menu_trans_in.svg": "7dfb1d90d5040a7edf82abb9c45d485f",
"wticons/menu_trans_out.svg": "b604148afb56ab2729af0d9446a0d67b",
"wticons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"wticons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"wticons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"wticons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"wticons/xd_file.svg": "38913b108e39bcd55988050d2d80194c"
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
