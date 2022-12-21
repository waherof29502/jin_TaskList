import React, { useState } from 'react';
import { RiAddBoxFill } from 'react-icons/ri';
const EditForm = ({ editedTask, updateTask }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div role='dialog' aria-labelledby='editTask'>
      <form
        className='flex items-center justify-center'
        onSubmit={handleFormSubmit}
      >
        <input
          type='text'
          id='editTask'
          className='rounded-[5px] w-full p-[10px] border-none outline-none bg-white text-black mb-[10px]'
          value={updatedTaskName}
          onInput={(e) => setUpdatedTaskName(e.target.value)}
          required
          autoFocus
          maxLength={30}
          placeholder='Update Task'
        />
        <RiAddBoxFill
          className='text-[#7691dc] text-[4rem] cursor-pointer ml-[20px] mb-[10px]'
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type='submit'
        />
      </form>
    </div>
  );
};

export default EditForm;
