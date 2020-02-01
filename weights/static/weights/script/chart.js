console.log("connected Now")

let endpoint = "/api/chart/data";

let defaultData = [];
let labels = [];
$.ajax({
  method: "GET",
  url: endpoint,
  success: function(data) {
    labels = data.labels;
    weights = data.weights;
    console.log("labels-x", labels)
    console.log("weights-y", weights);
    setChart();
  },
  error: function(error_data) {
    console.log("error");
    console.log(error_data);
  }
});

function setChart() {
  var ctx = document.getElementById("weight-chart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Weight Change",
          data: weights,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false
            }
          }
        ]
      }
    }
  });
}