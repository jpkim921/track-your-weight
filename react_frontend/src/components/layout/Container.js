import React, { Fragment } from "react";
import Form from "./Form";
import WeightPoints from "./WeightPoints";
import WeightChart from "./WeightChart";

export default function Container() {
  return (
    <Fragment>
      <WeightChart />
      <Form />
      <WeightPoints />
    </Fragment>
  );
}
