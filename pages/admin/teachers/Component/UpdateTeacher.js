import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import update_teacher from "@/app/api/admin/update_teacher";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdateTeacher(props) {
  const [open, setOpen] = React.useState(false);
  const [teacherId, setTeacherId]= React.useState(props?.id)
  const [firstName, setFirstName] = React.useState(props?.first_name);
  const [middleName, setMiddleName] = React.useState(props?.middle_name);
  const [lastName, setLastName] = React.useState(props?.last_name);
  const [dob, setDob] = React.useState(props?.dob);
  const [phone, setPhone] = React.useState(props?.phone);
  const [classId, setClassId] = React.useState(props?.class_id);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Update teacher information?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" style={{padding: 10}}>
            <TextField
              style={{ width: 400, height: 50 }}
              label={"First name"}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <div></div>
            <br />
            <div></div>
            <TextField
              style={{ width: 400, height: 50 }}
              label={"Middle name"}
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
            <div></div>
            <br />
            <div></div>
            <TextField
              style={{ width: 400, height: 50 }}
              label={"Last name"}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <div></div>
            <br />
            <div></div>
            <TextField
              style={{ width: 400, height: 50 }}
              label={"DOB"}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <div></div>
            <br />
            <div></div>
            <TextField
              style={{ width: 400, height: 50 }}
              label={"Phone"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div></div>
            <br />
            <div></div>
            <TextField
              style={{ width: 400, height: 50 }}
              label={"First name"}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <div></div>
            <br />
            <div></div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={async ()=> {
            try {
              const result= await update_teacher({firstName, lastName, middleName, phone, dob, teacher_id: teacherId})
              if(result?.update=== true) {
                swal("Notice", "Updated teacher", "success")
                .then(()=> props?.setChange(prev=> !prev))
              }
              else {
                  swal("Notice", "Error unknown", "error")
                }
              handleClose()
            }
            catch(error) {
              swal("Notice", "Error server", "error")

            }
          }}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
