import {  Circle, Rectangle, Square, Triangle } from "./";

const getComponentFromType = type => ({
    'SHAPE_TYPE_CIRCLE': Circle,
    'SHAPE_TYPE_RECTANGLE': Rectangle,
    'SHAPE_TYPE_SQUARE': Square,
    'SHAPE_TYPE_TRIANGLE': Triangle
})[type] || null;

export default getComponentFromType;
