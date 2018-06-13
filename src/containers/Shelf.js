import { connect } from 'react-redux';
import Shelf from '../components/Shelf';
import { MAX_SHAPES_PER_SHELF } from '../config';
import { createShapeMoveSuccess, createShapeMoveFailure } from '../actions/desk';

const canAddShape = (shelf, shape) => {
    const { items } = shelf;
    const hasShapes = items.length > 0;
    const firstShapeType = hasShapes && items[0].type;
    const isNewShapeAcceptable = hasShapes ? firstShapeType === shape.type : true;
    return items.length < MAX_SHAPES_PER_SHELF && isNewShapeAcceptable;
}

const mapDispatchToProps = (dispatch, { shelf }) => ({
    handleShapeMove: shape => {
        dispatch(canAddShape(shelf, shape) ? createShapeMoveSuccess(shelf, shape) : createShapeMoveFailure())
    }
})

export default connect(null, mapDispatchToProps)(Shelf);