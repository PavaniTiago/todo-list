import React from 'react'
import { TextField } from '@mui/material'
import  AddIcon  from '@mui/icons-material/Add';
import  Fab  from '@mui/material/Fab';
import Container from '@mui/material/Container';
import List from './List';
import { useState } from 'react';



export default function Form() {
  
  const [todos, setTodo] = useState([])
  const [item, setItem] = useState('')

  const addItem = () =>{
    setTodo([...todos, item])
    setItem('')
  }


  return (
    <div> 
      <Container maxWidth="sm">
        <h1>Todo-List</h1>
      <TextField value={item} sx={{ width: '85%'}} placeholder='Coloque sua lista' variant="outlined" id='content' onChange = {e => setItem(e.target.value)} />
        <Fab sx={{ mx: '7px' , mb: '3rem'}} color="primary" aria-label="add" id='add' onClick={addItem}>
            <AddIcon />
        </Fab>
        {todos.map((todo, index) => (
          <List item={todo} key={index}/>
        ))}
      </Container>    
    </div>
  )
}
