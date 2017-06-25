self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('v1').then(function(cache) {
			return cache.addAll([
				'/',
				'/index.html',
				'/manifest.json',
				'/favicon.png',
				'/css/materialize.min.css',
				'/css/materialdesignicons.min.css',
				'/css/style.css',
				'/fonts/materialdesignicons-webfont.woff',
				'/fonts/roboto/Roboto-Bold.woff',
				'/fonts/roboto/Roboto-Light.woff',
				'/fonts/roboto/Roboto-Medium.woff',
				'/images/icons/128x128.png',
				'/images/icons/144x144.png',
				'/images/icons/152x152.png',
				'/images/icons/192x192.png',
				'/images/icons/256x256.png',
				'/images/farooq.jpg',
				'/images/background1.jpg',
				'/images/background2.jpg',
				'/images/background3.jpg',
				'/images/image.jpg',
				'/images/gdgkasu.png',
				'/images/ordering.png',
				'/images/swapmybook.png',
				'/images/ktc.png',
				'/images/waste.png',
				'/images/houserent.png',
				'/js/jquery.min.js',
				'/js/materialize.min.js',
				'/js/init.js'
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	console.log(event.request.url);
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});