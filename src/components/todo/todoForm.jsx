import { useState } from "react"
import './todoForm.css'

const TodoForm=({addTodo})=>{
    const [value, setValue]= useState("")

    const handleSubmit=e=>{
        e.preventDefault()
        

        addTodo(value)

        setValue("")
    }
    return(
        <>
        <form className="todoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="New task" onChange={(e)=>setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">Add</button>
        </form>
        </>
    )
}
export default TodoForm