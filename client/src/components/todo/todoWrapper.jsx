import './todoWrapper.css'
import { useState } from "react"
import TodoForm from "./todoForm"
import {v4 as uuidv4} from 'uuid'
import Todo from "./todo"
import EditForm from "./editForm"
import TopMost from '../topmost'
import Nav from '../nav'
uuidv4()

const TodoWrapper=()=>{
    const [todos, setTodos]= useState([])

    const addTodo= todo=>{
        setTodos([...todos,{id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }
    const toggleComplete=id=>{
        setTodos(todos.map(todo=>todo.id=== id? {...todo, completed: !todo.completed}: todo))
    }

    const deleteTodo=id=>{
        setTodos(todos.filter(todo=>todo.id !==id))
    }

    const editTodo=id=>{
        setTodos(todos.map(todo=> todo.id=== id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask= (task, id)=> {
        setTodos(todos.map(todo=> todo.id=== id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }
    return(
        <>
        <TopMost/>
        <Nav/>
        <div className="todoWrapper">
            <div className='top'>
                <h1>To Do List</h1>
            </div>
            <div className='middle'>
                <TodoForm addTodo={addTodo}/>
            </div>
            <div className='bottom'>
                {todos.map((todo, index)=>(
                    todo.isEditing ? (
                        <EditForm editTodo={editTask} task={todo}/>
                    ) : (
                    <Todo task={todo} key={index} toggleComplete={toggleComplete}deleteTodo={deleteTodo}editTodo={editTodo}/>
                    )
                ))}
            </div>
            
            
        </div>
        </>
    )
}
export default TodoWrapper