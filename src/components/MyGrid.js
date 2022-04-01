import { useEffect, useState } from "react";
import { addActor, getData } from '../services/data';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import AddActor from "./AddActor";



function MyGrid() {
    const [data, setData] = useState([]);

    const [actor, setActor] = useState({ first_name: '', last_name: '' });

    const { first_name, last_name } = actor;

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setActor({ ...actor, [name]: value });
    }

    const submitHandler = async (e) => {
        e.stopPropagation();
        let response = await addActor(actor);
        if (response) {
            setActor({ first_name: '', last_name: '' });
        }
    }

    useEffect(async function () {
        setData(await getData())
    }, []);

    return <>
        <AddActor
            first_name={first_name}
            last_name={last_name}
            changeHandler={changeHandler}
            submitHandler={submitHandler}
        />
        <br /><hr />

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


