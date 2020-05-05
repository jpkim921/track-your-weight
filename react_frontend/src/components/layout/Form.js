import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addWeightPoint } from "../../actions/weightpoints";

export class Form extends Component {
  state = {
    weight: "",
  };

  static propTypes = {
    addWeightPoint: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    const { weight } = this.state;
    const weightpoint = { weight };
    this.props.addWeightPoint(weightpoint);

    this.setState({
      weight: "",
    });
  };

  render() {
    const { weight } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Weight Point</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Weight</label>
            <input
              className="form-control"
              type="number"
              name="weight"
              onChange={this.onChange}
              value={weight}
              step="0.01"
              min="0"
            ></input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addWeightPoint })(Form);
