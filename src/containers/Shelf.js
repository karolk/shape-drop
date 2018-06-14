import { connect } from "react-redux";
import Shelf from "../components/Shelf";
import { MAX_SHAPES_PER_SHELF } from "../config";
import { createShapeMoveSuccess } from "../actions/desk";

const getShelfType = shelf => {
  const { items } = shelf;
  const hasShapes = items.length > 0;
  return hasShapes ? items[0].type : null;
};

const canAcceptShape = (shelf, shape) => {
  const shelfType = getShelfType(shelf);
  const isNewShapeAcceptable = shelfType ? shelfType === shape.type : true;
  return shelf.items.length < MAX_SHAPES_PER_SHELF && isNewShapeAcceptable;
};

const getShelfWeight = (shelf, shapes) => {
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

const mapStateToProps = ({ shapes, app }, { shelf }) => ({
  ...getShelfWeight(shelf, shapes),
  canAcceptMovingShape: app.movingShapeType
    ? canAcceptShape(shelf, { type: app.movingShapeType })
    : true
});

const mapDispatchToProps = (dispatch, { shelf }) => ({
  handleShapeMove: shape => {
    if (canAcceptShape(shelf, shape)) {
      dispatch(createShapeMoveSuccess(shelf, shape));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shelf);
