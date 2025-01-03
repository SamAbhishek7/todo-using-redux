//reducers
import { nanoid,createSlice } from "@reduxjs/toolkit";
const initialState = {
    todos:[{
        id:"abc",
        task:"Learn Redux",
        isDone:false
    }]

}
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
       addTodo:(state,action)=>{//state is the current state of the slice and action is the payload
        const newTodo = {
        id:nanoid(),
        task :action.payload,
        isDone:false
        }
        state.todos.push(newTodo);//direct mutation of state is allowed in redux toolkit
    },
deleteTodo:(state,action)=>
{
state.todos = state.todos.filter(todo=>todo.id!==action.payload)
},
markAsDone:(state,action)=>
{
    state.todos = state.todos.map(todo=>
    {
        if(todo.id===action.payload)
        {
            todo.isDone = true;
        }
    console.log(todo.isDone);
       return todo;
    }

    )
}}
})
export const {addTodo,deleteTodo,markAsDone} = todoSlice.actions; 
export default todoSlice.reducer;