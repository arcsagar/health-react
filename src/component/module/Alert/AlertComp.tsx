import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useRef } from "react";

const AlertComp = ({
  openStatus,
  setOpenStatus,
  msg
}: {
  openStatus: boolean;
  setOpenStatus: React.Dispatch<React.SetStateAction<boolean>>;
  msg: string
}) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenStatus(false);
  };

  return (
    <div>
      <Snackbar open={openStatus} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertComp;
