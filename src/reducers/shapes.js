import {
    SHAPES_FETCH_SUCCESS,
} from '../actions/types';

export const defaultState = null;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHAPES_FETCH_SUCCESS: {
        return action.shapes
    }
    
    default:
      return state;
  }
};

export default reducer;