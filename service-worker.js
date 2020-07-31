/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c2e016efccd01ce84970a3c463bf9cba"
  },
  {
    "url": "about/index.html",
    "revision": "5001e0640f2262320abb0f9d299c7d26"
  },
  {
    "url": "article/index.html",
    "revision": "793e90a4acfeb69468fb078ec7db7a0a"
  },
  {
    "url": "article/one.html",
    "revision": "b9a3bf67eea1786c7f670219980359c9"
  },
  {
    "url": "article/three.html",
    "revision": "4e242dde31dbc4fb805b69c3f5862669"
  },
  {
    "url": "article/two.html",
    "revision": "769224f0def0759738d5488cf6f891e2"
  },
  {
    "url": "assets/css/0.styles.fa969c60.css",
    "revision": "e58b7778d15da0a68053dcb16888362b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.deea72ed.js",
    "revision": "0ffe7b1206a332dde54bd11f25355c2d"
  },
  {
    "url": "assets/js/11.0cf49308.js",
    "revision": "a104944c6c38b676d3dd51ab3b76a93e"
  },
  {
    "url": "assets/js/12.01d25d4a.js",
    "revision": "626ffe65236a37b1d0aee4cae019548e"
  },
  {
    "url": "assets/js/13.f3e42499.js",
    "revision": "b1c459f178e14f9d16b219aaf9238192"
  },
  {
    "url": "assets/js/14.9ab339b9.js",
    "revision": "2f5bcb051f4a4796dacf983859c641d1"
  },
  {
    "url": "assets/js/15.54bd9ee2.js",
    "revision": "8f294088363f070ecb0929172a8106cc"
  },
  {
    "url": "assets/js/16.13e7e559.js",
    "revision": "ddc9f8c4c9be84c41b0b9456acf7520c"
  },
  {
    "url": "assets/js/17.2fcc5947.js",
    "revision": "bdb9e88f459a46709b99e469184ed8da"
  },
  {
    "url": "assets/js/18.f620d1cc.js",
    "revision": "22d28c77e25408327d0932455dd28ea0"
  },
  {
    "url": "assets/js/2.8f2d81df.js",
    "revision": "6d0e6dc376de13711504fb705c4f3c2d"
  },
  {
    "url": "assets/js/3.5e2d1b60.js",
    "revision": "71d188978966b0d5cc2c9eb31ae2b282"
  },
  {
    "url": "assets/js/4.eb48902e.js",
    "revision": "6f2ff28334c118fc50e52112f8aa235e"
  },
  {
    "url": "assets/js/5.cfef986f.js",
    "revision": "fdc1f777baaa61a37a3107e3433b0ff0"
  },
  {
    "url": "assets/js/6.34837264.js",
    "revision": "12c26e39154eef929191e999b161f2ea"
  },
  {
    "url": "assets/js/7.a4e14163.js",
    "revision": "eab31d91c0e510cd2c76344e50cd77c3"
  },
  {
    "url": "assets/js/8.2f131cfd.js",
    "revision": "d48241d7d200f3709e3037091efb6412"
  },
  {
    "url": "assets/js/9.5936be2a.js",
    "revision": "6d64eb970ff1bba020f4cf8da7ca2536"
  },
  {
    "url": "assets/js/app.b823472b.js",
    "revision": "db6ae5da834e4efdd7d71e4eda9aefa3"
  },
  {
    "url": "config.html",
    "revision": "d3d01e215f7a4a5c0fb960f228b493ca"
  },
  {
    "url": "demo/index.html",
    "revision": "8742b8e4216a3dec4930c6968f9480c7"
  },
  {
    "url": "demo/one.html",
    "revision": "737bb50f98397a7df4e78efe73dabb14"
  },
  {
    "url": "demo/three.html",
    "revision": "6a496cc5d74ad7e34c6e193a2a9be363"
  },
  {
    "url": "demo/two.html",
    "revision": "6ce6042fc12e98cf2cf034ac28bad74e"
  },
  {
    "url": "hero.jpg",
    "revision": "6df3c2bebdd83f1806ea9424e63e5408"
  },
  {
    "url": "hero.png",
    "revision": "19f9344efd281e849a24fe3aeabe8403"
  },
  {
    "url": "index.html",
    "revision": "f6bdd88ee0a969a9c457eea4a5e77f5c"
  },
  {
    "url": "snippet.js",
    "revision": "c8f46181528878c37577e96fdf5b1325"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
