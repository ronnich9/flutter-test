'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "dc05a2ff43c94f5ba9fc907aca0c177a",
"assets/AssetManifest.smcbin": "3d0b26c50f578aeeb7a8d2388ad80292",
"assets/assets/copayment_assets/copayment_fonts/Roboto-Black.ttf": "56aa07e4f2f764e31cb09d8ad1362808",
"assets/assets/copayment_assets/copayment_fonts/Roboto-BlackItalic.ttf": "cb78d8420ac5bc66e3606dd582d5bc08",
"assets/assets/copayment_assets/copayment_fonts/Roboto-Bold.ttf": "fb6210739c4993c1a86f812e6502e471",
"assets/assets/copayment_assets/copayment_fonts/Roboto-BoldItalic.ttf": "8fee5306f412b2bd3a5129fe9bba9265",
"assets/assets/copayment_assets/copayment_fonts/Roboto-Italic.ttf": "9b6488bdc5881a71f018252ae53cc864",
"assets/assets/copayment_assets/copayment_fonts/Roboto-Light.ttf": "01744b0f7878c20cdcbd7b3a18040d33",
"assets/assets/copayment_assets/copayment_fonts/Roboto-LightItalic.ttf": "a97f2290ca761625258702295e02d799",
"assets/assets/copayment_assets/copayment_fonts/Roboto-Medium.ttf": "b21ffa747200921845e38910b8ea97c0",
"assets/assets/copayment_assets/copayment_fonts/Roboto-MediumItalic.ttf": "2b2e515558cca03d7455ea5039c64c10",
"assets/assets/copayment_assets/copayment_fonts/Roboto-Regular.ttf": "afe8eacfc0903cc0612dc696881f0480",
"assets/assets/copayment_assets/copayment_fonts/Roboto-Thin.ttf": "ad0fb8cf3e91768b11388432acb16ca3",
"assets/assets/copayment_assets/copayment_fonts/Roboto-ThinItalic.ttf": "7c33e4301357ec4164edfc9ff55be6ec",
"assets/assets/copayment_assets/copayment_pngimage/activity.png": "8e048874bd84abf31d3d8c77200021f8",
"assets/assets/copayment_assets/copayment_pngimage/activitychart.png": "a3b14576da4ab377507f00e110c4f3dd",
"assets/assets/copayment_assets/copayment_pngimage/alertimage.png": "80892d9f7c7d7686eba5179ed2e4f5aa",
"assets/assets/copayment_assets/copayment_pngimage/america_icon.png": "cb76cb7e467ea822a208b390b713b819",
"assets/assets/copayment_assets/copayment_pngimage/apple.png": "b10118f96705f9d5695fb789179d8248",
"assets/assets/copayment_assets/copayment_pngimage/applogo.png": "251f0b59e6a89869c91be70ce8c73018",
"assets/assets/copayment_assets/copayment_pngimage/backearo.png": "55fc0657fb977b26512be2a8a8b6da5f",
"assets/assets/copayment_assets/copayment_pngimage/camera.png": "67963f5ff040598d433527e1630dff4c",
"assets/assets/copayment_assets/copayment_pngimage/card.png": "f3f3715c0fb0fe19c018189f6406b05b",
"assets/assets/copayment_assets/copayment_pngimage/card1.png": "f14d56cfe12993a8d556725225b82f8d",
"assets/assets/copayment_assets/copayment_pngimage/card2.png": "a3a87e9ad6787a95265546c4d3739df2",
"assets/assets/copayment_assets/copayment_pngimage/card3.png": "3d6486d935a748528db77aad3640c93f",
"assets/assets/copayment_assets/copayment_pngimage/card_balance.png": "55384cf7504b7e9c6e956882f1a4bef8",
"assets/assets/copayment_assets/copayment_pngimage/card_onboarding.png": "ab3e28b7b40c2836d30e8c79f4860d16",
"assets/assets/copayment_assets/copayment_pngimage/chart.png": "369eee0aa5bc9531b46ef9ee102b8891",
"assets/assets/copayment_assets/copayment_pngimage/chartbar.png": "9a384d213012bb4795d7e5fb08543355",
"assets/assets/copayment_assets/copayment_pngimage/check.png": "83e2fc00dbe5bd4f046b4157546e35e7",
"assets/assets/copayment_assets/copayment_pngimage/close.png": "ab19b625de5d894b9e162a7971de4e15",
"assets/assets/copayment_assets/copayment_pngimage/darkmode.png": "2dd093605e0891422bed1cabd3bc9d2a",
"assets/assets/copayment_assets/copayment_pngimage/face.png": "f8281bae1debda99f0dfbf14df9dde2a",
"assets/assets/copayment_assets/copayment_pngimage/findlocation.png": "02c9f7e6ff0081bf96ddf38bc7213407",
"assets/assets/copayment_assets/copayment_pngimage/fingrprint.png": "8bbf4bd8f920393a80416c86572c9331",
"assets/assets/copayment_assets/copayment_pngimage/flag_china.png": "5df48f73ce6817d6df177e31327a616d",
"assets/assets/copayment_assets/copayment_pngimage/flag_indonesia.png": "de56762f92208536c7ccaa9b9d18e11f",
"assets/assets/copayment_assets/copayment_pngimage/flag_netherlands.png": "a40c669c004856e7e571ac639131d44b",
"assets/assets/copayment_assets/copayment_pngimage/flag_singapore.png": "ff64b7cb48f979c0dafaaa2b289a8aea",
"assets/assets/copayment_assets/copayment_pngimage/flag_united_kingdom.png": "07fb018da06643a832aaa8732c8a0359",
"assets/assets/copayment_assets/copayment_pngimage/flag_united_states.png": "04275ffb53116160f3a2be1df16495d1",
"assets/assets/copayment_assets/copayment_pngimage/google.png": "7d2168a4189729cdb477e0e78921a42a",
"assets/assets/copayment_assets/copayment_pngimage/illustration.png": "40cb73f59b8e2ff6a3708c89528612ee",
"assets/assets/copayment_assets/copayment_pngimage/image.png": "8a77de1296d163055c3a7f5512a51c05",
"assets/assets/copayment_assets/copayment_pngimage/map.png": "322a73adf2170544a1f8e470af54922f",
"assets/assets/copayment_assets/copayment_pngimage/mastercard.png": "f7c1597b43d5fa7ffadc2418babbe3b1",
"assets/assets/copayment_assets/copayment_pngimage/menu.png": "e6b1f0237b880c0b6dead47b5b1604a2",
"assets/assets/copayment_assets/copayment_pngimage/notification.png": "ac6898ec8fb159817021bc15d3b88c9e",
"assets/assets/copayment_assets/copayment_pngimage/onboarding.png": "270837655999f222ab0d613efb8e1ed5",
"assets/assets/copayment_assets/copayment_pngimage/onboarding1.png": "0d5a98a7f94c2248ea60cd220ad5e301",
"assets/assets/copayment_assets/copayment_pngimage/pass_lock.png": "220a3b180dbc8a29d60bb1de2fd5c4f9",
"assets/assets/copayment_assets/copayment_pngimage/paypal.png": "4a8fe8c935caa5951c0e4c91fd62786b",
"assets/assets/copayment_assets/copayment_pngimage/profile.png": "3c84a3c31fd6ebf0a3342c4105795d00",
"assets/assets/copayment_assets/copayment_pngimage/profile1.png": "bdfe7f435a0fdf750540aaa21dace220",
"assets/assets/copayment_assets/copayment_pngimage/profile2.png": "d49f312dd263ec6c3ac5c3e63a571733",
"assets/assets/copayment_assets/copayment_pngimage/qr.png": "9fa56a5042670b8d019c4084737d6d4a",
"assets/assets/copayment_assets/copayment_pngimage/qrbackicon.png": "ff7faf60d055f061f77044430423fc47",
"assets/assets/copayment_assets/copayment_pngimage/qrmenuicon.png": "b41fcefed36c90d187a5d8cdd77f5345",
"assets/assets/copayment_assets/copayment_pngimage/refercodehappy.png": "52bf51ea3b8e87e23a2c3bd777b5d3f7",
"assets/assets/copayment_assets/copayment_pngimage/removebg.png": "c5d3ef23724ff9023afc72f91c25ff36",
"assets/assets/copayment_assets/copayment_pngimage/right.png": "abbe952bac2620fc54a2aafa261223c1",
"assets/assets/copayment_assets/copayment_pngimage/scanmobile.png": "b45501627050a4ebf124748460d6b3b6",
"assets/assets/copayment_assets/copayment_pngimage/splash.png": "d7b093ebe507b932d0b13876e86f6bd9",
"assets/assets/copayment_assets/copayment_pngimage/topupcard.png": "2a38bc63b085804c27bde7f667823b37",
"assets/assets/copayment_assets/copayment_pngimage/topupsucess.png": "8ca430ebbffea3f39f6384802beacc35",
"assets/assets/copayment_assets/copayment_pngimage/transfermoney.png": "4a15ed09e2b9469085fc7547e039b411",
"assets/assets/copayment_assets/copayment_pngimage/union_western.png": "39a3ed2b9498caeb72a9b3e4d9c55cbe",
"assets/assets/copayment_assets/copayment_pngimage/us_icon.png": "e457704f3f4fbcb1b506d8b0e2cb3c2a",
"assets/assets/copayment_assets/copayment_pngimage/verify_profile.png": "36da38df6d4d72404a38ac43b0e35662",
"assets/assets/copayment_assets/copayment_svgimage/accountinfo.svg": "83b2c42221f9a41892d23e7a670aa2b9",
"assets/assets/copayment_assets/copayment_svgimage/activityfill.svg": "913ce32373c9e397e131fa2303cac0c4",
"assets/assets/copayment_assets/copayment_svgimage/activityoutline.svg": "9cf20b132eaa81752bb419117789f7c3",
"assets/assets/copayment_assets/copayment_svgimage/alert_circle.svg": "87576fdec12219eb7a454f1a7bba7384",
"assets/assets/copayment_assets/copayment_svgimage/amazon.svg": "5e9cbe7b26bebef5ec6f964342c1883e",
"assets/assets/copayment_assets/copayment_svgimage/bank.svg": "4c2359304a978201bdff56d8f0817227",
"assets/assets/copayment_assets/copayment_svgimage/bitcoin.svg": "e65867ff0da6b36f7531c090eff283ad",
"assets/assets/copayment_assets/copayment_svgimage/bolt.svg": "398e4a2ae99f69acc2586b95e686b23e",
"assets/assets/copayment_assets/copayment_svgimage/bookmark.svg": "9448eff5d2d2098a22fa9f30d14215d0",
"assets/assets/copayment_assets/copayment_svgimage/bottomarrow.svg": "e252c32f28d482a3047e5230d2274cf5",
"assets/assets/copayment_assets/copayment_svgimage/brodyarmodo.svg": "f0251edba1320d3b98ae089543931404",
"assets/assets/copayment_assets/copayment_svgimage/car.svg": "6dae3c02427f72d20b3ba92e26b68621",
"assets/assets/copayment_assets/copayment_svgimage/car1.svg": "3d387422a12f9b3846762eadefa4f49f",
"assets/assets/copayment_assets/copayment_svgimage/changepassword.svg": "06e378c7ca77e356e8dc1424a4a7fd3f",
"assets/assets/copayment_assets/copayment_svgimage/chart_bar.svg": "be45965ffe66f703fa65374374a723c2",
"assets/assets/copayment_assets/copayment_svgimage/chart_line.svg": "4df0f62377186fba75cf528f660a3a70",
"assets/assets/copayment_assets/copayment_svgimage/check.svg": "173dc7930e475797d1dc61ffbd75681b",
"assets/assets/copayment_assets/copayment_svgimage/check1.svg": "b1d0b7ed91abfa90f3412e3a40f28c83",
"assets/assets/copayment_assets/copayment_svgimage/contactless.svg": "d591b762156eb584f9630657bf1126bd",
"assets/assets/copayment_assets/copayment_svgimage/contactlist.svg": "f027ac5f2032802c782c028843558193",
"assets/assets/copayment_assets/copayment_svgimage/copy.svg": "46a78461e64408fc854b6b5f67aa0ba5",
"assets/assets/copayment_assets/copayment_svgimage/creditcardfill.svg": "cf2b65cc64b1c1b4c1e3b543ec896983",
"assets/assets/copayment_assets/copayment_svgimage/creditcardorange.svg": "16da6c0fef73283b8fe17dd873b105b6",
"assets/assets/copayment_assets/copayment_svgimage/creditcardoutline.svg": "c6c805314f19a86d1e3ed79f751ae9ba",
"assets/assets/copayment_assets/copayment_svgimage/creditcardpurple.svg": "018c852599ac83dd128d91aa85ff32c8",
"assets/assets/copayment_assets/copayment_svgimage/digital_document.svg": "c4dd104ed51cc0bee095c1fcabc3238b",
"assets/assets/copayment_assets/copayment_svgimage/discount.svg": "eacacebaccca58b7127a1b007001dcc6",
"assets/assets/copayment_assets/copayment_svgimage/dot.svg": "42d6c9f6aae92784af56c3b90759222b",
"assets/assets/copayment_assets/copayment_svgimage/double_earo.svg": "63cb3a3b1d4644b17f220447e62f7e90",
"assets/assets/copayment_assets/copayment_svgimage/element_plus.svg": "5207e19451a9e8703dfe25277f7c30d6",
"assets/assets/copayment_assets/copayment_svgimage/faq.svg": "57d363d494d94111d722ae1133424b31",
"assets/assets/copayment_assets/copayment_svgimage/financial.svg": "0b858fb857cdeddbfd0eabad85730870",
"assets/assets/copayment_assets/copayment_svgimage/helpmachine.svg": "1e1772746da60c7aa88b5f9e4604ed68",
"assets/assets/copayment_assets/copayment_svgimage/homefill.svg": "0ceb169f71db6098a1ef36a2038f0088",
"assets/assets/copayment_assets/copayment_svgimage/homeoutline.svg": "990adcaf389e0ed799fe8bd8fdf0cf63",
"assets/assets/copayment_assets/copayment_svgimage/identify_card.svg": "6586ecbf9a3594f71636c78fae75801a",
"assets/assets/copayment_assets/copayment_svgimage/language.svg": "7455b98a14050c63f1ca1983d3367211",
"assets/assets/copayment_assets/copayment_svgimage/line.svg": "c934770cd65ded0fd27e671fead9b95e",
"assets/assets/copayment_assets/copayment_svgimage/locationearo.svg": "4384f5c4606734a8d2f42b292e4c9ffd",
"assets/assets/copayment_assets/copayment_svgimage/logout.svg": "eefeaa8bc2074113d492047c69057f9a",
"assets/assets/copayment_assets/copayment_svgimage/mail.svg": "b2e632bba4f93b237c9e4bbd5484b0ae",
"assets/assets/copayment_assets/copayment_svgimage/minus.svg": "befbe3ae3c3fa12864ef03df56cfbeb8",
"assets/assets/copayment_assets/copayment_svgimage/money_recive.svg": "78adc891c094095920a3607780db8ced",
"assets/assets/copayment_assets/copayment_svgimage/money_recive1.svg": "769f03022df0f038d1f26a806f14a3c8",
"assets/assets/copayment_assets/copayment_svgimage/money_send.svg": "6a39d61c44519a01ff9f2beffb0b9e80",
"assets/assets/copayment_assets/copayment_svgimage/money_send1.svg": "7cbf46089fbcb3ce15a083e2233c71d5",
"assets/assets/copayment_assets/copayment_svgimage/notification.svg": "3352f3f3b7bb97479a4b957eaf6cbd3a",
"assets/assets/copayment_assets/copayment_svgimage/onlinepayment.svg": "8823ad668dbb84cc0a00ae2286227ab1",
"assets/assets/copayment_assets/copayment_svgimage/password.svg": "9102710c7ecb3e1eec25a554baf2199b",
"assets/assets/copayment_assets/copayment_svgimage/paymentfriends.svg": "d6efb4567be21043a14af4b4b5c10664",
"assets/assets/copayment_assets/copayment_svgimage/paypal.svg": "7999cb0c43aa35ddae868e522326566e",
"assets/assets/copayment_assets/copayment_svgimage/physicscard.svg": "73d69009514bc7c68ae85dd41932a3aa",
"assets/assets/copayment_assets/copayment_svgimage/plus.svg": "778dac1729b231913eed1c248a6e90ff",
"assets/assets/copayment_assets/copayment_svgimage/profilefill.svg": "79bdd5e67d4f33525932dbbcf846d9f6",
"assets/assets/copayment_assets/copayment_svgimage/profileoutline.svg": "ffa3d7fbaaf795f5ce738a14bc6dd7c1",
"assets/assets/copayment_assets/copayment_svgimage/referalcode.svg": "c7ef4425ccbbee9ffb210f00083f16f7",
"assets/assets/copayment_assets/copayment_svgimage/refresh_circle.svg": "7c1bd97ad31c821f2a4e71fa61137838",
"assets/assets/copayment_assets/copayment_svgimage/reward.svg": "1251356a54b5f1838d3268edc0d4058c",
"assets/assets/copayment_assets/copayment_svgimage/right.svg": "dda8e4a144aba1a63231b64e32417a6e",
"assets/assets/copayment_assets/copayment_svgimage/rightarrow.svg": "70192e4a0094a22cfb63bd2710b38b9d",
"assets/assets/copayment_assets/copayment_svgimage/scan.svg": "52456e7a4aca6c88a7280b3807dfdd21",
"assets/assets/copayment_assets/copayment_svgimage/search.svg": "2829c6dde4d30d7a3c22244c3a76b650",
"assets/assets/copayment_assets/copayment_svgimage/setting.svg": "cac337ecd9819e3308352dde22c24f78",
"assets/assets/copayment_assets/copayment_svgimage/spenddaily.svg": "2fc2397cb12077607581f0c964cf5976",
"assets/assets/copayment_assets/copayment_svgimage/spendtravelling.svg": "cbc42cb6bb2db31c5eaf2cbd934ed5a1",
"assets/assets/copayment_assets/copayment_svgimage/sports.svg": "951a06df3f942a02aea1945d57d5669a",
"assets/assets/copayment_assets/copayment_svgimage/star.svg": "46b01a08f4740a563d9efa0307c2dec2",
"assets/assets/copayment_assets/copayment_svgimage/swap.svg": "9bd4bda902d5ca463b62dda49514e3e5",
"assets/assets/copayment_assets/copayment_svgimage/tabler_link.svg": "0d4883cb11a8d72c2ec1db4cce6f54ad",
"assets/assets/copayment_assets/copayment_svgimage/transaction.svg": "cbef5858d7d2dd41c2f6ff5631b1be00",
"assets/assets/copayment_assets/copayment_svgimage/watch.svg": "f95812dbe8d81c31b8818b8303d40e65",
"assets/FontManifest.json": "0b0e77eb185340805a7c8ce85695d47d",
"assets/fonts/MaterialIcons-Regular.otf": "76dd7536c1c5787e6910ee68282a7731",
"assets/NOTICES": "0ed3bf682ac0b46def73cda88deb3351",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/language_picker/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "4fe1928e582fd2e3316275954fc92e86",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "91eeab86664a84dff9724eb80c54906a",
"/": "91eeab86664a84dff9724eb80c54906a",
"main.dart.js": "2adbf14cf59c70407ed27d085398165b",
"manifest.json": "e9f7b0f370f2f30143fbde8a4f7ed524",
"version.json": "26a31bd00fd2707a2d3cbd7882079ce7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
