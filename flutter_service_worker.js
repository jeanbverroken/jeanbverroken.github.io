'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "a44fcbd7c205ae24dcc2ddffee7f5ef4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "f2f43598425351e9f8ad38fef569861d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "948d0a873d4ba789f9a089e59e6ef9bc",
".git/refs/heads/master": "6399bda19f234606e290c34a2d517ff8",
".git/refs/remotes/test2/master": "6399bda19f234606e290c34a2d517ff8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/logs/refs/heads/master": "f6dd9a0efe7db26fa4cf5f221789189c",
".git/logs/refs/remotes/test2/master": "508f592f269213c5a1b20e8cc4dfb96c",
".git/logs/HEAD": "f6dd9a0efe7db26fa4cf5f221789189c",
".git/objects/22/d56243b1da707040693de9b4e32defb637be38": "02d68d2465c098f1dedd05d64b971e53",
".git/objects/d1/7992fbc357d9acb75d041c940d150ec079e584": "3425cf0470ad51db768d6f5ef072bf93",
".git/objects/2e/0b5e51e2914cf7b20913326a9a39b595f784a8": "fbf449a48ecdc8d6826b926c1a3add8a",
".git/objects/2e/4b2f6b54b873e7dd6d42717a2480d255a7e1af": "354ca2bc61fe7330611dd0facdb332dd",
".git/objects/44/ceb5425db8378a31e4056b0ab539e1a6f72c5a": "bb4e151c8287576ad5ce0da1f4c344de",
".git/objects/4b/20ee3d54cb2a0ed2eb7f66f770d4925bee9e2c": "6de6cd58d72b7e6c4f2cc5ec36848b1a",
".git/objects/18/e9d72fd2dce6d6a99c9ec08b19a2cdb3dca4d3": "58d8db0e26e13f624744c87b2abcec83",
".git/objects/c9/396ad01965e1642c927d3d22e703167de906f3": "0126d4c4d438c1f4628d636499831a96",
".git/objects/a2/bba504fd294f6e8186d6b9707f88f3ca40d962": "e2c8cd2370b12b84fb7c52238bf6a43f",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/9b/0137ea4cc43fa35c9ee538803c5842ffc87cfe": "a07b34ba05b45b8381cf9b4ead8bb64f",
".git/objects/f1/78b1857b0d2b405b6e680c2f3f6c60bef3e4bd": "12f82808576bfbdfda2d8b3280672df9",
".git/objects/35/df55a7baa10627f94befc077b28adebc72a96b": "09d9b2b5e19e0351c05023331c279cf3",
".git/objects/6c/39c689b1163388352a01c417c2708d5fd16988": "b3f83cc28bf8b131c9d4fde2d216be04",
".git/objects/5e/b6df8f3d0a492031c8fb102e091b90e762d273": "91b02aaa147de870224a263c57a7b850",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/97/678a0e4d390457ba16a68c7074d2a80c16d751": "f774eb33fcf36bc80be4dc9ea39cce3f",
".git/objects/83/fd532554430cb498705d4948d9772ad54330a7": "99c2d81960b3cfb87214b1c703c4aea9",
".git/objects/83/bc2a2acbc94247040d8c26f97f8629c6a385fc": "4548c45770a414c6a47f157e916cbd08",
".git/objects/be/c9a2acb7b1fe92d129220d637be29c1ff71555": "2203d7697669d06842d85790f4100c4b",
".git/objects/a1/ec0abf58a99ee5792d95267b383324bab8f9d7": "be6067a015a6f4792a655b1bccb2c150",
".git/objects/03/8cee01e1808f6d6f1e9100302700492391d590": "c5ed90a3d6dc64aec71d85a5f5897feb",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/af/53110b56cc76852e1b721b262518a99e6eb0cf": "bda6aa8b4e9e059e4c7a88c258b76121",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/4c/24aaa42c2cd9417e7c7c90e5ac00ba3d2e8ec6": "258cfb9429cce469bb09d38ac056f4f7",
".git/objects/4c/010b637c985f280a904f39ba3a97ff917d3c0f": "ac10719e53e14de5ed5ff3b43da8ba21",
".git/objects/3a/f9658e23d7772ffb1c70e5f68c2d26ea7a6ac1": "4fe0c62399a1c7524cbc27eca95258d8",
".git/objects/27/f706671281b618643617b3b75e05c97e0334c1": "8eab1fff06cb99be5aada8cd78046b48",
".git/objects/ed/8d32097dd99be68dae2b245b767f396b0468ff": "9d4ad7de7fa86a8900ddc2c58c3e48d7",
".git/objects/53/a0e6f26238258db298a7ed7e9180e6e7ad7511": "79a833d3063fd13828f1e2e73ebd676a",
".git/objects/53/9983fd3dec2492e77298dcb4797a0f1887e17f": "506aee6c2f12397b4f525ef840ba8838",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b5f43f82da227110bc003bc7192fd70358a1e5": "169996729c878778a16ce13ba3239d10",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/e7/de1ec2301be3bea416fdfad94f7f92dc8e303f": "8f0b9d053bab88ee8ddf513a73bffba6",
".git/objects/ef/be930d175282b5853d8baed790d0411a530cf7": "79f42f57a82c92d78daacc7e513c292f",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/36/e76989c37d328c20785f4865b28387b7999126": "c290265575e064d86f13b7767d74dc55",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/307b30a97d76dc067d1af09cb6fd027e125310": "2543928c4ccc4188eedf9a44e1b19167",
".git/objects/71/925de0a485fb6dcf72c370042af183e2cb0cba": "aa72776baf026527d43c26ccd147d56d",
".git/objects/bd/7781d261181c12855507948e5f4e5521f1b38c": "880bd62a9fa6a36722b3d4e9d1e00b5b",
".git/objects/dd/203fe5165793bdb6356dca46676159fd6c744b": "483c73edeaea3ddf2faec34b017bfce6",
".git/objects/3b/7be8fd03c18c6bb4ab62d1cab3d6cc5c9f3822": "a2180089b2214b80a99e598017a76de8",
".git/objects/78/0a51cf2fa9dca81ccc6f14ea1ff951147a415d": "999e73429cf95ee6e401cbb1405a8061",
".git/objects/50/566004fcd91afa5e988a1944936c64dddd40af": "08af494472ee7eca2f6f3d5d34d42154",
".git/objects/f7/53755183118f88cd44e1ff0e3bceab0f5a85c8": "963598bc864b535621a7c9965e9bae39",
".git/objects/79/c1f7f0f38e4aecff2b77dc7b5ad0f8d470d2e3": "ffe0805c26854e864c2dd7eb5c6ea8d6",
".git/objects/86/d4b3f06e04d43afccec58931fe1bbf1fb37719": "51d22d53c42a1be9ed222f5f9747e523",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/3f/969cf8432ccdf88b946dcde3c8ee980007a3e3": "b476f700ff56474164c8c97752b88e93",
".git/objects/d2/7a47241c8ae47078f936bb3b74e18e8c07a405": "5a013476682885b2e909b0314634a8b9",
".git/objects/3c/e596b2001e852f5158c100077ffb2a37c1c2ea": "a130afb9fd48d7cc726b25f0343df0bd",
".git/objects/9c/c3101df7b3a89fb61d2133eee2eba3ec6a47a8": "a6f016c38973554d2bc03d8aef0a6b70",
".git/objects/66/34d2a05fbe3ded78ea94678c4bf849a369f4f7": "29c42d3f2a8a26d74acabb4d0620b6c5",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/c8/18cbbbc4afbdd89647d4fcdee89cabcec64654": "70195585336320ff20171389d6abd38d",
".git/objects/38/8293fd84f74b2a003f1db870a13364eca6a260": "462e89f42c6e339be15842b02556cfb9",
".git/objects/fa/d1b066c0b987b9f19dfe079873a3bd948085e1": "ba639e9136ecceffa62377aef5353261",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/91/5d8dded7a0b2c2558e6a70a918a1f36a750a76": "092220cf067b9c74b4f8e28cbe756034",
".git/objects/2d/482de4768e1ac8b3b8329bc56645765d034b25": "0317d8c383400b6e3833092ca3ed0ae3",
".git/objects/6a/68ced1514b0dd228aad5d7c48adb961b6aa4cb": "452297f29f7e4ef28ac899d0a8f01b00",
".git/objects/d8/991d598f7be5e5a53b61587ec5067a7452e4e1": "09e61ad308bef2d07c77b7163dbbc7eb",
".git/objects/47/e4697349d28e300d7df28ad3272540e3e37640": "b00cce1c26e56d147cbf5029eb5ff745",
".git/objects/43/0d2cbb927490faf1ed55d5c3ce49ca22b2d4be": "22a57815cbebbf20fa5c3f7b4f057d80",
".git/objects/6d/f9fb19fd3043aab23ecea13d799bb931b0958f": "31c8968f1a517901db358711139f61cc",
".git/objects/a9/ab9c945c04ada7caa039bb9fae6a7ed8c87cf7": "cc3f7d60862815a0fad1791e6f736a4a",
".git/objects/ab/cde94a5005bb4494f422f69d841f80a7cfc0c3": "466ba9023497c2d21e6d12da8a6ebfa6",
".git/objects/ab/7fdd1e200806cc9197de177f0c6bc78b5be2fb": "74a715b4997d076222d84e6ead3d6054",
".git/objects/9f/320e74e8679c35b87d58ed13e42caf8fa1f60e": "38d7aa33f3bff32f2d43f020e9d6ebc0",
".git/config": "af96e73c599680b5ee2fb2a25212a5dc",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"main.dart.js": "3a7fa60707e88a5c6dd70374344cec4a",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/AssetManifest.json": "c9159419fcd5a43344d966a6b4c2f41b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/assets/icons/flutter_orange_dot.png": "c3837674f0d8ed951d9c198ea986806b",
"assets/assets/icons/flutter_red_dot.png": "c7cda9be72fc798005d61a9dd7605824",
"assets/assets/icons/flutter_green_dot.png": "4bf1d0dafff1368e3dee479082bd86be",
"assets/assets/icons/transparent.png": "c771fc7113f3dea82d580c397617d5e4",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "41fbd540902ec00a428ed893bfdbaf17",
"version.json": "729ae50009d4e0625ef0a53e0094cb18",
"index.html": "f246b6364f65586122de20e3bba9ae77",
"/": "f246b6364f65586122de20e3bba9ae77"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
