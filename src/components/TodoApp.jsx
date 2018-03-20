import React from 'react';
import PropTypes from 'prop-types';

const TodoApp = ({
  task,
  tasks,
  asyncAddTask,
  inputTask,
  redirectToError,
}) => (
  <div>
    <input type="text" onChange={e => inputTask(e.target.value)} />
    <input type="button" value="add" onClick={() => asyncAddTask(task)} />
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
  asyncAddTask: PropTypes.func.isRequired,
  inputTask: PropTypes.func.isRequired,
};

export default TodoApp;
