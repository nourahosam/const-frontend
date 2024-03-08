import { Alert, Snackbar } from "@mui/material"
import { useState } from "react";

const AlertSnackbar = (props) => {
    const {message, severity, open, setOpen } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    
    return (<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>)
}

export default AlertSnackbar;