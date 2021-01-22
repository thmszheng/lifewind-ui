import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import { createStore, compose, applyMiddleware } from "redux";
import Sagas from "./sagas";

let store;
const initialState = {};
const sagaMiddleWare = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getStore = () => {
  if (!store) {
    store = createStore(
      reducers,
      initialState,
      composeEnhancers(applyMiddleware(sagaMiddleWare))
    );

    sagaMiddleWare.run(Sagas);
  }
  return store;
};

export default getStore;
