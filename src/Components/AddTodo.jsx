import React, { useState } from 'react';
import Todoitem from './Todoitem';


const AddTodo= ({addTodo})=>{
    const [title, setTitle] = useState("");

    const submit = (e)=> {
        e.preventDefault();
       if(!title){
        alert("Title is blank");
    }
    else {
        addTodo(title);
        setTitle("");
    }
}
 return(

    <div className="main_div">
       <div className="center_div">
           <h1>
               To Do list
           </h1>
    <form onSubmit={submit}>
        <input className="input" id="title" type="text" value={title} onChange={ (e) =>setTitle(e.target.value)} placeholder="Add items" />
    <button  className="btn btn-danger">Add</button>
    <Todoitem />

    </form>
       </div>
    </div> 
    
 )
}
export default AddTodo;