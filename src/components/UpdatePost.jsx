import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import Header from "./Header";
import InputField from "./InputField";
import Log from "./Log";
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

function UpdatePost({ setOpen, post }) {
  const {
    state: { userName },
  } = useContext(store);
  const { updatePostInfo } = useLog();
  const [values, setValues] = useState({
    postID: post?.SK,
    logName: post?.logName,
    address: post?.address,
    description: post?.description,
    latitude: post?.latitude,
    longitude: post?.longitude,
  });

  const { logName, address, description, latitude, longitude, postID } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleLog = async () => {
    const data = {
      ...values,
      userName,
    };
    if (await updatePostInfo(data)) {
      setOpen(false);
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
    setOpen(false);
  };

  return (
    <FormLayout>
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
          <Log postID={postID} />
        </FormContainer>
      )}
    </FormLayout>
  );
}

export default UpdatePost;
