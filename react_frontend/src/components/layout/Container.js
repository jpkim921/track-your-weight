import React, { Component, Fragment } from "react";
import Form from "./Form";
import WeightPoints from "./WeightPoints";
import WeightChart from "./WeightChart";

import { getWeightPoints } from "../../actions/weightpoints";

import { connect } from "react-redux";

class Container extends Component {
  componentDidMount() {
    this.props.getWeightPoints();
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-8">
            <WeightChart weightpoints={this.props.weightpoints} />
          </div>
          <div className="col-md align-self-center">
            <Form />
          </div>
        </div>
        <WeightPoints weightpoints={this.props.weightpoints} />
      </Fragment>
    );
  }
}

const mapStateToProp = (state) => ({
  weightpoints: state.weightpoints.weightpoints,
});

export default connect(mapStateToProp, { getWeightPoints })(Container);
