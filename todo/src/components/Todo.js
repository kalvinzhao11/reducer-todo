import React from 'react'
import './Todo.css'

const Todo = (props) => {
    const {task, dispatch} = props

    const toggleComplete = () => {
        dispatch({type: 'TOGGLE_COMPLETE', payload: task.id})
    }

    return (
        <div className={task.completed ? 'completed' : ''}
            key={task.id} 
            onClick={toggleComplete}>
            <p>{task.item}</p>
        </div>
    )
}

export default Todo