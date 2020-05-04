import React, { Fragment } from "react";
import Form from "./Form";
import WeightPoints from "./WeightPoints";
import WeightChart from "./WeightChart";

export default function Container() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-8">
          <WeightChart />
        </div>
        <div className="col-md align-self-center">
          <Form />
        </div>
      </div>
      <WeightPoints />
    </Fragment>
  );
}
