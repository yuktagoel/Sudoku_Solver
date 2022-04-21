import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper
        {...props}
        style={{ backgroundColor: "#c70039", color: "#f4f6ff" }}
      />
    </Draggable>
  );
}

export default function DraggableDialog(props) {
  const handleClose = () => {
    window.location.reload();
    props.pop(false);
  };

  return (
    <div>
      <Dialog
        open={props.show}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        className="popup"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Invalid Input!
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: "#e3d0b9" }}>
            Please Enter a Valid Input.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            style={{ color: "#f4f6ff" }}
          >
            Retry
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
