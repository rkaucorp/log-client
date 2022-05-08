import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Header from "./Header";
import InputField from "./InputField";
import Modal from "./Modal";
import { store } from "../store/store";
import useLog from "../store/context";

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

function AddPost({ setPostModalOpen }) {
  const {
    state: { userName },
  } = useContext(store);
  const { createPost } = useLog();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    logName: null,
    address: null,
    description: null,
    latitude: null,
    longitude: null,
  });

  const { logName, address, description, latitude, longitude } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleLog = async () => {
    const data = {
      ...values,
      userName,
      createdAt: new Date().toISOString(),
    };
    if (await createPost(data)) {
      setPostModalOpen(false);
    }
  };

  const resetForm = () => {
    setValues({
      logName: null,
      address: null,
      description: null,
      latitude: null,
      longitude: null,
    });
    setPostModalOpen(false);
  };

  const handleModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <FormLayout>
      {!userName && (
        <Button variant="contained" color="success" onClick={handleModal}>
          Add User Name
        </Button>
      )}
      {open && <Modal open={open} setOpen={setOpen} />}
      {userName && (
        <FormContainer>
          <Header handleLog={handleLog} resetForm={resetForm} />
          <hr />
          <InputField
            fullWidth
            id="logName"
            name="logName"
            label="Name"
            value={logName}
            handleChange={handleChange}
            style={{ marginTop: "10px" }}
          />
          <InputField
            fullWidth
            id="address"
            name="address"
            label="Address"
            value={address}
            handleChange={handleChange}
          />
          <InputField
            fullWidth
            id="description"
            name="description"
            label="Description"
            value={description}
            handleChange={handleChange}
          />
          <InputField
            fullWidth
            id="latitude"
            name="latitude"
            label="Latitude"
            value={latitude}
            handleChange={handleChange}
          />
          <InputField
            fullWidth
            id="longitude"
            name="longitude"
            label="Longitude"
            value={longitude}
            handleChange={handleChange}
          />
        </FormContainer>
      )}
    </FormLayout>
  );
}

export default AddPost;
