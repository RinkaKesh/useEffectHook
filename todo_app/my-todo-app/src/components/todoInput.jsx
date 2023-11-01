import React,{useState} from "react";

const Todos=()=>{
    const[inputValue,setinputValue]=useState("");
    const[todoList,settodoList]=useState([]);

    const handleInput=(e)=>{
        setinputValue(e.target.value);
    }
    const handleSubmit=()=>{
        const newTodo={
            title:inputValue,
            id:Date.now()+Math.random(),
            status:false
        }
        console.log(newTodo)
        const arrOfAddedTodo=[...todoList,newTodo];
        settodoList(arrOfAddedTodo)
    }
//  change the status of a todo
    const toggleTodo=(id)=>{
        const arrOfUpdatedTodo=todoList.map((todo)=>{
            if(todo.id==id){
                return {...todo,status:!todo.status}
            }
            else{
                return todo
            }
        });
        settodoList(arrOfUpdatedTodo);
    }

// delete a todo
    const deleteTodo=(id)=>{
        const arrOfTodoAfterDelete=todoList.filter((todo) => todo.id !== id)
        settodoList(arrOfTodoAfterDelete);

    }

// returning todo App
    return(
        <div>
            <h2 style={{color:"blueviolet"}}>TODO APP</h2>
            <input placeholder="Enter Todo Here" type="text" onChange={handleInput} style={{padding:"5px",marginRight:"2px"}}/>
            <button onClick={handleSubmit} style={{padding:"5px",marginLeft:"2px"}}>Add Todo</button>
            <p style={{color:"red",textDecoration:"underline"}}>Todo List</p>
            {todoList.map((todo)=>
            
                <div key={todo.id} style={{backgroundColor:"lightgrey",marginBottom:"6px"}}>
                    <p style={{fontWeight:"bold"}}>Title :{todo.title.toUpperCase()}</p>
                    <p>Status :{todo.status?"Done":"Not Done"}</p>
                    <button id="toggle" onClick={()=>toggleTodo(todo.id)}>Toggle</button>
                    <button id="delete" onClick={()=>deleteTodo(todo.id)} >Delete</button>
                </div>
            )}
        </div>
    )
}
export default Todos