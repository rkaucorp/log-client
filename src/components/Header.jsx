import * as React from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";

export default function Header({ handleLog, resetForm }) {
  return (
    <Stack direction="row" spacing={2} style={{ marginBottom: "25px" }}>
      <Button variant="outlined" startIcon={<SaveIcon />} onClick={handleLog}>
        Save
      </Button>
      <Button
        variant="outlined"
        endIcon={<CloseIcon />}
        style={{ border: "1px solid black", color: "black" }}
        onClick={resetForm}
      >
        Cancel
      </Button>
    </Stack>
  );
}
