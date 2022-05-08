import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Modal from "./components/Modal";
import PostModal from "./components/AddPostModal";
import { store } from "./store/store";
import PostList from "./components/PostList";

const FormLayout = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));

const FormContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(3, 2),
  ...theme.mixins.toolbar,
  border: "1px solid #5FC0FF",
  width: "800px",
  marginTop: "10px",
}));

function App() {
  const {
    state: { userName },
  } = useContext(store);
  const [open, setOpen] = useState(false);
  const [postModalOpen, setPostModalOpen] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handlePostModal = (e) => {
    e.preventDefault();
    setPostModalOpen(true);
  };

  return (
    <FormLayout>
      {open && <Modal open={open} setOpen={setOpen} />}
      {postModalOpen && (
        <PostModal
          postModalOpen={postModalOpen}
          setPostModalOpen={setPostModalOpen}
        />
      )}

      <FormContainer>
        {!userName && (
          <Button variant="contained" color="success" onClick={handleModal}>
            Add User Name
          </Button>
        )}
        {userName && (
          <Button variant="contained" color="success" onClick={handlePostModal}>
            Add Post
          </Button>
        )}
        <PostList />
      </FormContainer>
    </FormLayout>
  );
}

export default App;
