import React,{useEffect, useState} from 'react';
import axios from 'axios'

// async function getData(url){
//   try{
//     let response =await axios.get(url)
//     return res?.data
//   }catch(error){
//     console.log(error)
//   }
// }

 function Todo(){
  const [todoList,settodoList]=useState([]);
  const[loading,setloding]=useState(false);
  const[err,seterr]=useState(false)
  const[page,setpage]=useState(1)
  let[totalPages,settotalPages]=useState(1)
  const limit=40;


  useEffect(function(){
    getTodo(page)
  },[page])
  
  async function getTodo(page){
    setloding(true)
    try{
      let response=await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`)
      // let response=await getData(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=20`)
      settodoList(response.data);
      setloding(false)
      console.log(response)
      const totalCount=Number(response.headers["x-total-count"])
      totalPages=Math.ceil(totalCount/limit)
      settotalPages(totalPages)



    }catch(error){
     seterr(true)
     setloding(false)
    }
  }
  if(loading){
    return (
      <div>
        <img src="https://cdn1.vectorstock.com/i/1000x1000/49/90/loading-icon-on-black-vector-24544990.jpg" id="loading"></img>
        <h5>Loading...</h5>
      </div>
    )
  }
  if(err){
    return(
      <>
      <h5>Something Went Wrong !</h5>
      <button onClick={getTodo} style={{backgroundColor:"blue",color:"whitesmoke"}}>Try Again </button>
      </>
    )
  }

  

  return (
    <div>
        <h1>Todos</h1>
        <h4>Page No: {page}</h4>
        {/* <button onClick={getTodo}>Click to Get Todos</button> */}
        {todoList && todoList.length>0 && todoList.map((todo)=>(
         <div key={todo.id} id="display">
          <h4>Title : {todo.title}</h4>
          <p>User Id : {todo.userId}</p>
          <h6>Status: {todo.completed}</h6>
         </div>)
          
        )}
        <button onClick={()=>setpage(page-1)} disabled={page===1} >Previous</button>
        <button onClick={()=>setpage(page+1)} disabled={page===totalPages}>Next</button>
    </div>
  )
}
export default Todo;
