import { connect } from "react-redux";
import Shelf from "../components/Shelf";
import { createShapeMoveSuccess } from "../actions/desk";
import { canAcceptShape, getShelfWeight } from "../selectors/shelf";

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
