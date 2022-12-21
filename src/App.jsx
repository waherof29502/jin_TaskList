import React, { useState } from 'react';
import { CustomForm, TaskList } from './components/index';
//custom hooks
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [sorted, setSorted] = useState(false);

  const addTask = (task) => {
    console.log(task);
    setTasks((prevState) => [...prevState, task]);
  };
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };
  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  // const sortTask = (id) => {
  //   setTasks((prevState) => prevState.filter((task) => task.checked === false));
  // };

  return (
    <div className='bg-[#8f90cf] h-screen flex justify-center py-6'>
      <div className='w-[70%] bg-[#eff6fe] px-10 py-8 rounded-[10px] overflow-y-scroll'>
        <div className='mb-[20rem]'>
          <h2 className='text-4xl bolder text-[#7691dc] pb-2'>Todo List</h2>
          <span className='px-1 text-gray-500 '>Add Thing to do</span>
          <hr className='border-10 border-[#7691dc] m-3' />
          {tasks && (
            <TaskList
              tasks={tasks}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              sorted={sorted}
            />
          )}
          <hr className='border-10 border-[#7691dc] m-3' />
          <div className='flex justify-end items-center'>
            <span className='mr-3'>Move done things to end?</span>
            <label
              for='check'
              className='bg-gray-300 relative w-10 h-5 rounded-full'
            >
              <input
                type='checkbox'
                id='check'
                className='sr-only peer '
                onClick={() => setSorted((prev) => !prev)}
              ></input>
              <span className='w-2/5 h-4/5 bg-[#8f90cf] absolute rounded-full top-[1.8px] left-1 peer-checked:bg-[#3234b0] peer-checked:left-5' />
            </label>
          </div>
        </div>
        <CustomForm addTask={addTask} />
      </div>
    </div>
  );
};

export default App;
