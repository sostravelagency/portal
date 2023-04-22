import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import get_list_class from '@/app/api/get_list_class';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddStudent() {
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName]= React.useState("")
  const [lastName, setLastName]= React.useState("")
  const [middleName, setMiddleName]= React.useState("")
  const [dob, setDob]= React.useState("")
  const [listClass, setListClass]= React.useState([])
  React.useEffect(()=> {
    (async ()=> {
        const result= await get_list_class()
        return setListClass(result)
    })()
  }, [])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add student
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add student"}</DialogTitle>
        <DialogContent>
            <TextField style={{margin: "12px 0", width: 500}} label={"First name"} value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
            <TextField style={{margin: "12px 0", width: 500}} label={"Middle name"} value={middleName} onChange={(e)=> setFirstName(e.target.value)} />
            <TextField style={{margin: "12px 0", width: 500}} label={"Last name"} value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
            <TextField style={{margin: "12px 0", width: 500}} label={"Phone"} value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}