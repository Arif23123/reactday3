import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Veiwdata = () => {
    var [user,setUser] = useState([])
    useEffect(()=>{
        //axios.get("https://jsonplaceholder.typicode.com/users")
        axios.get("https://api.github.com/")
        .then((res)=>{
            console.log(res.data)
            setUser(res.data)
            
        })
        .catch(error=>console.log(error))
    })
     
  return (
    <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {user.map((val,i)=>{
                    return(
                        <TableRow>
                            <TableCell>{val.name}</TableCell>
                           {/*<TableCell>{val,username}</TableCell>*/}
                           <TableCell> <img src={val.avatar_url} alt='image'/></TableCell>
                            <TableCell>{val.email}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </div>
  )
}

export default Veiwdata