import {
  createShapeMoveStart,
  createShapeMoveSuccess,
  createShapeMoveEnd
} from "./desk";
import { SHAPE_MOVE_START, SHAPE_MOVE_SUCCESS, SHAPE_MOVE_END } from "./types";

describe("createShapeMoveStart", () => {
  it("returns correct action", () => {
    expect(createShapeMoveStart("SHAPE_TYPE")).toEqual({
      type: SHAPE_MOVE_START,
      shapeType: "SHAPE_TYPE"
    });
  });
});

describe("createShapeMoveSuccess", () => {
  const shelf = { id: "1", items: [] };
  const shape = { type: "SHAPE_TYPE" };
  it("returns correct action", () => {
    expect(createShapeMoveSuccess(shelf, shape)).toEqual({
      type: SHAPE_MOVE_SUCCESS,
      shape,
      id: shelf.id
    });
  });
});

describe("createShapeMoveEnd", () => {
  it("returns correct action", () => {
    expect(createShapeMoveEnd()).toEqual({
      type: SHAPE_MOVE_END
    });
  });
});
