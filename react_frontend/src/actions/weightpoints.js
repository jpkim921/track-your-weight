// this will be where we will make all of over http request
import axios from "axios";

import { GET_WEIGHTPOINTS, DELETE_WEIGHTPOINT, ADD_WEIGHTPOINT } from "./types";

// GET WEIGHTPOINTS
export const getWeightPoints = () => (dispatch) => {
  axios
    .get("/api/weightpoints/")
    .then((res) => {
      dispatch({
        type: GET_WEIGHTPOINTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// export function fetchPatients() {
//   return (dispatch) => {
//     dispatch({ type: "LOADING_PATIENTS" });
//     return fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((patients) =>
//         dispatch({ type: "FETCH_PATIENTS", payload: patients })
//       );
//   };
// }

// DELETE WeightPoint
export const deleteWeightPoint = (id) => (dispatch) => {
  axios
    .delete(`/api/weightpoints/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_WEIGHTPOINT,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD WEIGHTPOINT
export const addWeightPoint = (weightpoint) => (dispatch) => {
  axios
    .post("/api/weightpoints/", weightpoint)
    .then((res) => {
      dispatch({
        type: ADD_WEIGHTPOINT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
