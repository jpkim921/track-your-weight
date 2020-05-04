import React, { Fragment } from "react";
import Form from "./Form";
import WeightPoints from "./WeightPoints";

export default function Container() {
  return (
    <Fragment>
      <Form />
      <WeightPoints />
    </Fragment>
  );
}
