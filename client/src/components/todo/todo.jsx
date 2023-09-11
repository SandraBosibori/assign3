import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import './todo.css'


const Todo=({task, toggleComplete, deleteTodo, editTodo})=>{
    return(
        <div className='all'>
            <div className="todo">
                <div>
                    <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
                </div>
                
                <div className='icons'>
                    <div>
                        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTrashCan} onClick={()=>deleteTodo(task.id)}/>
                    </div>
                
                
                </div>
            </div>
        </div>
    )
}
export default Todo