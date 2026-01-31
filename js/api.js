const forexDiv = document.getElementById("forex");
const cryptoDiv = document.getElementById("crypto");

async function loadForex() {
  const res = await fetch("https://api.exchangerate.host/latest?base=USD");
  const data = await res.json();

  forexDiv.innerHTML = `
    <p>USD → TRY: ${data.rates.TRY.toFixed(2)}</p>
    <p>USD → EUR: ${data.rates.EUR.toFixed(2)}</p>
    <p>USD → GBP: ${data.rates.GBP.toFixed(2)}</p>
  `;
}

async function loadCrypto() {
  const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
  const data = await res.json();

  cryptoDiv.innerHTML = `
    <p>BTC: $${data.bitcoin.usd}</p>
    <p>ETH: $${data.ethereum.usd}</p>
  `;

  updateChart(data.bitcoin.usd, data.ethereum.usd);
  checkAlert(data.bitcoin.usd);
}

loadForex();
loadCrypto();
setInterval(() => {
  loadForex();
  loadCrypto();
}, 30000);
