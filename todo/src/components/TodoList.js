import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    const {state, dispatch} = props
    return (
        <div>
            <h1>To Do List:</h1>
            {
                state.list.map(task => (
                    <Todo task={task} dispatch={dispatch}/>
                ))
            }
        </div>
    )
}

export default TodoList