import { connect } from "react-redux";
import Shelf from "../components/Shelf";
import { MAX_SHAPES_PER_SHELF } from "../config";
import {
  createShapeMoveSuccess,
  createShapeMoveFailure
} from "../actions/desk";

const getShelfType = shelf => {
  const { items } = shelf;
  const hasShapes = items.length > 0;
  return hasShapes ? items[0].type : null;
};

const canAddShape = (shelf, shape) => {
  const shelfType = getShelfType(shelf);
  const isNewShapeAcceptable = shelfType ? shelfType === shape.type : true;
  return shelf.items.length < MAX_SHAPES_PER_SHELF && isNewShapeAcceptable;
};

const getShelfWeight = (shelf, shapes) => {
  const shelfType = getShelfType(shelf);
  if (shelfType) {
    const shapeDetails = shapes.filter(shape => shape.type === shelfType)[0];
    if (shapeDetails) {
      // Currently all are in kg
      return shelf.items.length * shapeDetails.measurement.value;
    }
  }
  return 0;
};

const mapStateToProps = ({ shapes }, { shelf }) => ({
  weight: getShelfWeight(shelf, shapes)
});

const mapDispatchToProps = (dispatch, { shelf }) => ({
  handleShapeMove: shape => {
    dispatch(
      canAddShape(shelf, shape)
        ? createShapeMoveSuccess(shelf, shape)
        : createShapeMoveFailure()
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shelf);
