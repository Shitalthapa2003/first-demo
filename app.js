if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('Service Worker registered', reg));
  }
  
  function subscribe() {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('Thanks for subscribing to ShopEasy deals! 🎉');
      }
    });
  }
  