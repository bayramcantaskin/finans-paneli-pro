let targetPrice = null;

function setAlert() {
  targetPrice = parseFloat(document.getElementById("alertValue").value);
  Notification.requestPermission();
}

function checkAlert(btcPrice) {
  if (targetPrice && btcPrice >= targetPrice) {
    new Notification("🚨 BTC Alarm", {
      body: "Bitcoin hedef fiyatı geçti: $" + btcPrice
    });
    targetPrice = null;
  }
}
