import React from 'react';
import './styles/style.css';
import Container from '@mui/material/Container';
import List from './List';
import { useState } from 'react';
import Search from './Search';
import FinishedList from './FinishedList';



export default function Form() {
  

  const [todos, setTodo] = useState([])
  
  const addItem = (todo) =>{
    setTodo([...todos, todo])
  }

  const finishItem = (todo) =>{
    todos.map((todo, index) =>(
      <div key={todo.id}>
        <FinishedList todo={todo} key={index} removeItem={removeItem}/>
      </div>
    ))
  }

  const removeItem = (id) => {
    let tmpArray = todos.filter((todo) => todo.id !== id);
    setTodo(tmpArray)
    console.log(tmpArray)
  }

  

  return (
    <div className='content'> 
      <Container maxWidth='sm'>
        <h1>Todo-List</h1>
        <Search addItem={addItem}/>
        <h2>Your lists:</h2>
        <div className='lists'>
          {todos.map((todo, index) => (
          <div key={todo.id}>
              <List todo={todo} key={index} removeItem={removeItem}/>
            </div>
          ))}
        </div>
      </Container>    
    </div>
  )
}