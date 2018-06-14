import reducer, { defaultState } from "./desk";
import { SHAPE_MOVE_SUCCESS } from "../actions/types";

describe("desk reducer", () => {
  describe("when the action.type is SHAPE_MOVE_SUCCESS", () => {
    it("adds the shape into the right shelf", () => {
      expect(
        reducer(defaultState, {
          type: SHAPE_MOVE_SUCCESS,
          id: "3",
          shape: { type: "SHAPE_TYPE" }
        })
      ).toEqual({
        ...defaultState,
        3: [{ type: "SHAPE_TYPE" }]
      });
    });
  });

  describe("when the action.type is unrecognised", () => {
    it("returns the default state", () => {
      expect(
        reducer(defaultState, {
          type: "UNKNOWN"
        })
      ).toBe(defaultState);
    });
  });
});
