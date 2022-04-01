import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function EditActor({ open,id,first_name, last_name, changeHandler, submitHandler,handleClose}) {
    

    return (
        <div>
            
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Actor</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Actor ID"
                        id="actor_id"
                        type="text"
                        fullWidth
                        value={id}
                        onChange={changeHandler}
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="first_name"
                        label="First Name"
                        type="text"
                        fullWidth
                        value={first_name}
                        onChange={changeHandler}
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="last_name"
                        label="Last Name"
                        type="text"
                        fullWidth
                        value={last_name}
                        onChange={changeHandler}
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


