
import { useEffect, useState } from "react";
import { getData } from '../services/data';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function MyGrid() {
    const [data, setData] = useState([]);

    useEffect(async () => {
        setData(await getData())
    }, []);

    return <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        
                        <TableCell align="">Actor's Id</TableCell>
                        <TableCell align="">Actor's First_Name</TableCell>
                        <TableCell align="">Actor's Last_Name</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((actor => (
                        <TableRow key={actor.id}>
                            
                            <TableCell component="th" scope="actor">{actor.id}</TableCell>
                            <TableCell component="th" scope="actor">{actor.first_name}</TableCell>
                            <TableCell >{actor.last_name}</TableCell>

                        </TableRow>
                    )))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}

export default MyGrid;


