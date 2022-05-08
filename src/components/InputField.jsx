import React from "react";
import TextField from "@mui/material/TextField";

export default function index({ value, handleChange, label, name }) {
  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        value={value ? value : ""}
        onChange={handleChange(name)}
        id={name}
        label={label}
        name={name}
        InputLabelProps={{
          shrink: true,
        }}
        autoFocus
      />
    </>
  );
}
