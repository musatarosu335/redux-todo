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

export const updateInput = value => ({
  type: 'UPDATE_INPUT',
  payload: {
    value,
  },
});

export const asyncAddTask = task => (
  (dispatch) => {
    setTimeout(() => {
      dispatch(addTask(task));
    }, 1000);
  }
);

export const addTaskAndClear = task => (
  (dispatch) => {
    dispatch(asyncAddTask(task));
    dispatch(updateInput(''));
  }
);

export const addUniqueTask = task => (
  (dispatch, getState) => {
    const {
      tasks: {
        tasks,
      },
    } = getState();

    const isDeplicated = tasks.some(indTask => (
      indTask === task
    ));

    if (isDeplicated) {
      return;
    }
    dispatch(addTaskAndClear(task));
  }
);
