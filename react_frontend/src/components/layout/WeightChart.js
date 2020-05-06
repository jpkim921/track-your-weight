import React, { Component } from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";

class WeightChart extends Component {
  static defaultProps = {
    displayTitle: true,
    displayLegend: false,
    legendPosition: "bottom",
  };

  render() {
    const labels = this.props.weightpoints.map(
      (weightpoint) => weightpoint.date
    );

    const datasetsData = this.props.weightpoints.map(
      (weightpoint) => weightpoint.weight
    );

    // adjust y-axis min and max value dynamically based on weight points
    const min = Math.floor(datasetsData[0]) - 2;
    const max =
      Math.ceil(parseFloat(datasetsData[datasetsData.length - 1])) + 2;

    const data = {
      chartData: {
        labels: labels,
        datasets: [
          {
            label: "Progress",
            data: datasetsData,
            backgroundColor: ["rgba(255,99,132,0.6)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 2,
            fill: false,
            lineTension: 0.15,
          },
        ],
      },
    };

    const options = {
      title: {
        display: this.props.displayTitle,
        text: "Weight Progress",
        fontSize: 25,
      },
      legend: {
        display: this.props.displayLegend,
        position: this.props.legendPosition,
      },
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              min: min,
              max: max,
            },
          },
        ],
      },
    };

    return (
      <div className="chart">
        <Line
          data={data.chartData}
          options={options}
          width={500}
          height={320}
          // options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default WeightChart;
