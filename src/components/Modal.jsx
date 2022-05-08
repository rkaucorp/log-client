import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { store } from "../store/store";
import useLog from "../store/context";

export default function FormDialog({ open, setOpen }) {
  const {
    state: { userName },
  } = React.useContext(store);
  const [user, setUser] = React.useState("");
  const { setUserName } = useLog();
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const handleUserName = () => {
    setUserName(user);
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Your Name</DialogTitle>
        <DialogContent style={{ width: "500px" }}>
          <DialogContentText id="alert-dialog-description">
            <TextField
              fullWidth
              autoFocus
              id="userName"
              name="userName"
              label="User Name"
              value={userName}
              onChange={handleChange}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUserName}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
