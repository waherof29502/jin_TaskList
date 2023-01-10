import React, { useEffect, useState } from 'react';
//firebase lib
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from './firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
//custom components
import { TextInput, TaskList } from './components/index';
//custom hooks
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [sorted, setSorted] = useState(false);
  // const [registerEmail, setRegisterEmail] = useState('');
  // const [registerPassword, setRegisterPassword] = useState('');
  // const [loginEmail, setLoginEmail] = useState('');
  // const [loginPassword, setLoginPassword] = useState('');

  //create todo
  //Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, 'tasks'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let tasksArr = [];
      querySnapshot.forEach((doc) => {
        tasksArr.push({ ...doc.data(), id: doc.id });
      });
      setTasks(tasksArr);
    });
    return () => unsubscribe();
  }, []);
  //update todo in firebase
  //delete todo in firebase

  // const register = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const login = async () => {};
  // const logout = async () => {};

  //Task Form Function
  const addTask = (task) => {
    console.log(task);

    setTasks((prevState) => [...prevState, task]);
  };
  //Another Way AddTask
  // function addTask(task) {
  //   setTasks([
  //     ...task,
  //     {
  //       name: task,
  //       checked: false,
  //       id: Date.now(),
  //     },
  //   ]);
  // }
  const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
    // setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  const toggleTask = async (task) => {
    await updateDoc(doc(db, 'tasks', task.id), {
      checked: !task.checked,
    });

    // await updateDoc(
    //   setTasks((prevState) =>
    //     prevState.map((task) =>
    //       task.id === id ? { ...task, checked: !task.checked } : task
    //     )
    //   )
    // );
  };
  //Another Way to code
  // function toggleTask(id) {
  //   const newTasks = tasks.map(task => {
  //     if(task.id === id){
  //       return {
  //       ...task,
  //       checked:!task.checked
  //       }
  //     }
  //     return task
  //   })
  //   setTasks(newTasks)
  // }
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.checked).length;

  return (
    <div className='bg-[#8f90cf] h-screen flex justify-center py-6'>
      <div className='w-[70%] bg-gradient-to-b from-[#e0ebff] to-[#f9e0ff] px-10 py-8 rounded-[10px] overflow-y-scroll'>
        <div className='mb-[20rem]'>
          <h2 className='text-4xl bolder text-[#7691dc] pb-2'>Todo List</h2>
          <span className='px-1 text-gray-500 '>Add Thing to do</span>
          <hr className='border-10 border-[#7691dc] m-3' />
          <div className='flex justify-end m-4'>
            <span className='text-[#7691dc] mr-2'>Completed</span>
            <span className='bg-gray-300 px-3 rounded-full '>
              {completedTasks} of {tasksQuantity}
            </span>
          </div>

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
        <TextInput addTask={addTask} />
      </div>
    </div>
  );
};

export default App;
