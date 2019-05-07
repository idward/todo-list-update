import {createStore, applyMiddleware, compose} from "redux";
import {routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history'
import reducers from "./reducers";
import thunk from "redux-thunk";
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist:['router']
}

export const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistReducers = persistReducer(persistConfig, reducers(history))

export const store = createStore(
  persistReducers,
  composeEnhancer(applyMiddleware(thunk, routerMiddleware(history)))
);

export const persistInStore = persistStore(store)
