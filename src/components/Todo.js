import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { EditTodoForm } from './EditTodoForm'

export const Todo = ({ task, toggleComlete, deleteTodo, editTodo }) => {
    return (
        <div className='Todo'>
            <p onClick={() => toggleComlete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon className='delete-icon' icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className='edit-icon' icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}