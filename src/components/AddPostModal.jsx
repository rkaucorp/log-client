import * as React from "react";
import AddPost from "./AddPost";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ postModalOpen, setPostModalOpen }) {
  const handleClose = () => {
    setPostModalOpen(false);
  };

  return (
    <div>
      <Dialog open={postModalOpen} onClose={handleClose}>
        <DialogTitle>Create Post</DialogTitle>
        <DialogContent style={{ width: "500px" }}>
          <DialogContentText id="alert-dialog-description">
            <AddPost setPostModalOpen={setPostModalOpen} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
