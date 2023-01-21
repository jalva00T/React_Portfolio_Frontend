import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import createStore from './redux/store/store';
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import * as History from 'history';

const history = History.createBrowserHistory();
export const store = createStore(history)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
      <App />
      {/* </ConnectedRouter> */}
    </Provider>
  </React.StrictMode >
);


