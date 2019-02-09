import {compose, createStore, applyMiddleware} from 'redux';
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'
import {dataMiddleware} from './middlewares/data.middleware'
import {apiMiddleware} from './middlewares/api.middleware'
import createRootReducer from './rootReducer';

export const history = createBrowserHistory();
const store = createStore(
  createRootReducer(history), // new root reducer with router state
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      dataMiddleware, // for dispatching apiRequest by route
      apiMiddleware   // for fetching data
    ),
  ),
);

// for dev purpose only
window.store = store;

export default store;