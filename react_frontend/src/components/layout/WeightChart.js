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
    const data = {
      chartData: {
        labels: this.props.weightpoints.map((weightpoint) => weightpoint.date),
        datasets: [
          {
            label: "Progress",
            data: this.props.weightpoints.map(
              (weightpoint) => weightpoint.weight
            ),
            backgroundColor: ["rgba(255,99,132,0.6)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 2,
            fill: false,
            lineTension: 0,
          },
        ],
      },
    };
    return (
      <div className="chart">
        <Line
          data={data.chartData}
          options={{
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
                    stepSize: 0.2,
                  },
                },
              ],
            },
          }}
          width={500}
          height={320}
          // options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default WeightChart;
