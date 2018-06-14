import { SHAPE_MOVE_SUCCESS, SHAPE_MOVE_FAILURE } from "./types";

export const createShapeMoveSuccess = ({ id }, shape) => ({
  type: SHAPE_MOVE_SUCCESS,
  shape,
  id
});

export const createShapeMoveFailure = () => ({
  type: SHAPE_MOVE_FAILURE
});
