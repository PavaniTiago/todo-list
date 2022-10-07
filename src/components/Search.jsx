import React from 'react'
import { useState } from 'react';
import { TextField } from '@mui/material'
import  AddIcon  from '@mui/icons-material/Add';
import  Fab  from '@mui/material/Fab';


export default function Search({addItem}) {
    
    const [id, setId] = useState(0);
    const [text, setText] = useState('');
    
    const todoCreate = (text) => {
    const todoObj = { text: text, id: id };
    setId(id + 1);
    addItem(todoObj);
    document.getElementById("outlined-basic").value = null;
    setText('');
  };

  return (
    <div>
        <TextField sx={{ width: '85%'}} placeholder='Coloque sua lista' variant="outlined" id="outlined-basic" onChange={(e) => setText(e.target.value)} />
        <Fab sx={{ mx: '10px' , mb: '3rem'}} color="primary" aria-label="add" id='add' onClick={() => todoCreate(text)}>
            <AddIcon />
        </Fab>
    </div>
  )
}
