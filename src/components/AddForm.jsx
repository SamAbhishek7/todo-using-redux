import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice"
import '../app/styles/1.css'
export default function AddForm() {
const [task,setTask] = useState("");
const dispatch = useDispatch();
 
const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(addTodo(task));
}
    return(
        <>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={(e)=>setTask(e.target.value)}></input>
            <button type="submit">Add</button>
            </form>
            </>
    )
}