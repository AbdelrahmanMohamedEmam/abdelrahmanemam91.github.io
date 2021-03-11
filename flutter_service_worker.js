'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "022c3a3cd92e5c87ffeefe2fcb394e5d",
"/": "022c3a3cd92e5c87ffeefe2fcb394e5d",
"manifest.json": "f70a6aa90a8ece6a602f53ddcbae81d9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/lib/Language/en.json": "36ca6684e236491551765dde62f4e912",
"assets/lib/Language/ar.json": "efd1000c714f536079c1b5ca6d32abb7",
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
"main.dart.js": "6fc83f0d19360d1621fb457021158552",
".git/config": "8b767e314bf7c485fb44adb1c3a4ccff",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/76/e0064d9cb2ff50f925197bf87ead4160af1465": "06017670cdfcb13c32be1584e23aa212",
".git/objects/50/e6c4434deb10b0f15abf753db9f85d01d2fa80": "68ffb59786e73cbb46eaf92bf944d493",
".git/objects/c4/7c7c35b9d26e4e14a8a86d4569b530b6ddbd09": "2cb3db7cf3bfe8730e5620a84f8f4de9",
".git/objects/31/b583a141a93d6d29a88280ed8062246c63c042": "461d43fed5c65958cd5fe67c7b9c7f78",
".git/objects/ad/cb3f253f1e169fead2443eec6828a86bda08cc": "9534b755bdf66e7b98061a1725c84b08",
".git/objects/4b/e7fd9980a1b50f19cdb5668a3ac0d17a762d29": "5f73796333202078e9f398041162fe5e",
".git/objects/7a/093c34d987eb7aa31cf407125df9a5c1480762": "e564b19bc1040844905d0706d4979852",
".git/objects/a5/d2a9de5eff34e0ff4fe69ff9d6486808270393": "e58d8d53b0d42333c4b37b14f03844ed",
".git/objects/80/63baedcecd21fda682d1d4262f6e64e495a40b": "29ec10cbd1ca0c733048d170614fc6dd",
".git/objects/fd/26d9a37d8942df44b09d45461094e75743bbb3": "12a056d7c1191e66fb254e3d869e83a0",
".git/objects/72/99db91269e7ddb54c6eeb7d7e6f6028e20a1c9": "64f18e9be750ca60849123d39a3bd0c5",
".git/objects/55/20999eab00eaf07edbeda0edbb9f6aabecef4e": "3934316b9d03b88bf48191fccafa54f2",
".git/objects/54/1164c147ad7d2a70235fe0463148746501e10c": "3d5522657cf7fbe7f25079fd80250abd",
".git/objects/9e/134f79d11468c5b32d03332aec952321997c08": "a2c1f563192167b6fe79311973d92207",
".git/objects/1e/acad205389705401e0aceac3b9701414f6588e": "816f0c114776925b5d8f5bf4fcc7b7f5",
".git/objects/f8/6c934939c703d9192ca7897e1f1b4155871b72": "4f430d03984243c3236b58764262f658",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/1a/5998e6c17b7a78be5ed833215eb833412a47a2": "58b443f5424a2f05e26009e65fd299bf",
".git/objects/bb/b1054989648330e6041da48eb771449a386a9e": "886bb8a316cceb0ad29f9257adc083df",
".git/objects/bb/4e00a722576a674f8108d616446e90595ff7f8": "f98f50797b3c412beca5266fe3537b3e",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/de/49251fd1cc212aa60c7af3d19c2368ff13cc61": "da6abe4e3d674029608105ebd391cf12",
".git/objects/de/cdb998c19192707938aff1bcbba0f424087252": "5da18ed468f078117e9ca102d9687d22",
".git/objects/23/ec8d9cedd3088efc93f223deb57a806b8af623": "ab2874fe299bee563dea589949bad984",
".git/objects/39/828b01b83046daf587ae694cb8ca9878ac065e": "aeb6df2ef9d4cbbe1fa0113ffbae24f0",
".git/objects/44/d23d7b6f999e35f21924c9e5ca8eeb384bb8dd": "4e474fe05f92c8f33fac5f209f63d79b",
".git/objects/44/0f45662f3699342bd468cc4f22fe7f531e38ab": "ba828ce0284616acf6df50810ece1fd7",
".git/objects/73/ec78f5de2aeab5e67574e60d0a08b607f2ced7": "0c38e408e8b09a929cc48d6f72b8fcaf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/57/70a95ee6956e0d7710d4b8365ba3a10ad8a765": "969e4ddac1f00be5944438fd46466fbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ea/fc1e836d15111196d41a122830778ffa64f4e6": "f4caf6a56a7412a0cb3cb732b0ca6af5",
".git/objects/d9/3e4f19611c5e50d98ac861d5178e0d4596ad3e": "019de0999a7555d0623779aaf4961e5a",
".git/objects/fc/3dcc209ef8a25899677756cd4cc871b728ebf9": "871087cd19f4f787533d3f7bc1aff469",
".git/objects/e4/2630ce56c63a82d13e2020ea6d5d1216bf75e7": "2ab575f94d0a7b8644af1c6540d414a0",
".git/objects/91/929176119b8243359770d575baec001ade1ef0": "881a7c755d7ce5f72ffd66f12a39ca39",
".git/objects/91/5c3c91fbe87ce36ecf3278f0f3e2303236261f": "0299404d97c006025551623a107f3a70",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/90/ef3a702f3f740fc2ac46a3fa83eb187f16aee7": "986a08d1cf4ef2a921319a6054a92df2",
".git/objects/19/563dbe6c689b4cfb0268c6558f1683c073c214": "e240ff391a20c08a7d36377393feb397",
".git/objects/97/ba6d03e22b8adcbde7aeb4b1dc119bb29d79bd": "a191155d6d111bcd24adf0d691fc58d4",
".git/objects/97/6092c1c1ef8a8fa43277b10a5c74029805daef": "836cd4252b1294bdc34737e905cb41a8",
".git/objects/6f/9aa5d0b7d7fe7cb9458ac7edeb12a9097ec6bf": "79928090e34adc059a943dea42a45c87",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/df/2b7e0379f6baa6cb704c0919f050daa11d3caa": "0fb1fb6fc6c6eeb8ac78890271ef9009",
".git/objects/0a/e873be1ccea2334003142d3e650be9e60e57d6": "7de524694dab35c0e43e15db5aaddca0",
".git/objects/d3/5539fa7254d2f180190c0caecf58c21070f437": "ffbf6b1b63a65514b3829c047260ec66",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c1/3e5f074549fc80e824dcb8850c74afdfc5c414": "a4f99bd6526d19752dd1ccf302d775c8",
".git/objects/e9/83acc4046175e8d7cbdf7f33832daad34478a9": "768e613c8fd327c478a65094944fbc6f",
".git/objects/c6/6e0bf8a1de8f8bceca7f46805b9e67ba01e586": "64e0a69bc72999b03cd6e5d51bc74f44",
".git/objects/16/3930c7e0bbeb207f4ea19aae70beb90955b272": "62672f9093898db9b20bf36c8964935c",
".git/objects/ed/a8db687ecb8d5da719e47fe97797a6f95784c1": "83e63390179b3f54b0de21d7211e110c",
".git/objects/85/ff32fbf7c3eb025dcfe6cab7f26838a70ee24c": "1152cfa80bc74081b984afa3892a6a79",
".git/objects/27/a2c0a21cbcdc2850f932ebbd43cd9cab7748e4": "655a03061ce0c949a93cdcd8a1af4147",
".git/objects/a6/4fc3071875210ebe60ab308bf44aa54a9c2f6d": "60696625ea641459edb45996841be19e",
".git/objects/82/590333e1cbf61a825527b2f77ac1bb5581d8df": "3f8418d29282ada20b68e88d17e54f81",
".git/objects/ab/d5eb4aa4d608ad1b03b11a2158294a8ef8e7a2": "89d1fc45f8a89b67679d69b229692fdf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/e4bd7ed8b60b2c12b527355f4457385bbc9679": "ec2c25c3daa807d6e934eab116bd19e0",
".git/objects/ac/0dabcc3fe98c36bd5b5cb1cfde6cb05a5f5f12": "0b6b3e9911d2b492a79d3b1a4ab3f431",
".git/objects/ac/ca912c8620123f92c9f2105174e800bb1fc9c0": "38677ee906a476003b0e1ef32a5e31b1",
".git/objects/59/06e0304ed95752dcd37c303c3da760d350e61d": "a58fdfb245619d537d2c72be8283a452",
".git/objects/03/7a7ae6d0e73f03727c58fd49eb0ff04c526303": "ce8d71b02b152bdf9c9e463cb5cd2b7e",
".git/objects/eb/05cafce243df715e7b6ef4dbf58f29ee897365": "a345376eee3ed3f73cfeac15aae98774",
".git/objects/0e/bbacf5454c12cd9eeac63aba0eaf9b8d8ad41b": "ced3e449a75ab83d77557bb052a342ab",
".git/objects/0e/c95ab625fb913b15579f6aad44441073947c0c": "90e77edf857059b70000dbc5ad078a26",
".git/objects/17/c88d5421f65945f2f1cf0fbbf1036b8ae6e8b4": "84437f29a24b5b980c8f6dfc1000ce4d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/3696428abcfa998cf031fadf924dae790bcd44": "29f7b4ff5c68e3a4a5258ec2e8e3b5f6",
".git/objects/49/07bb0b2409d9d0d7bfc331785331cfc8876f5c": "2a7790cc41d206e6ced6bfb21f7be2dc",
".git/objects/e0/c4f2cb5c9e10dc3377ed8c53979fe56ccb3ef2": "77a6c58c922631540d6686193f0099aa",
".git/objects/1c/ddc8c82eb5fafe2a532172415649c59669dcf5": "8e11ec340ef42f4d627b196c6c9ff249",
".git/objects/1b/a53156916275acf331f19bb5753c5bfd99f2fb": "d8a3a8779274f2f8cd76df828881f6a8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/b878ba926fb5ebbe595e78fdbff4f30e1e3bc7": "7bda981dcd644d0bfc9bbbf76db11a9c",
".git/objects/9f/8d331edf6b9b5b65baea0ad372d52f7df9438d": "952a8988b024084fb55124462df313d3",
".git/objects/ff/d21028de5bd5b9eb7f893c1375218e49530014": "d6e9d141fe40461ba8289dd8924b9989",
".git/objects/ba/186a10fa618f4b7a66715e1890833d6b223549": "25a0c334e815ff0c0656231ea4f2c940",
".git/objects/ba/be226e3e83e3c24491cbe6683fd9e264bfc186": "bc57ef5bbd4a05d715664f8e05f0ef2f",
".git/objects/8f/bbaca30f324fc6bd581543ad08d640f7e87727": "687a1e392b245a441f318c099ceceb0c",
".git/objects/8f/8c7b060488064d035789fad220ec87eb96f1ca": "d3749906cc6472b3e2b865a58fdbb258",
".git/objects/3c/f179a3c7613ae8c1622c86203e00f2c0f9dbc0": "51f396b4446dc93c5ae2980e4b8e21ab",
".git/objects/32/29ee24d0ed60fd362b8115fe7450e445f7e33a": "35037cd2476339cac8288e87b0c3d31e",
".git/objects/c8/840105a3947b4e4f8cf63255d11acdbddf9497": "c58b3a4f40ddfd9cb1ec76493fb397be",
".git/objects/c8/ee5eda9de434f77f5ad96baa3372d5cafa884f": "d5ecadc4f195b064c0d94f9d7995536e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "25ff3932d921505f8965f5241c0074bb",
".git/refs/heads/main": "b7e2888ca6d23b1bf424673b88fa2099",
".git/refs/remotes/origin/main": "b7e2888ca6d23b1bf424673b88fa2099",
".git/logs/HEAD": "b7feb009ceca4a693c74ebead6f53c3a",
".git/logs/refs/heads/main": "cd86bbb7ed65af59933485ae63084507",
".git/logs/refs/remotes/origin/main": "b73afb1df4da8b9ef4f6dc4b1c9ac073",
".git/index": "8320c0754ff69f2b15b2467a6277ba64",
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
"icon.png": "ce85b94fd41a74321ab4c2dd61fd4de2"
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
