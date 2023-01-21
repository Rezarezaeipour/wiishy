import * as React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import IosShareIcon from "@mui/icons-material/IosShare";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from "@mui/icons-material/Delete";

export default function ShareButton() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        sx={{ mt: -1 }}
        onClick={handleClickOpen}
      >
        Share
      </Button>

      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Want to share it?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Copy this link:
            Https://jbidsu.com/wwu/hwuhquqwuiwq
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>       
        </DialogActions>
      </Dialog>
    </div>
  );
}
