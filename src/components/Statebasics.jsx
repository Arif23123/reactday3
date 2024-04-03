import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    //var fname= "arif"
    var [name,setName] = useState("arif")
    const changeName =()=>{
        console.log("Clicked")
    }
  return (
    <div>
        <Typography variant='h4'>Welcome {name}</Typography>
        <Button variant='contained' color='error' onClick={changeName}>change</Button>
    </div>
  )
}

export default Statebasics