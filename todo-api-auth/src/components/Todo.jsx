import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { checkTask, deleteTask } from '../features/todoSlice';
import { checkTaskService, deleteTaskService, fetchTodosService } from '../services/api.service';
import axios from 'axios';
import AniLoad from '../assets/AniLoad';

const Todo = ({ id, task, isChecked }) => {

  const dispatch = useDispatch();
  const [dispLoadDelete, setDispLoadDelete] = useState(false);
  const [dispLoadCheck, setDispLoadCheck] = useState(false);

  // const loadLogo = ;
  // TODO: Lanjut untuk memperhalus aplikasi
  const onDelete = async (id) => {
    setDispLoadDelete(true);
    const result = await deleteTaskService(id);
    if(result.status === axios.HttpStatusCode.Ok) {
      fetchTodosService(dispatch);
    }

    setDispLoadDelete(false);
  }

  const onCheck = async (id) => {
    setDispLoadCheck(true);
    const result = await checkTaskService(id);
    if(result.status === axios.HttpStatusCode.Ok){
      fetchTodosService(dispatch);
    }
    setDispLoadCheck(false);
  }

  return (
    <div className='w-96 h-10 px-2 py-1 bg-green-400 flex items-center justify-between rounded-md'>
      <span className={`text-md text-white text-xl ${isChecked ? 'line-through' : ''}`}>{task}</span>
      <div className='w-16 flex justify-around'>
      <button className='mr-2' onClick={() => onDelete(id)}>
        {dispLoadDelete ? <AniLoad /> : <>❌</>}
      </button>
      <button onClick={() => onCheck(id)}>
        {dispLoadCheck ? <AniLoad /> : <>✔️</>}
      </button>
      </div>
    </div>
  )
}

export default Todo