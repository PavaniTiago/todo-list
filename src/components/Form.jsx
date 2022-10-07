import React from 'react';
import './styles/style.css';
import Container from '@mui/material/Container';
import List from './List';
import { useState } from 'react';
import Search from './Search';



export default function Form() {
  
  const [todos, setTodo] = useState([])
  
  const addItem = (todo) =>{
    setTodo([...todos, todo])
  }

  const removeItem = (id) => {
    let tmpArray = todos.filter((todo) => todo.id !== id);
    setTodo(tmpArray)
  }

  return (
    <div className='content'> 
      <Container maxWidth='sm'>
        <h1>Todo-List</h1>
        <Search addItem={addItem}/>
        {todos.map((todo, index) => (
         <div key={todo.id}>
            <List todo={todo} key={index} removeItem={removeItem}/>
          </div>
        ))}
      </Container>    
    </div>
  )
}
