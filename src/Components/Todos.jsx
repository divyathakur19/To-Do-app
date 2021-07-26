import React, { useState } from "react";
import Todoitem from "./Todoitem";

const Todos=(props) => {
   return(
     <div className="container">
        {   props.todos.length === 0? "no todos to display":
             props.todos.map((todo) => {
                 console.log(todo.sno);
               return(<Todoitem todo={todo} key={todo.sno}
               onDelete={props.onDelete}/>
               )})
        }
   
     </div>
   )
}

export default Todos; 