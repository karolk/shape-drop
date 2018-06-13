import {
    SHAPE_MOVE_START,
    SHAPE_MOVE_SUCCESS,
    SHAPE_MOVE_FAILURE
} from '../actions/types';

export const defaultState = {
  movingShapeType: null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHAPE_MOVE_START:
      return {
        movingShapeType: action.shapeType
      };
    
    case SHAPE_MOVE_SUCCESS:
    case SHAPE_MOVE_FAILURE:
      return {
        movingShapeType: null
      }
      
    default:
      return state;
  }
};

export default reducer;