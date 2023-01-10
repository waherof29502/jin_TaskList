import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

const TaskItem = ({ task, deleteTask, toggleTask }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task);
  };

  return (
    <div className='flex items-center justify-center text-blue'>
      <div className='bg-white text-blue flex flex-1 w-[70%] border-l-4 border-[#7691dc] rounded-[5px] mb-[10px]'>
        <div className='flex flex-1 justify-between items-center p-2 text-xl'>
          <div className='flex items-center'>
            <input
              type='checkbox'
              checked={isChecked}
              name={task.name}
              id={task.id}
              onChange={handleCheckboxChange}
              className='m-3 border-[#7691dc] text-[#7691dc]'
            />
            <p className={`${isChecked ? 'line-through' : ''}`}>{task.name}</p>
          </div>
          <div className='flex items-center justify-center cursor-pointer'>
            <RxCross2
              className='text-gray-300 text-[1.2rem] mr-4 hover:text-[#7691dc]'
              onClick={() => deleteTask(task.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
