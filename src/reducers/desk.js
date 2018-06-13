import {
    SHAPE_MOVE_START,
    SHAPE_MOVE_SUCCESS,
    SHAPE_MOVE_FAILURE
} from '../actions/types';

export const defaultState = {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHAPE_MOVE_SUCCESS: {
        return {
            ...state,
            [action.id]: [ ...state[action.id], action.shape ]
        }
    }
    
    default:
      return state;
  }
};

export default reducer;