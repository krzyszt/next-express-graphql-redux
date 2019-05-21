import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers/rootReducer';
import rootEpic from './epics/rootEpic';

export default (initialState = {}) => {
  const epicMidleware = createEpicMiddleware();
  const middleware = [
    epicMidleware
  ];

  const enhancers = [
    applyMiddleware(...middleware)
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
      })
      : compose;
  /* eslint-enable */

  const store = createStore(
    rootReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  epicMidleware.run(rootEpic)

  return store;
}