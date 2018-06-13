import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const configureStore = initialState => {
  const enhancers = [];

  const composeEnhancers = (
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) || compose;
  const enhancer = composeEnhancers(...[
    ...enhancers
  ]);

  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}

export default configureStore;
