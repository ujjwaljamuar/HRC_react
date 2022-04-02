import { useEffect, useState } from "react";
import { getData, addActor, updateActor, deleteActor } from '../services/data';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import AddActor from "./AddActor";
import EditActor from "./EditActor";
import { Button, Checkbox } from "@mui/material";



function MyGrid() {

    const [data, setData] = useState([]);

    const [actor, setActor] = useState({ id: '', first_name: '', last_name: '' });

    const { first_name, last_name, id } = actor;
    const [open, setOpen] = useState(false);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setActor({ ...actor, [name]: value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        let response = await addActor(actor);
        if (response) {
            setActor({ first_name: '', last_name: '' });
        }
    }

    const handleClose = async (update) => {
        if (update) {
            let response = await updateActor(actor);
        }
        setOpen(false);

    };

    const editHandler = () => {
        setOpen(true);
    }
    const deleteHandler = async () => {
        let response = await deleteActor(actor.id);
    }

    const checkHandler = (e, id) => {
        if (e.target.checked) {
            let editActor = data.filter(actor => actor.id == id)[0];
            setActor(editActor);
        }
    }

    useEffect(async function () {
        setData(await getData())
    }, []);

    return <>
        <EditActor id={id} first_name={first_name} last_name={last_name} open={open} handleClose={handleClose} changeHandler={changeHandler} />
        
        <AddActor
            first_name={first_name}
            last_name={last_name}
            changeHandler={changeHandler}
            submitHandler={submitHandler}
        />
        <br /><hr />

        <Button variant="contained" onClick={editHandler} >Edit</Button>
        <Button variant="outlined" onClick={deleteHandler}>Delete</Button>
        <br />
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell align="left">Select</TableCell>
                        <TableCell align="left">Actor's Id</TableCell>
                        <TableCell align="left">Actor's First_Name</TableCell>
                        <TableCell align="left">Actor's Last_Name</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((actor => (
                        <TableRow key={actor.id}>

                            <TableCell component="th" scope="actor">
                                <Checkbox onClick={(e) => checkHandler(e, actor.id)} />
                            </TableCell>

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


