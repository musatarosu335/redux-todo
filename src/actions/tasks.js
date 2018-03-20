import shortid from 'shortid';

export const inputTask = task => ({
  type: 'INPUT_TASK',
  payload: {
    task,
  },
});

export const addTask = task => ({
  type: 'ADD_TASK',
  payload: {
    id: shortid.generate(),
    task,
  },
});

export const asyncAddTask = task => (
  (dispatch, getState) => {
    setTimeout(() => {
      dispatch(addTask(task));
    }, 1000);
  }
);
