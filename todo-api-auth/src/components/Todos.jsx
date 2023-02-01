import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import { useDispatch, useSelector } from 'react-redux'
import TodoForm from './TodoForm';
import { addTask, loadTask } from '../features/todoSlice';
import axios from 'axios';
import { TODO_RESOURCE_URL } from '../constant/constant';
import { setAuthToken } from '../auth';
import { fetchTodosService } from '../services/api.service';


const Todos = ({ todos }) => {

  const dispatch = useDispatch();
  const [renderComp, setRenderComp] = useState(false);
  // FIXME: waktu delete tidak ada refresh untuk re-fetch data dari database
  useEffect(() => {
     fetchTodosService(dispatch);
  }, []);

  useEffect(() => {
      setRenderComp(!renderComp);
      console.log("test");
  }, [todos]);

  return (
    <div className='flex flex-col mt-5 items-center justify-between py-3 px-2 gap-3'>
        <TodoForm />
        <div className='flex flex-col items-center gap-2'>
           {
            todos && Array.from(todos).map((todo, key) => (
               <Todo key={key} id={todo.secureId} task={todo.task} isChecked={todo.isChecked} />
            ))
           }
        </div>
    </div>
  )
}

export default Todos