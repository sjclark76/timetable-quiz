if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const r=e=>d(e,c),s={module:{uri:c},exports:o,require:r};i[c]=Promise.all(a.map((e=>s[e]||r(e)))).then((e=>(n(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-6v3nVr3A.js",revision:null},{url:"assets/index-D2a6XYiM.css",revision:null},{url:"index.html",revision:"079a813fa159e9133c849121c78f52e7"},{url:"registerSW.js",revision:"e8d372d8a68be29d2551e85799acedaf"},{url:"android/android-launchericon-144-144.png",revision:"10adba38ba775f4587db960ba4aaa634"},{url:"android/android-launchericon-192-192.png",revision:"11ae4d5ca1cdbf5094403afafa1cf36d"},{url:"android/android-launchericon-48-48.png",revision:"6cc755e2d185d13f4e1296cf96b61c58"},{url:"android/android-launchericon-512-512.png",revision:"20d96f546961a408150624d450d42c94"},{url:"android/android-launchericon-72-72.png",revision:"a6645bbb0082943105d0ec568caae48d"},{url:"android/android-launchericon-96-96.png",revision:"a0cf3c17d1d062f15cefc6ed3ca273a8"},{url:"ios/100.png",revision:"eab73586547a47d965b4daaf7a8d69d3"},{url:"ios/1024.png",revision:"b67a0f0c9596d5c935d0a0ffc54dc4a6"},{url:"ios/114.png",revision:"b136779668a32af1e418ddad0de7d7e7"},{url:"ios/120.png",revision:"6be029647da511254c59c597ec225c32"},{url:"ios/128.png",revision:"262da86addfbc1c9e9efad6de5cf566e"},{url:"ios/144.png",revision:"10adba38ba775f4587db960ba4aaa634"},{url:"ios/152.png",revision:"a0ecd2debb9ab99eed32e6e5c465ef69"},{url:"ios/16.png",revision:"bf4de7846a1cbf29e1e908ffca073b22"},{url:"ios/167.png",revision:"e4533dd1c385355168d9219f23def2f2"},{url:"ios/180.png",revision:"2852426e1ff422f2b9609360cd3c4ddd"},{url:"ios/192.png",revision:"11ae4d5ca1cdbf5094403afafa1cf36d"},{url:"ios/20.png",revision:"c8e98111b878a7cd37a8a9e3b54f9525"},{url:"ios/256.png",revision:"c258824a140af7b9d4723502d5db0754"},{url:"ios/29.png",revision:"5c4c7abd2611846060c00c87b04acc8b"},{url:"ios/32.png",revision:"6d60b388410e3e498abd6119a43fb310"},{url:"ios/40.png",revision:"4d8f306c5bcf43b95aa802ca70f96e2b"},{url:"ios/50.png",revision:"fe4d3b67bb6b7383dc2baac56e52ae6d"},{url:"ios/512.png",revision:"20d96f546961a408150624d450d42c94"},{url:"ios/57.png",revision:"bb0194e55677cb5e8b5d56224359a381"},{url:"ios/58.png",revision:"5751ffebd57303afd73b6382d1a99777"},{url:"ios/60.png",revision:"ceccdd2025ff2c31d2fd011c88a672a9"},{url:"ios/64.png",revision:"9c2d8f653112eeb90f41e72ef4678499"},{url:"ios/72.png",revision:"a6645bbb0082943105d0ec568caae48d"},{url:"ios/76.png",revision:"519d8075780a7aba37d76cc987c45715"},{url:"ios/80.png",revision:"278971c20baceccf767920005d3ef390"},{url:"ios/87.png",revision:"ae50801c0bba3d1f316a7ce11acdbcb2"},{url:"windows11/LargeTile.scale-100.png",revision:"ca7701bc86ee5ecac77c382799418c7c"},{url:"windows11/LargeTile.scale-125.png",revision:"f7c9f6e9f67364dbdd29dc7f8c30dae2"},{url:"windows11/LargeTile.scale-150.png",revision:"66740b6e2be854f011bbd2dbf1468fd1"},{url:"windows11/LargeTile.scale-200.png",revision:"ec400cdb93fa0ae56f729ca53bf4486a"},{url:"windows11/LargeTile.scale-400.png",revision:"446584563bebc6c6b60587692f2851bf"},{url:"windows11/SmallTile.scale-100.png",revision:"1bd01ff49d8cd7609ec61c9afc1e311e"},{url:"windows11/SmallTile.scale-125.png",revision:"29d174297ac829d9644d2c5be3c1c578"},{url:"windows11/SmallTile.scale-150.png",revision:"1dfaddc465e38b2a2c3dd6a5466cef8f"},{url:"windows11/SmallTile.scale-200.png",revision:"6c324d8166d362dda2fccc1998ff9306"},{url:"windows11/SmallTile.scale-400.png",revision:"dced9e89e7a2c0228bf5bcae69507ef2"},{url:"windows11/SplashScreen.scale-100.png",revision:"277defcc5cdb8f0a1bc9418adbd1116e"},{url:"windows11/SplashScreen.scale-125.png",revision:"e4bb5e31dad94e62edb467ddffde980a"},{url:"windows11/SplashScreen.scale-150.png",revision:"b7f2234cb1df9535d288c3ae9a9fa013"},{url:"windows11/SplashScreen.scale-200.png",revision:"80c38eb30dd2c7e98c2c58d8d3322ddb"},{url:"windows11/SplashScreen.scale-400.png",revision:"a50fac8de265463434693d5671f71403"},{url:"windows11/Square150x150Logo.scale-100.png",revision:"4b396a4ba9e0b441d0edb46ae1931567"},{url:"windows11/Square150x150Logo.scale-125.png",revision:"fbb72253780676f58d04e77d94db51a1"},{url:"windows11/Square150x150Logo.scale-150.png",revision:"dbeebcbcee260c9ec3797ee135681924"},{url:"windows11/Square150x150Logo.scale-200.png",revision:"24617c326e7d1bbd2d9aff42cb35e93d"},{url:"windows11/Square150x150Logo.scale-400.png",revision:"b975f4fc799ac1bbf058cfa58e98a775"},{url:"windows11/Square44x44Logo.scale-100.png",revision:"b06254dae238ee22d5c4d6f6af04f0db"},{url:"windows11/Square44x44Logo.scale-125.png",revision:"9545905622010bbb60f3f93edd913de5"},{url:"windows11/Square44x44Logo.scale-150.png",revision:"0dc974d90772946e06937c2d5dba147b"},{url:"windows11/Square44x44Logo.scale-200.png",revision:"1bab9755e6ef2c403bf9decc1cde3fe3"},{url:"windows11/Square44x44Logo.scale-400.png",revision:"ca7747fcc8e15d3a07386ef7499bd197"},{url:"windows11/StoreLogo.scale-100.png",revision:"fe4d3b67bb6b7383dc2baac56e52ae6d"},{url:"windows11/StoreLogo.scale-125.png",revision:"489ab41c33ea2101c3b08d6ab491e73a"},{url:"windows11/StoreLogo.scale-150.png",revision:"8a984ff3bacc008d0bb3436fca53a83e"},{url:"windows11/StoreLogo.scale-200.png",revision:"eab73586547a47d965b4daaf7a8d69d3"},{url:"windows11/StoreLogo.scale-400.png",revision:"36b4eaf567883abc2d082b6003fdce2f"},{url:"windows11/Wide310x150Logo.scale-100.png",revision:"1a468ffdcae726a39f0aba2fdc634275"},{url:"windows11/Wide310x150Logo.scale-125.png",revision:"25b4e9d9ed6c7d514bd5505762612b01"},{url:"windows11/Wide310x150Logo.scale-150.png",revision:"48710d08e801f96a3190b225e4dfea28"},{url:"windows11/Wide310x150Logo.scale-200.png",revision:"277defcc5cdb8f0a1bc9418adbd1116e"},{url:"windows11/Wide310x150Logo.scale-400.png",revision:"80c38eb30dd2c7e98c2c58d8d3322ddb"},{url:"manifest.webmanifest",revision:"a98201dfc4ee8fab91403b2ae892087f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
