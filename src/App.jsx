import React, { useEffect, useState } from "react";
import '..//node_modules/bootstrap/dist/css/bootstrap.min.css';
import '..//node_modules/bootstrap/dist/js/bootstrap.bundle';
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";

const App =() =>{
    let initTodo;
    if(localStorage.getItem("todos")===null){
        initTodo=[];
    }
    else{
        initTodo= JSON.parse(localStorage.getItem("todos")
        );
    }

const onDelete =(todo)=>
{
    console.log("i am on delete of todo", todo);
    setTodos(todos.filter((e) => {
        return e !== todo;
    }));
    console.log("deleted",todos)
    localStorage.setItem("todos",JSON.stringify(todos));
}

const addTodo=(title) => {
    console.log("i am adding this todo". title)
    let sno; 
if(todos.length === 0){
  sno = 0;
}
else{
    sno= todos[todos.length - 1].sno + 1;
}
const myTodo ={
    sno :sno,
    title: title,
}
setTodos([...todos,myTodo]);
console.log(myTodo);
}

const [todos,setTodos] = useState(initTodo);
useEffect(()=> {
    localStorage.setItem("todos",JSON.stringify(todos));
},[todos])


   
    return(
        <>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
   
  
   </>

    )
};
export default App;