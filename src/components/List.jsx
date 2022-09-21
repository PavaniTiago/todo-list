import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import Fab  from '@mui/material/Fab';
import { TextField } from '@mui/material';



export default function List({ item }){

  return(
    <div>
      <TextField id="outlined-read-only-input" value={item} InputProps={{readOnly: true}} sx={{ width: '85%',  mb: '3rem'}} />
      <Fab color='primary' sx={{mx: '10px'}}>
        <CheckIcon />
        </Fab>
    </div>
  )
}