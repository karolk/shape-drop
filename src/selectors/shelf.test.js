import { getShelfWeight } from "./shelf";

describe("getShelfWeight", () => {
  describe("when the shelf is not empty", () => {
    it("returns an object with shelf weight and unit", () => {
      const shapes = [
        { type: "SHAPE_ONE", measurement: { value: 12.4454, unit: "parsek" } },
        { type: "SHAPE_TWO", measurement: { value: 10.254, unit: "parsek" } },
        { type: "SHAPE_THREE", measurement: { value: 9.44, unit: "parsek" } }
      ];
      const shelf = {
        id: "1",
        items: [{ type: "SHAPE_ONE" }, { type: "SHAPE_ONE" }]
      };
      const product = getShelfWeight(shelf, shapes);
      expect(product.weightUnit).toBe("parsek");
      expect(product.weight).toBeCloseTo(2 * 12.4454);
    });
  });

  describe("when the shelf is empty", () => {
    it("returns an object weight as 0 and no unit", () => {
      const shapes = [
        { type: "SHAPE_ONE", measurement: { value: 12.4454, unit: "parsek" } },
        { type: "SHAPE_TWO", measurement: { value: 10.254, unit: "parsek" } },
        { type: "SHAPE_THREE", measurement: { value: 9.44, unit: "parsek" } }
      ];
      const shelf = {
        id: "1",
        items: []
      };
      const product = getShelfWeight(shelf, shapes);
      expect(product.weightUnit).toBeUndefined();
      expect(product.weight).toBe(0);
    });
  });
});
