'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "2b091998ced917b007ddf455f3cc81da",
"/": "2b091998ced917b007ddf455f3cc81da",
"manifest.json": "61e849fbdc208927fc47559a7a8cb9b9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/lib/Language/en.json": "b5b3bf3a2f1e07f34c536c2ed01a4bb6",
"assets/lib/Language/ar.json": "06f12b7cf19fa1e30e52662dd278ce4a",
"assets/NOTICES": "3284e6b4490a95365ab918891b6e4f66",
"assets/assets/images/ronaldo.png": "5a3b406bf7ec5b36fdb8f830ae4ae39b",
"assets/assets/images/salah.png": "b6ed2c2a3b0fd8582d164510dcaf9615",
"assets/assets/images/mohamedshenawy.png": "c042d3523c836834e4cb37fb450ced6e",
"assets/assets/images/tarekhamed.png": "2ae4546587ccff79f9d208cb67a73e1c",
"assets/assets/images/Logo2.png": "ce85b94fd41a74321ab4c2dd61fd4de2",
"assets/assets/images/messi.png": "a2614446e44885717fda69ec3f21e91c",
"assets/assets/images/apesLogo.png": "85412bdc27fee91c1ca9c94f7f4c6435",
"assets/assets/fonts/bungee-regular.ttf": "c706b489c5e288414b67fe82d2fe9aa3",
"assets/FontManifest.json": "d1243a792e407c76af8d660f3b055d2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "c99ba2fe43e03227f7df606d1da37090",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"main.dart.js": "58181a6d973360abce99900ab2df3cba",
".git/config": "8b767e314bf7c485fb44adb1c3a4ccff",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/76/e0064d9cb2ff50f925197bf87ead4160af1465": "06017670cdfcb13c32be1584e23aa212",
".git/objects/c4/7c7c35b9d26e4e14a8a86d4569b530b6ddbd09": "2cb3db7cf3bfe8730e5620a84f8f4de9",
".git/objects/4b/e7fd9980a1b50f19cdb5668a3ac0d17a762d29": "5f73796333202078e9f398041162fe5e",
".git/objects/a5/d2a9de5eff34e0ff4fe69ff9d6486808270393": "e58d8d53b0d42333c4b37b14f03844ed",
".git/objects/72/99db91269e7ddb54c6eeb7d7e6f6028e20a1c9": "64f18e9be750ca60849123d39a3bd0c5",
".git/objects/1e/acad205389705401e0aceac3b9701414f6588e": "816f0c114776925b5d8f5bf4fcc7b7f5",
".git/objects/f8/6c934939c703d9192ca7897e1f1b4155871b72": "4f430d03984243c3236b58764262f658",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/1a/5998e6c17b7a78be5ed833215eb833412a47a2": "58b443f5424a2f05e26009e65fd299bf",
".git/objects/bb/b1054989648330e6041da48eb771449a386a9e": "886bb8a316cceb0ad29f9257adc083df",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/de/49251fd1cc212aa60c7af3d19c2368ff13cc61": "da6abe4e3d674029608105ebd391cf12",
".git/objects/de/cdb998c19192707938aff1bcbba0f424087252": "5da18ed468f078117e9ca102d9687d22",
".git/objects/44/d23d7b6f999e35f21924c9e5ca8eeb384bb8dd": "4e474fe05f92c8f33fac5f209f63d79b",
".git/objects/44/0f45662f3699342bd468cc4f22fe7f531e38ab": "ba828ce0284616acf6df50810ece1fd7",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ea/fc1e836d15111196d41a122830778ffa64f4e6": "f4caf6a56a7412a0cb3cb732b0ca6af5",
".git/objects/e4/2630ce56c63a82d13e2020ea6d5d1216bf75e7": "2ab575f94d0a7b8644af1c6540d414a0",
".git/objects/91/929176119b8243359770d575baec001ade1ef0": "881a7c755d7ce5f72ffd66f12a39ca39",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/90/ef3a702f3f740fc2ac46a3fa83eb187f16aee7": "986a08d1cf4ef2a921319a6054a92df2",
".git/objects/19/563dbe6c689b4cfb0268c6558f1683c073c214": "e240ff391a20c08a7d36377393feb397",
".git/objects/6f/9aa5d0b7d7fe7cb9458ac7edeb12a9097ec6bf": "79928090e34adc059a943dea42a45c87",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/df/2b7e0379f6baa6cb704c0919f050daa11d3caa": "0fb1fb6fc6c6eeb8ac78890271ef9009",
".git/objects/d3/5539fa7254d2f180190c0caecf58c21070f437": "ffbf6b1b63a65514b3829c047260ec66",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/83acc4046175e8d7cbdf7f33832daad34478a9": "768e613c8fd327c478a65094944fbc6f",
".git/objects/27/a2c0a21cbcdc2850f932ebbd43cd9cab7748e4": "655a03061ce0c949a93cdcd8a1af4147",
".git/objects/a6/4fc3071875210ebe60ab308bf44aa54a9c2f6d": "60696625ea641459edb45996841be19e",
".git/objects/ab/d5eb4aa4d608ad1b03b11a2158294a8ef8e7a2": "89d1fc45f8a89b67679d69b229692fdf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/59/06e0304ed95752dcd37c303c3da760d350e61d": "a58fdfb245619d537d2c72be8283a452",
".git/objects/eb/05cafce243df715e7b6ef4dbf58f29ee897365": "a345376eee3ed3f73cfeac15aae98774",
".git/objects/0e/bbacf5454c12cd9eeac63aba0eaf9b8d8ad41b": "ced3e449a75ab83d77557bb052a342ab",
".git/objects/17/c88d5421f65945f2f1cf0fbbf1036b8ae6e8b4": "84437f29a24b5b980c8f6dfc1000ce4d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/3696428abcfa998cf031fadf924dae790bcd44": "29f7b4ff5c68e3a4a5258ec2e8e3b5f6",
".git/objects/e0/c4f2cb5c9e10dc3377ed8c53979fe56ccb3ef2": "77a6c58c922631540d6686193f0099aa",
".git/objects/1c/ddc8c82eb5fafe2a532172415649c59669dcf5": "8e11ec340ef42f4d627b196c6c9ff249",
".git/objects/1b/a53156916275acf331f19bb5753c5bfd99f2fb": "d8a3a8779274f2f8cd76df828881f6a8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/9f/8d331edf6b9b5b65baea0ad372d52f7df9438d": "952a8988b024084fb55124462df313d3",
".git/objects/ff/d21028de5bd5b9eb7f893c1375218e49530014": "d6e9d141fe40461ba8289dd8924b9989",
".git/objects/ba/186a10fa618f4b7a66715e1890833d6b223549": "25a0c334e815ff0c0656231ea4f2c940",
".git/objects/8f/bbaca30f324fc6bd581543ad08d640f7e87727": "687a1e392b245a441f318c099ceceb0c",
".git/objects/32/29ee24d0ed60fd362b8115fe7450e445f7e33a": "35037cd2476339cac8288e87b0c3d31e",
".git/objects/c8/ee5eda9de434f77f5ad96baa3372d5cafa884f": "d5ecadc4f195b064c0d94f9d7995536e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "7c3fe44ecc6743d239af8e102f7ab80e",
".git/refs/heads/main": "69094fdc0f7be9652bd07f7916e92e20",
".git/refs/remotes/origin/main": "69094fdc0f7be9652bd07f7916e92e20",
".git/logs/HEAD": "3326fde7ca0ee60337d7fd4c76464d02",
".git/logs/refs/heads/main": "f1e445f870503e4017c157c1fa756456",
".git/logs/refs/remotes/origin/main": "d03d75c4b7512ac53218cd43314f78ca",
".git/index": "ce1bd5cab4cf4fb3053ce514998c82e3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"version.json": "1f80ab12c3c029648754725f415ef11f",
"README.md": "c7b21a05916e2520e1042638cb3645d4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
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
