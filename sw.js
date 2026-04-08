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
