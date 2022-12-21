import React, { useState } from 'react';
import { RiAddBoxFill } from 'react-icons/ri';

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask('');
  };
  return (
    <div>
      <h3>Add to List</h3>
      <form
        className='flex items-center justify-center'
        onSubmit={handleFormSubmit}
      >
        <input
          type='text'
          id='task'
          className='rounded-[5px] w-full p-[10px] border-none outline-none bg-white text-black mb-[10px]'
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={30}
          placeholder='Add to List'
        />
        <RiAddBoxFill
          className='text-[#7691dc] text-[4rem] cursor-pointer ml-[20px] mb-[10px]'
          onClick={handleFormSubmit}
        />
      </form>
    </div>
  );
};

export default CustomForm;
