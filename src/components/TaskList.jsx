import React from 'react';
import { TaskItem } from './index';

const TaskList = ({ tasks, deleteTask, toggleTask, sorted }) => {
  return (
    <div className='flex-1'>
      {/* sort for latest post */}
      {/* {sorted ? (
        <div>
          <ul>
            {tasks
              .filter((task) => task.checked === false)
              .sort((a, b) => b.id - a.id)
              .map((task) => (
                <TaskItem
                  task={task}
                  id={task.id}
                  deleteTask={deleteTask}
                  toggleTask={toggleTask}
                />
              ))}
          </ul>
          <ul>
            {tasks
              .filter((task) => task.checked === true)
              .sort((a, b) => b.id - a.id)
              .map((task) => (
                <TaskItem
                  task={task}
                  id={task.id}
                  deleteTask={deleteTask}
                  toggleTask={toggleTask}
                />
              ))}
          </ul>
        </div>
      ) : ( */}
      <div>
        <ul>
          {tasks
            .sort((a, b) => a.id - b.id)
            .map((task) => (
              <TaskItem
                task={task}
                id={task.id}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
