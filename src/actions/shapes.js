import { SHAPES_FETCH_SUCCESS, SHAPES_FETCH_FAILURE } from "./types";

const createShapesFetchSuccess = shapes => ({
  type: SHAPES_FETCH_SUCCESS,
  shapes
});

const createShapesFetchFailure = () => ({
  type: SHAPES_FETCH_FAILURE
});

export default {
  createShapesFetchSuccess,
  createShapesFetchFailure
};
