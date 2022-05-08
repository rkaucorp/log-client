import * as React from "react";
import UpdatePost from "./UpdatePost";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ open, setOpen, post }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Post</DialogTitle>
        <DialogContent style={{ width: "500px" }}>
          <DialogContentText id="alert-dialog-description">
            <UpdatePost setOpen={setOpen} post={post} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
