(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1575495185993;

	const files = [
		"service-worker-index.html",
		".DS_Store",
		"allbooks.png",
		"book-icon.png",
		"books/.DS_Store",
		"books/alittlelife.jpg",
		"books/apictureofdoriangray.jpg",
		"books/appalachianelegy.jpg",
		"books/badfeminist.jpg",
		"books/bagombosnuffbox.jpg",
		"books/becoming.jpg",
		"books/betweentheworldandme.jpg",
		"books/bloodmeridian.jpg",
		"books/callmebyyourname.jpg",
		"books/cherry.jpg",
		"books/cinderellaatemydaughter.jpg",
		"books/colorlesstsukurutazaki.jpg",
		"books/comeasyouare.jpg",
		"books/comedysexgod.jpg",
		"books/dearijeawele.jpg",
		"books/dopesick.jpg",
		"books/downgirlthelogicofmisogyny.jpg",
		"books/fahrenheit451.jpg",
		"books/galapagos.jpg",
		"books/howtokillacity.jpg",
		"books/immigrantmontana.jpg",
		"books/labgirl.jpg",
		"books/menwithoutwomen.jpg",
		"books/nomadland.jpg",
		"books/nomudnolotus.jpg",
		"books/pathofcompassion.jpg",
		"books/poorlittlerichslum.jpg",
		"books/slime.jpg",
		"books/supermarket.jpg",
		"books/thebelljar.jpg",
		"books/thecoloroflaw.jpg",
		"books/thefemalepersuasion.jpg",
		"books/thegirlwhosleptwithgod.jpg",
		"books/thehandmaidstale.jpg",
		"books/thekillerinsideme.jpg",
		"books/thenightocean.jpg",
		"books/therethere.jpg",
		"books/thesixthextinction.jpg",
		"books/thesympathizer.jpg",
		"books/thevictim.jpg",
		"books/thischangeseverything.jpg",
		"books/thisishowyouloseher.jpg",
		"books/toofattooloudtooslutty.jpg",
		"books/toshakethesleepingself.jpg",
		"books/walkablecity.jpg",
		"books/weshouldallbefeminists.jpg",
		"books/wewerefeministsonce.jpg",
		"books/whatweknowaboutclimatechange.jpg",
		"books/whenbreathbecomesair.jpg",
		"books/whyiamnotafeminist.jpg",
		"books/wonder.jpg",
		"books/wutheringheights.jpg",
		"books.csv",
		"favicon.png",
		"global.css",
		"manifest.json"
	];

	const shell = [
		"client/index.2e7b8135.js",
		"client/client.8a9ebb67.js",
		"client/index.84d034b5.js",
		"client/books.2a8d01e1.js",
		"client/sapper-dev-client.89e34bae.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		if (!url.protocol.startsWith('http')) return;

		// ignore dev server requests
		if (url.hostname === self.location.hostname && url.port !== self.location.port) return;

		// always serve static files and bundler-generated assets from cache
		if (url.host === self.location.host && cached.has(url.pathname)) {
			event.respondWith(caches.match(event.request));
			return;
		}

		// for pages, you might want to serve a shell `service-worker-index.html` file,
		// which Sapper has generated for you. It's not right for every
		// app, but if it's right for yours then uncomment this section
		/*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/service-worker-index.html'));
			return;
		}
		*/

		if (event.request.cache === 'only-if-cached') return;

		// for everything else, try the network first, falling back to
		// cache if the user is offline. (If the pages never change, you
		// might prefer a cache-first approach to a network-first one.)
		event.respondWith(
			caches
				.open(`offline${timestamp}`)
				.then(async cache => {
					try {
						const response = await fetch(event.request);
						cache.put(event.request, response.clone());
						return response;
					} catch(err) {
						const response = await cache.match(event.request);
						if (response) return response;

						throw err;
					}
				})
		);
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTU3NTQ5NTE4NTk5MztcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCIuRFNfU3RvcmVcIixcblx0XCJhbGxib29rcy5wbmdcIixcblx0XCJib29rLWljb24ucG5nXCIsXG5cdFwiYm9va3MvLkRTX1N0b3JlXCIsXG5cdFwiYm9va3MvYWxpdHRsZWxpZmUuanBnXCIsXG5cdFwiYm9va3MvYXBpY3R1cmVvZmRvcmlhbmdyYXkuanBnXCIsXG5cdFwiYm9va3MvYXBwYWxhY2hpYW5lbGVneS5qcGdcIixcblx0XCJib29rcy9iYWRmZW1pbmlzdC5qcGdcIixcblx0XCJib29rcy9iYWdvbWJvc251ZmZib3guanBnXCIsXG5cdFwiYm9va3MvYmVjb21pbmcuanBnXCIsXG5cdFwiYm9va3MvYmV0d2VlbnRoZXdvcmxkYW5kbWUuanBnXCIsXG5cdFwiYm9va3MvYmxvb2RtZXJpZGlhbi5qcGdcIixcblx0XCJib29rcy9jYWxsbWVieXlvdXJuYW1lLmpwZ1wiLFxuXHRcImJvb2tzL2NoZXJyeS5qcGdcIixcblx0XCJib29rcy9jaW5kZXJlbGxhYXRlbXlkYXVnaHRlci5qcGdcIixcblx0XCJib29rcy9jb2xvcmxlc3N0c3VrdXJ1dGF6YWtpLmpwZ1wiLFxuXHRcImJvb2tzL2NvbWVhc3lvdWFyZS5qcGdcIixcblx0XCJib29rcy9jb21lZHlzZXhnb2QuanBnXCIsXG5cdFwiYm9va3MvZGVhcmlqZWF3ZWxlLmpwZ1wiLFxuXHRcImJvb2tzL2RvcGVzaWNrLmpwZ1wiLFxuXHRcImJvb2tzL2Rvd25naXJsdGhlbG9naWNvZm1pc29neW55LmpwZ1wiLFxuXHRcImJvb2tzL2ZhaHJlbmhlaXQ0NTEuanBnXCIsXG5cdFwiYm9va3MvZ2FsYXBhZ29zLmpwZ1wiLFxuXHRcImJvb2tzL2hvd3Rva2lsbGFjaXR5LmpwZ1wiLFxuXHRcImJvb2tzL2ltbWlncmFudG1vbnRhbmEuanBnXCIsXG5cdFwiYm9va3MvbGFiZ2lybC5qcGdcIixcblx0XCJib29rcy9tZW53aXRob3V0d29tZW4uanBnXCIsXG5cdFwiYm9va3Mvbm9tYWRsYW5kLmpwZ1wiLFxuXHRcImJvb2tzL25vbXVkbm9sb3R1cy5qcGdcIixcblx0XCJib29rcy9wYXRob2Zjb21wYXNzaW9uLmpwZ1wiLFxuXHRcImJvb2tzL3Bvb3JsaXR0bGVyaWNoc2x1bS5qcGdcIixcblx0XCJib29rcy9zbGltZS5qcGdcIixcblx0XCJib29rcy9zdXBlcm1hcmtldC5qcGdcIixcblx0XCJib29rcy90aGViZWxsamFyLmpwZ1wiLFxuXHRcImJvb2tzL3RoZWNvbG9yb2ZsYXcuanBnXCIsXG5cdFwiYm9va3MvdGhlZmVtYWxlcGVyc3Vhc2lvbi5qcGdcIixcblx0XCJib29rcy90aGVnaXJsd2hvc2xlcHR3aXRoZ29kLmpwZ1wiLFxuXHRcImJvb2tzL3RoZWhhbmRtYWlkc3RhbGUuanBnXCIsXG5cdFwiYm9va3MvdGhla2lsbGVyaW5zaWRlbWUuanBnXCIsXG5cdFwiYm9va3MvdGhlbmlnaHRvY2Vhbi5qcGdcIixcblx0XCJib29rcy90aGVyZXRoZXJlLmpwZ1wiLFxuXHRcImJvb2tzL3RoZXNpeHRoZXh0aW5jdGlvbi5qcGdcIixcblx0XCJib29rcy90aGVzeW1wYXRoaXplci5qcGdcIixcblx0XCJib29rcy90aGV2aWN0aW0uanBnXCIsXG5cdFwiYm9va3MvdGhpc2NoYW5nZXNldmVyeXRoaW5nLmpwZ1wiLFxuXHRcImJvb2tzL3RoaXNpc2hvd3lvdWxvc2VoZXIuanBnXCIsXG5cdFwiYm9va3MvdG9vZmF0dG9vbG91ZHRvb3NsdXR0eS5qcGdcIixcblx0XCJib29rcy90b3NoYWtldGhlc2xlZXBpbmdzZWxmLmpwZ1wiLFxuXHRcImJvb2tzL3dhbGthYmxlY2l0eS5qcGdcIixcblx0XCJib29rcy93ZXNob3VsZGFsbGJlZmVtaW5pc3RzLmpwZ1wiLFxuXHRcImJvb2tzL3dld2VyZWZlbWluaXN0c29uY2UuanBnXCIsXG5cdFwiYm9va3Mvd2hhdHdla25vd2Fib3V0Y2xpbWF0ZWNoYW5nZS5qcGdcIixcblx0XCJib29rcy93aGVuYnJlYXRoYmVjb21lc2Fpci5qcGdcIixcblx0XCJib29rcy93aHlpYW1ub3RhZmVtaW5pc3QuanBnXCIsXG5cdFwiYm9va3Mvd29uZGVyLmpwZ1wiLFxuXHRcImJvb2tzL3d1dGhlcmluZ2hlaWdodHMuanBnXCIsXG5cdFwiYm9va3MuY3N2XCIsXG5cdFwiZmF2aWNvbi5wbmdcIixcblx0XCJnbG9iYWwuY3NzXCIsXG5cdFwibWFuaWZlc3QuanNvblwiXG5dO1xuZXhwb3J0IHsgZmlsZXMgYXMgYXNzZXRzIH07IC8vIGxlZ2FjeVxuXG5leHBvcnQgY29uc3Qgc2hlbGwgPSBbXG5cdFwiY2xpZW50L2luZGV4LjJlN2I4MTM1LmpzXCIsXG5cdFwiY2xpZW50L2NsaWVudC44YTllYmI2Ny5qc1wiLFxuXHRcImNsaWVudC9pbmRleC44NGQwMzRiNS5qc1wiLFxuXHRcImNsaWVudC9ib29rcy4yYThkMDFlMS5qc1wiLFxuXHRcImNsaWVudC9zYXBwZXItZGV2LWNsaWVudC44OWUzNGJhZS5qc1wiXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuXHR7IHBhdHRlcm46IC9eXFwvJC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Jvb2tzXFwvPyQvIH1cbl07IiwiaW1wb3J0IHsgdGltZXN0YW1wLCBmaWxlcywgc2hlbGwsIHJvdXRlcyB9IGZyb20gJ0BzYXBwZXIvc2VydmljZS13b3JrZXInO1xuXG5jb25zdCBBU1NFVFMgPSBgY2FjaGUke3RpbWVzdGFtcH1gO1xuXG4vLyBgc2hlbGxgIGlzIGFuIGFycmF5IG9mIGFsbCB0aGUgZmlsZXMgZ2VuZXJhdGVkIGJ5IHRoZSBidW5kbGVyLFxuLy8gYGZpbGVzYCBpcyBhbiBhcnJheSBvZiBldmVyeXRoaW5nIGluIHRoZSBgc3RhdGljYCBkaXJlY3RvcnlcbmNvbnN0IHRvX2NhY2hlID0gc2hlbGwuY29uY2F0KGZpbGVzKTtcbmNvbnN0IGNhY2hlZCA9IG5ldyBTZXQodG9fY2FjaGUpO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBldmVudCA9PiB7XG5cdGV2ZW50LndhaXRVbnRpbChcblx0XHRjYWNoZXNcblx0XHRcdC5vcGVuKEFTU0VUUylcblx0XHRcdC50aGVuKGNhY2hlID0+IGNhY2hlLmFkZEFsbCh0b19jYWNoZSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHNlbGYuc2tpcFdhaXRpbmcoKTtcblx0XHRcdH0pXG5cdCk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGV2ZW50ID0+IHtcblx0ZXZlbnQud2FpdFVudGlsKFxuXHRcdGNhY2hlcy5rZXlzKCkudGhlbihhc3luYyBrZXlzID0+IHtcblx0XHRcdC8vIGRlbGV0ZSBvbGQgY2FjaGVzXG5cdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG5cdFx0XHRcdGlmIChrZXkgIT09IEFTU0VUUykgYXdhaXQgY2FjaGVzLmRlbGV0ZShrZXkpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxmLmNsaWVudHMuY2xhaW0oKTtcblx0XHR9KVxuXHQpO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBldmVudCA9PiB7XG5cdGlmIChldmVudC5yZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcgfHwgZXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcygncmFuZ2UnKSkgcmV0dXJuO1xuXG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoZXZlbnQucmVxdWVzdC51cmwpO1xuXG5cdC8vIGRvbid0IHRyeSB0byBoYW5kbGUgZS5nLiBkYXRhOiBVUklzXG5cdGlmICghdXJsLnByb3RvY29sLnN0YXJ0c1dpdGgoJ2h0dHAnKSkgcmV0dXJuO1xuXG5cdC8vIGlnbm9yZSBkZXYgc2VydmVyIHJlcXVlc3RzXG5cdGlmICh1cmwuaG9zdG5hbWUgPT09IHNlbGYubG9jYXRpb24uaG9zdG5hbWUgJiYgdXJsLnBvcnQgIT09IHNlbGYubG9jYXRpb24ucG9ydCkgcmV0dXJuO1xuXG5cdC8vIGFsd2F5cyBzZXJ2ZSBzdGF0aWMgZmlsZXMgYW5kIGJ1bmRsZXItZ2VuZXJhdGVkIGFzc2V0cyBmcm9tIGNhY2hlXG5cdGlmICh1cmwuaG9zdCA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0ICYmIGNhY2hlZC5oYXModXJsLnBhdGhuYW1lKSkge1xuXHRcdGV2ZW50LnJlc3BvbmRXaXRoKGNhY2hlcy5tYXRjaChldmVudC5yZXF1ZXN0KSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gZm9yIHBhZ2VzLCB5b3UgbWlnaHQgd2FudCB0byBzZXJ2ZSBhIHNoZWxsIGBzZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sYCBmaWxlLFxuXHQvLyB3aGljaCBTYXBwZXIgaGFzIGdlbmVyYXRlZCBmb3IgeW91LiBJdCdzIG5vdCByaWdodCBmb3IgZXZlcnlcblx0Ly8gYXBwLCBidXQgaWYgaXQncyByaWdodCBmb3IgeW91cnMgdGhlbiB1bmNvbW1lbnQgdGhpcyBzZWN0aW9uXG5cdC8qXG5cdGlmICh1cmwub3JpZ2luID09PSBzZWxmLm9yaWdpbiAmJiByb3V0ZXMuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXR0ZXJuLnRlc3QodXJsLnBhdGhuYW1lKSkpIHtcblx0XHRldmVudC5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goJy9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sJykpO1xuXHRcdHJldHVybjtcblx0fVxuXHQqL1xuXG5cdGlmIChldmVudC5yZXF1ZXN0LmNhY2hlID09PSAnb25seS1pZi1jYWNoZWQnKSByZXR1cm47XG5cblx0Ly8gZm9yIGV2ZXJ5dGhpbmcgZWxzZSwgdHJ5IHRoZSBuZXR3b3JrIGZpcnN0LCBmYWxsaW5nIGJhY2sgdG9cblx0Ly8gY2FjaGUgaWYgdGhlIHVzZXIgaXMgb2ZmbGluZS4gKElmIHRoZSBwYWdlcyBuZXZlciBjaGFuZ2UsIHlvdVxuXHQvLyBtaWdodCBwcmVmZXIgYSBjYWNoZS1maXJzdCBhcHByb2FjaCB0byBhIG5ldHdvcmstZmlyc3Qgb25lLilcblx0ZXZlbnQucmVzcG9uZFdpdGgoXG5cdFx0Y2FjaGVzXG5cdFx0XHQub3Blbihgb2ZmbGluZSR7dGltZXN0YW1wfWApXG5cdFx0XHQudGhlbihhc3luYyBjYWNoZSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChldmVudC5yZXF1ZXN0KTtcblx0XHRcdFx0XHRjYWNoZS5wdXQoZXZlbnQucmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdFx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGUubWF0Y2goZXZlbnQucmVxdWVzdCk7XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlKSByZXR1cm4gcmVzcG9uc2U7XG5cblx0XHRcdFx0XHR0aHJvdyBlcnI7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdCk7XG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Q0FBQTtBQUNBLENBQU8sTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDOztBQUV2QyxDQUFPLE1BQU0sS0FBSyxHQUFHO0NBQ3JCLENBQUMsMkJBQTJCO0NBQzVCLENBQUMsV0FBVztDQUNaLENBQUMsY0FBYztDQUNmLENBQUMsZUFBZTtDQUNoQixDQUFDLGlCQUFpQjtDQUNsQixDQUFDLHVCQUF1QjtDQUN4QixDQUFDLGdDQUFnQztDQUNqQyxDQUFDLDRCQUE0QjtDQUM3QixDQUFDLHVCQUF1QjtDQUN4QixDQUFDLDJCQUEyQjtDQUM1QixD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
