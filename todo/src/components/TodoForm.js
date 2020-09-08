import React from 'react'

export const TodoForm = (props) => {

    const {state, dispatch} = props
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_TO_LIST', payload: state.todo})
        dispatch({type: 'ADD_TASK', payload: ''})
    }
    const removeComplete = (e) => {
        e.preventDefault()
        dispatch({type: 'REMOVE_COMPLETED'})
    }
    return (
        <form onSubmit={onSubmit}>
            <input type='text'
            name='task'
            value={state.todo.item}
            onChange={(e) => dispatch({type: 'ADD_TASK', payload: e.target.value})}></input>
            <button>Add Task</button>
            <button onClick={removeComplete}>Remove Completed</button>
        </form>
    )
}