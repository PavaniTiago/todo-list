import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Fab  from '@mui/material/Fab';
import { TextField } from '@mui/material';

function FinishedList({removeItem, todo}) {
  return (
    <div>
        <TextField id="outlined-read-only-input" value={todo.text} InputProps={{readOnly: true}} sx={{ width: '85%',  mb: '2rem'}} />
      <Fab color='primary' sx={{mx: '10px'}}  onClick={() => removeItem(todo.id)}>
        <DeleteIcon />
      </Fab>
    </div>
  )
}

export default FinishedList