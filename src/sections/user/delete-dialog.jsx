import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


export default function DeleteDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    console.log('open');
    setOpen(true);
  };
  const handleClose = () => {
    console.log('handleClose');
    setOpen(false);
  };
  const handleCloseDelete = () => {
    console.log('handleCloseDelete');
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="text"
        size="small"
        color="error"
        onClick={handleClickOpen}
       startIcon={<DeleteIcon sx={{ mr: 2 }} />}
      >
        删除
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">删除</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            确认删除该用户吗？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleCloseDelete}>
            确认
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}