import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count,setCount] = useState(0)

    const incCount = ()=>{
       setCount(count+1)
    }
    const decCount= ()=>{
        setCount(count-1)
    }
  return (
    <div>
        <Typography variant='h4'>count: {count}</Typography>
        <Button variant='contained'color='success'onclick={incCount}>+</Button>
        <Button variant='contained'color='error'onclick={decCount}>-</Button>
    </div>
  )
  }

export default Counter