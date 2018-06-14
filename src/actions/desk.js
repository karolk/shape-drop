import { SHAPE_MOVE_START, SHAPE_MOVE_SUCCESS, SHAPE_MOVE_END } from "./types";

export const createShapeMoveStart = shapeType => ({
  type: SHAPE_MOVE_START,
  shapeType
});

export const createShapeMoveSuccess = ({ id }, shape) => ({
  type: SHAPE_MOVE_SUCCESS,
  shape,
  id
});

export const createShapeMoveEnd = () => ({
  type: SHAPE_MOVE_END
});

export default {
  createShapeMoveStart,
  createShapeMoveSuccess,
  createShapeMoveEnd
};
