import { SHAPE_MOVE_SUCCESS } from "../actions/types";

export const defaultState = {
  "1": [],
  "2": [],
  "3": [],
  "4": []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHAPE_MOVE_SUCCESS: {
      return {
        ...state,
        [action.id]: [...state[action.id], action.shape]
      };
    }

    default:
      return state;
  }
};

export default reducer;
