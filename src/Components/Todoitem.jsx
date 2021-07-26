import React, { useState } from "react";


const Todoitem=(todo, onDelete) =>{
    return(
<>
<div > 
     <p>{todo.title}</p>
    <button className="btn btn-primary" 
    onClick ={ ()=>{onDelete(todo)}}>Remove</button>

</div>
<hr/>
</>
    )
};

export default Todoitem; 