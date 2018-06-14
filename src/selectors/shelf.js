import { MAX_SHAPES_PER_SHELF } from "../config";

export const getShelfType = shelf => {
  const { items } = shelf;
  const hasShapes = items.length > 0;
  return hasShapes ? items[0].type : null;
};

export const canAcceptShape = (shelf, shape) => {
  const shelfType = getShelfType(shelf);
  const isNewShapeAcceptable = shelfType ? shelfType === shape.type : true;
  return shelf.items.length < MAX_SHAPES_PER_SHELF && isNewShapeAcceptable;
};

export const getShelfWeight = (shelf, shapes) => {
  const shelfType = getShelfType(shelf);
  if (shelfType) {
    const shapeDetails = shapes.filter(shape => shape.type === shelfType)[0];
    if (shapeDetails) {
      return {
        weight: shelf.items.length * shapeDetails.measurement.value,
        weightUnit: shapeDetails.measurement.unit
      };
    }
  }
  return {
    weight: 0
  };
};
