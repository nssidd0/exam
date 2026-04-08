importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDuj1rzRh1MxqePXlXYYnT9mbM6R05O--Y",
  authDomain: "ns-sidd-notifications.firebaseapp.com",
  projectId: "ns-sidd-notifications",
  storageBucket: "ns-sidd-notifications.firebasestorage.app",
  messagingSenderId: "17196140740",
  appId: "1:17196140740:web:0d1f81dca27d9d283ae191"
});

const messaging = firebase.messaging();

// Background notification handler
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './logo.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Notification Click Listener
self.addEventListener('notificationclick', function(event) {
    event.notification.close(); // Notification ko band karo

    // Website ya App kholne ke liye logic
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
            if (clientList.length > 0) {
                let client = clientList[0];
                for (let i = 0; i < clientList.length; i++) {
                    if (clientList[i].focused) {
                        client = clientList[i];
                    }
                }
                return client.focus();
            }
            return clients.openWindow('/'); // Agar app band hai toh index page kholo
        })
    );
});
