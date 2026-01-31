const ctx = document.getElementById("priceChart");

let chartData = {
  labels: [],
  datasets: [
    { label: "Bitcoin", data: [], borderWidth: 2 },
    { label: "Ethereum", data: [], borderWidth: 2 }
  ]
};

const chart = new Chart(ctx, {
  type: "line",
  data: chartData,
  options: { responsive: true }
});

function updateChart(btc, eth) {
  const time = new Date().toLocaleTimeString();
  chartData.labels.push(time);
  chartData.datasets[0].data.push(btc);
  chartData.datasets[1].data.push(eth);

  if (chartData.labels.length > 10) {
    chartData.labels.shift();
    chartData.datasets[0].data.shift();
    chartData.datasets[1].data.shift();
  }

  chart.update();
}
