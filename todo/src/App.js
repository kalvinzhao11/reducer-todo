import React, {useReducer, useState} from 'react';
import './App.css';
import {TodoForm} from './components/TodoForm'
import TodoList from './components/TodoList'
import { initialState, reducer } from './reducers/todoListReducer';

function App() {

  // let currentState = {make: 'Chevy', model: 'Covette', year: 2020}

  // const dispatch = action => {
  //   currentState = reducer(currentState, action)
  // }

  // // state is going to be equals to current state
  // // action must be an object and have a type as well
  // const reducer = (state, action) => {
  //   switch (action.type){
  //     case ('INCREMENT_YEAR'):
  //       return {...state, year: state.year+1}
  //     case ('UPDATE_MODEL'):
  //       return {...state, model: action.payload}
  //     default:
  //       return state
  //   }
  // }
  // // button - increment the year
  // // event is a button click
  // // resulting state to have year 2021

  // const firstAction = { type: 'INCREMENT_YEAR' }
  // const modelAction = {type: 'UPDATE_MODEL', payload: 'Camaro'}

  // dispatch({ type: 'INCREMENT_YEAR' })
  // dispatch({type: 'UPDATE_MODEL', payload: 'Camaro'})
  // console.log(currentState)

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <TodoList state={state} dispatch={dispatch}/>
      <TodoForm state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
