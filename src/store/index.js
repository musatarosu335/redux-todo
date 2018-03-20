import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import tasksReducer from '../reducers/tasks';

const createStore = (history, logger, thunk) => (
  reduxCreateStore(
    combineReducers({
      tasks: tasksReducer,
      router: routerReducer,
    }),
    applyMiddleware(routerMiddleware(history), logger, thunk),
  )
);

export default createStore;

/*
{
  tasks: {
    task: '',
    tasks: [],
  },
  router: {
    location: {
      // ルーティング情報
    }
  },
}
*/
