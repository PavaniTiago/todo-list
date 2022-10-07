import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import Fab  from '@mui/material/Fab';
import { TextField } from '@mui/material';



export default function List({ removeItem, todo}){

  return(
    <>
      <TextField id="outlined-read-only-input" value={todo.text} InputProps={{readOnly: true}} sx={{ width: '85%',  mb: '2rem'}} />
      <Fab color='primary' sx={{mx: '10px'}}  onClick={() => removeItem(todo.id)}>
        <CheckIcon />
      </Fab>
    </>
  )
}