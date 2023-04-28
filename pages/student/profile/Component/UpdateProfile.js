import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdateProfile(props) {
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName]= React.useState(props?.first_name)
  const [middleName, setMiddleName]= React.useState(props?.middle_name)
  const [lastName, setLastName]= React.useState(props?.lastName)
  const [dob, setDob]= React.useState(props?.dob)
  const [phone, setPhone]= React.useState(props?.phone)
  React.useEffect(()=> {
    setFirstName(props?.first_name)
    setMiddleName(props?.middle_name)
    setLastName(props?.last_name)
    setDob(props?.dob)
    setPhone(props?.phone)
  }, [props])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color={"primary"} onClick={handleClickOpen}>
        Edit information
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Update information"}</DialogTitle>
        <DialogContent>
          <TextField value={firstName} onChange={(e)=> setFirstName(e.target.value)} style={{width: 500, height: 40, marginTop: 12}} />
          <div></div>
          <br />
          <div></div>
          <TextField value={middleName} onChange={(e)=> setMiddleName(e.target.value)} style={{width: 500, height: 40, marginTop: 12}} />
          <div></div>
          <br />
          <div></div>
          <TextField value={lastName} onChange={(e)=> setLastName(e.target.value)} style={{width: 500, height: 40, marginTop: 12}} />
          <div></div>
          <br />
          <div></div>
          <TextField value={dob} onChange={(e)=> setDob(e.target.value)} style={{width: 500, height: 40, marginTop: 12}} />
          <div></div>
          <br />
          <div></div>
          <TextField value={phone} onChange={(e)=> setPhone(e.target.value)} style={{width: 500, height: 40, marginTop: 12}} />
          <div></div>
          <br />
          <div></div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button variant={"contained"} onClick={async ()=> {

          }}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
