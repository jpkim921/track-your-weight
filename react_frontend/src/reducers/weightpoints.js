import { GET_WEIGHTPOINTS, DELETE_WEIGHTPOINT } from "../actions/types.js";

const initialState = {
  weightpoints: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WEIGHTPOINTS:
      return {
        ...state,
        weightpoints: action.payload,
      };
    case DELETE_WEIGHTPOINT:
      return {
        ...state,
        weightpoints: state.weightpoints.filter(
          (weightpoint) => weightpoint.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
