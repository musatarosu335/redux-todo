import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import TodoApp from './containers/TodoApp';
import createStore from './store';

// historyインスタンスの生成
const history = createBrowserHistory();

// Storeの生成
const store = createStore(history);

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <TodoApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
