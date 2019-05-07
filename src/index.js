import React from "react";
import ReactDOM from "react-dom";
import {ConnectedRouter} from 'connected-react-router'
import {history} from './store'
import {Provider, ReactReduxContext} from "react-redux";
import ReduxToastr from 'react-redux-toastr';
import {store, persistInStore} from "./store";
import {PersistGate} from 'redux-persist/lib/integration/react'
import "./assets/css/main.css";

import App from "./app.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
    <PersistGate load={null} persistor={persistInStore}>
      <ConnectedRouter history={history} context={ReactReduxContext}>
        <>
          <App/>
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-center"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick/>
          </>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
,
rootElement
);
