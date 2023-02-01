import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../features/todoSlice';
import ErrorMessage from '../util/ErrorMessage';
import { addTaskService, fetchTodosService } from '../services/api.service';
import axios from 'axios';
import Logo from '../assets/Logo';

const TodoForm = () => {

    const [text, setText] = useState("");
    const [dispErr, setDispErr] = useState(false);
    const [dispLoad, setDispLoad] = useState(false);

    const dispatch = useDispatch();

    const onTextChanged = (e) => {
        setText(e.target.value);
    }

    const submitTask = async (e) => {
        e.preventDefault();
        setDispLoad(true);
        const result = await addTaskService({ task: text });
        if(result.status === axios.HttpStatusCode.Created){
            fetchTodosService(dispatch);
            setDispLoad(false);
            setDispErr(false);
        } else {
            setDispErr(true);
        }
        setText("");
    }

  return (
    <form onSubmit={submitTask} className='flex flex-col gap-2'>
    { dispErr && <ErrorMessage msg={"Oops something went wrong"} /> }
    <div className='flex justify-around items-center h-10 w-96'>
    <input type="text" value={text} onChange={onTextChanged} className="w-80 h-10 outline-none focus:ring-1 focus:ring-sky-300 shadow-sm shadow-slate-500 border border-sky-500 rounded-md px-2" />
        <div className="w-fit h-fit">
            <button className='flex justify-center items-center w-8 h-8 rounded-full bg-sky-500 hover:scale-110 transition duration-200 text-white leading-[100%]'>
                {dispLoad ? <Logo /> : <>➕</>}
            </button>
        </div>
    </div>
</form>
  )
}

export default TodoForm