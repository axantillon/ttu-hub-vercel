if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const r=e=>s(e,o),t={module:{uri:o},exports:c,require:r};i[o]=Promise.all(n.map((e=>t[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/TTULogo-local.webp",revision:"ac1ba30964023f96d7076e645cd49b12"},{url:"/_next/static/chunks/173-d03264da49f8410c.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/190-07b0ca9234f8cd59.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/195-c738b97532db9ca8.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/205-de9d797b535abe6e.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/231-50b0ec964aad429f.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/232-5025a93e47372c35.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/318.67461aab1aa569d4.js",revision:"67461aab1aa569d4"},{url:"/_next/static/chunks/345-2010cd0338066c14.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/366-947e19f44c8c1b90.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/3ab9597f-dcc27125e9f7a01e.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/550.78062c8e0f31c7e4.js",revision:"78062c8e0f31c7e4"},{url:"/_next/static/chunks/591-f58393ff87fc80c3.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/598-25d1ff406d8ef950.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/5ab80550-1343a160ad9b0f18.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/788-428c7488b3c72ec2.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/866.be1196c0aca7bd0b.js",revision:"be1196c0aca7bd0b"},{url:"/_next/static/chunks/app/(protected)/(main)/(subpages)/layout-d0cac448ffab3fb4.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/(protected)/(main)/(subpages)/org/%5Bid%5D/page-65e88fb98acd3658.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/(protected)/(main)/(subpages)/user/%5Busername%5D/page-9babc6ab18fde723.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/(protected)/(main)/explore/page-c9beb2d6e55dbd1e.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/(protected)/(main)/layout-3dfb4634938be9d9.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/(protected)/(main)/leaderboard/page-91761e492372fc88.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/(protected)/(main)/loading-fdfe496e210b3754.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/(protected)/(main)/page-22828a70ba92d36c.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/(protected)/(main)/settings/page-14a204f321efad25.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/(protected)/(main)/settings/profile/page-461cb9b6c855894e.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/(protected)/(main)/wallet/page-52c483ba82adde76.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/(protected)/layout-1e203854498a097c.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/_not-found/page-f15dc7a87c429458.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/event/%5Bid%5D/page-3494f96d521e9d0b.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/event/%5Bid%5D/users/page-e9d6ee46d9b795ef.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/event/layout-c6b085f84c3f5e55.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/layout-23d653c40bf9f6b0.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/login/page-8e5db78775bd10e2.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/app/onboarding/page-b1b9028baf5d50bc.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/fd9d1056-f2db31f5bc9f916f.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/framework-b9768e636829c6d6.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/main-app-2d1116436e2237da.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/main-e3af76cd686130fa.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/pages/_app-037b5d058bd9a820.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/pages/_error-6ae619510b1539d6.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-757bd18e0f4a1454.js",revision:"kTpgPyvfEB7XY5tDhXJUp"},{url:"/_next/static/css/4cb73dbf73545fee.css",revision:"4cb73dbf73545fee"},{url:"/_next/static/kTpgPyvfEB7XY5tDhXJUp/_buildManifest.js",revision:"a0ae24e7f29dd3809ab75b5dd91a79dc"},{url:"/_next/static/kTpgPyvfEB7XY5tDhXJUp/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/icons/android/android-launchericon-144-144.png",revision:"550521f9d87dd044780fd9b39e82fd92"},{url:"/icons/android/android-launchericon-192-192.png",revision:"c6f582e20ace01b290df3c39ecc9d3b5"},{url:"/icons/android/android-launchericon-48-48.png",revision:"f0d57fbb5561067dc80003244602b27f"},{url:"/icons/android/android-launchericon-512-512.png",revision:"6b1f7425fc035a8cce2b6906ece8d9ec"},{url:"/icons/android/android-launchericon-72-72.png",revision:"0c3b545768cdcc24d5c0ab7de830d240"},{url:"/icons/android/android-launchericon-96-96.png",revision:"ecf494330caa2e4e9e3ff706a83e8bb7"},{url:"/icons/ios/100.png",revision:"97749b5cee3c767e5144ac5300f626be"},{url:"/icons/ios/1024.png",revision:"b509e5a654fd01783449d14b4fd7d44d"},{url:"/icons/ios/114.png",revision:"840bce0c5bdbf59ca88c8c3a3b53ad4c"},{url:"/icons/ios/120.png",revision:"f49ec07b0feddd42c42e12ccd02dfe51"},{url:"/icons/ios/128.png",revision:"a20ff660704d8355e93c193858525218"},{url:"/icons/ios/144.png",revision:"550521f9d87dd044780fd9b39e82fd92"},{url:"/icons/ios/152.png",revision:"ce01b334a74154b7f6e2ce583e07bab2"},{url:"/icons/ios/16.png",revision:"8b9f2808954fa8ebc72c93c4e77164e0"},{url:"/icons/ios/167.png",revision:"ff2687b954f2873f63a2a7b9204338a2"},{url:"/icons/ios/180.png",revision:"e5bdc6f97e4f59d13cc508493600b919"},{url:"/icons/ios/192.png",revision:"c6f582e20ace01b290df3c39ecc9d3b5"},{url:"/icons/ios/20.png",revision:"dfecf2c6b9df2ec5939b395245d4cf44"},{url:"/icons/ios/256.png",revision:"1f319090e212556b760d3d0115178599"},{url:"/icons/ios/29.png",revision:"bdd687af859613ba8b86c50936a3bc5b"},{url:"/icons/ios/32.png",revision:"4245d44b02fc73b67daa80e56dd9da7e"},{url:"/icons/ios/40.png",revision:"fc92f7e344820a4356976eca1471e8f5"},{url:"/icons/ios/50.png",revision:"6fb0f45ab89dcd9623fbe70242ada16c"},{url:"/icons/ios/512.png",revision:"6b1f7425fc035a8cce2b6906ece8d9ec"},{url:"/icons/ios/57.png",revision:"2b6539d6aceed0d3aaf6a39237b2960e"},{url:"/icons/ios/58.png",revision:"2d704e1fcb3498f6242f256e3f07ff00"},{url:"/icons/ios/60.png",revision:"ed71922b0a3cb0611189dc3adaa722f4"},{url:"/icons/ios/64.png",revision:"7d00f6ece6df0d30d46743ea92353ccb"},{url:"/icons/ios/72.png",revision:"0c3b545768cdcc24d5c0ab7de830d240"},{url:"/icons/ios/76.png",revision:"e4831b0b5a2a408a498f2d543b8c8a80"},{url:"/icons/ios/80.png",revision:"61de1b3c0730c1c27bd7d9677d28667b"},{url:"/icons/ios/87.png",revision:"8f2afd215bf3de02f69e2f537b46fd28"},{url:"/icons/windows11/LargeTile.scale-100.png",revision:"926b7b01244ff5edcab18734e61e3976"},{url:"/icons/windows11/LargeTile.scale-125.png",revision:"b4a50f38889fd13564b3834f1e38e1c0"},{url:"/icons/windows11/LargeTile.scale-150.png",revision:"564a0ddc2205388f1e54dbef6ae745f1"},{url:"/icons/windows11/LargeTile.scale-200.png",revision:"3e9f92d90f99694b01890ee02cc6584d"},{url:"/icons/windows11/LargeTile.scale-400.png",revision:"729a8fda7fcf5029f4c160d435e19301"},{url:"/icons/windows11/SmallTile.scale-100.png",revision:"4c7352d018383f8296e4ddef1a1aac1c"},{url:"/icons/windows11/SmallTile.scale-125.png",revision:"3675b43511fea33ea80b7b034ef6739c"},{url:"/icons/windows11/SmallTile.scale-150.png",revision:"b49fb437f27f44e8fefed4a08a99d211"},{url:"/icons/windows11/SmallTile.scale-200.png",revision:"221e7838a9bb8a21d5e78069d5164cbe"},{url:"/icons/windows11/SmallTile.scale-400.png",revision:"3b85dfe8b25ace5c34ad206040a7724d"},{url:"/icons/windows11/SplashScreen.scale-100.png",revision:"a4d5b285b32ab7d2fed83a91a76a96e8"},{url:"/icons/windows11/SplashScreen.scale-125.png",revision:"9586f5870f54d213c17ef043171b89fe"},{url:"/icons/windows11/SplashScreen.scale-150.png",revision:"f7e5b755191669079440d12a957b48b7"},{url:"/icons/windows11/SplashScreen.scale-200.png",revision:"47c5103382240810fe383f12b6a1752e"},{url:"/icons/windows11/SplashScreen.scale-400.png",revision:"cd4f3275002e619b25841381e6c6f163"},{url:"/icons/windows11/Square150x150Logo.scale-100.png",revision:"99ec6d2e02f0635d5f0fb5f9c1f3136c"},{url:"/icons/windows11/Square150x150Logo.scale-125.png",revision:"52bf90d283b91bbaf03ae8117949c313"},{url:"/icons/windows11/Square150x150Logo.scale-150.png",revision:"82d22537819d9c3b6bb8eb979c1208cd"},{url:"/icons/windows11/Square150x150Logo.scale-200.png",revision:"2beb0e8cc58479878eb4b23332b0a823"},{url:"/icons/windows11/Square150x150Logo.scale-400.png",revision:"d2098547c9cd8b544e56e82ebe7fa015"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"a26b4451c9c896fff30b4b27a17f0907"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"ad950ec64a4c5fce68715868708ed66f"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"e8d6706fcd28b377188624d051a4b23f"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"d652d741e822baae73e23488397b9a4c"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"22e639ef765c9e9aa75112f80a48e58a"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"e17225700f4dd88f8a272d41a1cb356f"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"8392de457f7902ee73468a604a3e2756"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"fe639e35ddc361a4cbdc90cbae7729b2"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"c7a2a5236181527a6104427ceb767db7"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"7995404573c780f846599fbc57b34a98"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"2543e1ec9beaec150ee0fa728449c5ba"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"034140f8ce42e2bc2ea9823c93374f32"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"5e151afbe397c052e22df55527e072d0"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"cc0d2d7dd86bfe4ff005b3f8203ac425"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"18d2e9a091a64d2b0ce9f20e89034598"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"a26b4451c9c896fff30b4b27a17f0907"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"ad950ec64a4c5fce68715868708ed66f"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"e8d6706fcd28b377188624d051a4b23f"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"d652d741e822baae73e23488397b9a4c"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"22e639ef765c9e9aa75112f80a48e58a"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"e17225700f4dd88f8a272d41a1cb356f"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"8392de457f7902ee73468a604a3e2756"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"fe639e35ddc361a4cbdc90cbae7729b2"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"c7a2a5236181527a6104427ceb767db7"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"7995404573c780f846599fbc57b34a98"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"2543e1ec9beaec150ee0fa728449c5ba"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"034140f8ce42e2bc2ea9823c93374f32"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"5e151afbe397c052e22df55527e072d0"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"cc0d2d7dd86bfe4ff005b3f8203ac425"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"18d2e9a091a64d2b0ce9f20e89034598"},{url:"/icons/windows11/Square44x44Logo.scale-100.png",revision:"c7a2a5236181527a6104427ceb767db7"},{url:"/icons/windows11/Square44x44Logo.scale-125.png",revision:"03b201e0eb70742313d471644b519f56"},{url:"/icons/windows11/Square44x44Logo.scale-150.png",revision:"d4e21cec63cb308a9f04e8ba0c36df1a"},{url:"/icons/windows11/Square44x44Logo.scale-200.png",revision:"293afe398ef479e612f0a36f05a2f918"},{url:"/icons/windows11/Square44x44Logo.scale-400.png",revision:"34b992a40cdfada694a302bae4d7707e"},{url:"/icons/windows11/Square44x44Logo.targetsize-16.png",revision:"a26b4451c9c896fff30b4b27a17f0907"},{url:"/icons/windows11/Square44x44Logo.targetsize-20.png",revision:"ad950ec64a4c5fce68715868708ed66f"},{url:"/icons/windows11/Square44x44Logo.targetsize-24.png",revision:"e8d6706fcd28b377188624d051a4b23f"},{url:"/icons/windows11/Square44x44Logo.targetsize-256.png",revision:"d652d741e822baae73e23488397b9a4c"},{url:"/icons/windows11/Square44x44Logo.targetsize-30.png",revision:"22e639ef765c9e9aa75112f80a48e58a"},{url:"/icons/windows11/Square44x44Logo.targetsize-32.png",revision:"e17225700f4dd88f8a272d41a1cb356f"},{url:"/icons/windows11/Square44x44Logo.targetsize-36.png",revision:"8392de457f7902ee73468a604a3e2756"},{url:"/icons/windows11/Square44x44Logo.targetsize-40.png",revision:"fe639e35ddc361a4cbdc90cbae7729b2"},{url:"/icons/windows11/Square44x44Logo.targetsize-44.png",revision:"c7a2a5236181527a6104427ceb767db7"},{url:"/icons/windows11/Square44x44Logo.targetsize-48.png",revision:"7995404573c780f846599fbc57b34a98"},{url:"/icons/windows11/Square44x44Logo.targetsize-60.png",revision:"2543e1ec9beaec150ee0fa728449c5ba"},{url:"/icons/windows11/Square44x44Logo.targetsize-64.png",revision:"034140f8ce42e2bc2ea9823c93374f32"},{url:"/icons/windows11/Square44x44Logo.targetsize-72.png",revision:"5e151afbe397c052e22df55527e072d0"},{url:"/icons/windows11/Square44x44Logo.targetsize-80.png",revision:"cc0d2d7dd86bfe4ff005b3f8203ac425"},{url:"/icons/windows11/Square44x44Logo.targetsize-96.png",revision:"18d2e9a091a64d2b0ce9f20e89034598"},{url:"/icons/windows11/StoreLogo.scale-100.png",revision:"6fb0f45ab89dcd9623fbe70242ada16c"},{url:"/icons/windows11/StoreLogo.scale-125.png",revision:"5bb5cf5f3ff0eea1f9ac1a296185b5b7"},{url:"/icons/windows11/StoreLogo.scale-150.png",revision:"04f1a59f1e181a9062176a36be467270"},{url:"/icons/windows11/StoreLogo.scale-200.png",revision:"97749b5cee3c767e5144ac5300f626be"},{url:"/icons/windows11/StoreLogo.scale-400.png",revision:"6f7d58b57ad915be2aa84451b3cbe3bb"},{url:"/icons/windows11/Wide310x150Logo.scale-100.png",revision:"457c9942a22270889e220dcf68b38b7b"},{url:"/icons/windows11/Wide310x150Logo.scale-125.png",revision:"488ab12eb510e260ad4bcd9b525e341d"},{url:"/icons/windows11/Wide310x150Logo.scale-150.png",revision:"0a59e129995375192fbeca9733e52320"},{url:"/icons/windows11/Wide310x150Logo.scale-200.png",revision:"a4d5b285b32ab7d2fed83a91a76a96e8"},{url:"/icons/windows11/Wide310x150Logo.scale-400.png",revision:"47c5103382240810fe383f12b6a1752e"},{url:"/manifest.json",revision:"10d4618aeb4b3ff5b6a62e06cc2606f2"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:i}})=>!(!e||i.startsWith("/api/auth/callback")||!i.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:i},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!i.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:i},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!i.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:i})=>i&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
