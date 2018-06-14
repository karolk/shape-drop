import { SHAPE_MOVE_START, SHAPE_MOVE_END } from "../actions/types";
import { SHAPES_FETCH_FAILURE } from "../actions/types";

export const defaultState = {
  movingShapeType: null,
  error: null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHAPE_MOVE_START:
      return {
        ...state,
        movingShapeType: action.shapeType
      };

    case SHAPE_MOVE_END:
      return {
        ...state,
        movingShapeType: null
      };

    case SHAPES_FETCH_FAILURE:
      return {
        ...state,
        error: SHAPES_FETCH_FAILURE
      };

    default:
      return state;
  }
};

export default reducer;
