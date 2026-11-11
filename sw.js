// TornHub app helper: lets phones install TornHub on the home screen.
// It does not cache anything, so every page always loads fresh from the internet.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function () { /* pass straight through to the network */ });
