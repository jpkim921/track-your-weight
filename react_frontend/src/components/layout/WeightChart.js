import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Bar, Line } from "react-chartjs-2";

class WeightChart extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(props);
  //   this.state = {
  //     chartData: {
  //       labels: [],
  //       datasets: [
  //         {
  //           label: "Progress",
  //           data: [],
  //           backgroundColor: ["rgba(255,99,132,0.6)"],
  //         },
  //       ],
  //     },
  //   };
  // }

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
          },
        ],
      },
    };

    console.log(data);
    return (
      <div className="chart">
        <Line
          // data={this.state.chartData}
          data={data.chartData}
          width={500}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  weightpoints: state.weightpoints.weightpoints,
});

export default connect(mapStateToProps)(WeightChart);
