import React, { useState } from "react";
import './Todo.css';
import TodoCards from "./TodoCards";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from "./Update";
const Todo = () => {

    const [inputs,setinputs]=useState({title:"",body:""});
    const [array,setarray]=useState([])

    const show=()=>{
        document.getElementById('textarea').style.display="block";
    }

    const change=(e)=>{
        const {name,value}=e.target;
        setinputs({...inputs,[name]:value});
    }

    const submit=()=>{
      if(inputs.title==="" || inputs.body===""){
        toast.error("Title or body Should not be empty")
      }else{
        setarray([...array,inputs])
        setinputs({title:"",body:""});
        toast.success("Your task is Added");
        toast.error("Your task is Added but not saved! Please sign up")
      }
    }
    const del=(id)=>{
      array.splice(id,"1");
      setarray([...array]);
    }

    const dis=(value)=>{
      document.getElementById("todo-update").style.display=value;
    }

  return (
    <>
    <div className='todo'>
      <ToastContainer/>
      <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
        <div className='d-flex flex-column todo-inputs-div w-50 p-1'>
            <input type="text" placeholder='TITLE' className='my-2 p-2 todo-inputs' onClick={show} onChange={change} name='title' value={inputs.title}/>
            <textarea id='textarea' type="text" placeholder='BODY' className='p-2 todo-inputs' onChange={change} name='body' value={inputs.body}/>
        </div>
        <div className='w-50 d-flex justify-content-end my-3'>
            <button className='home-btn px-2 py-1' onClick={submit}>Add</button>
        </div>
      </div>
      <div className="todo-body">
        <div className="container-fluid">
            <div className="row">
                {array && 
                array.map((item,index)=>(
                    <div className="col-lg-3 col-10 mx-5 my-2" key={index}><TodoCards title={item.title} body={item.body} id={index} delid={del} display={dis}/></div>
                ))}
            </div>
        </div>
      </div>
    </div>
    <div className="todo-update" id="todo-update">
       <div className="container update"><Update display={dis}/></div> 
    </div>
    </>
  );
};

export default Todo
