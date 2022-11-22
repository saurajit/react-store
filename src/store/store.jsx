import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../redux/reducers'
import rootSaga from '../saga'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleWareEnhancer = applyMiddleware(sagaMiddleware);
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
      rootReducer,
      composeEnhancers(
          middleWareEnhancer
      ),
  );

  sagaMiddleware.run(rootSaga);
  return store;
}