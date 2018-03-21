import React from 'react';
import PropTypes from 'prop-types';

const TodoApp = ({
  task,
  tasks,
  addTaskAndClear,
  inputTask,
  redirectToError,
}) => (
  <div>
    <input type="text" value={task} onChange={e => inputTask(e.target.value)} />
    <input type="button" value="add" onClick={() => addTaskAndClear(task)} />
    <ul>
      {
        tasks.map((item, i) => (
          <li key={i}>{item}</li>
        ))
      }
    </ul>
    <button onClick={() => redirectToError()}>エラーページへ</button>
  </div>
);

TodoApp.propTypes = {
  task: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  addTaskAndClear: PropTypes.func.isRequired,
  inputTask: PropTypes.func.isRequired,
  redirectToError: PropTypes.func.isRequired,
};

export default TodoApp;
