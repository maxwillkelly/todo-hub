import React from "react";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import { TodoItem } from "../TodoItem";

// we extend DialogProps so that we can change and access the normal dialog properties when calling this component
interface Props extends DialogProps {
  todoItem: TodoItem;
  onRemove: (removeTodoItem: TodoItem) => void;
  onCloseRequest: () => void;
}

// Dialog wrapper for creating a to do
const RemoveTodoItemDialog = ({
  todoItem,
  onRemove,
  onCloseRequest,
  open,
  ...other
}: Props) => {
  return (
    <Dialog open={open} {...other}>
      <DialogTitle>Are you sure you want to remove this todo?</DialogTitle>
      <DialogContent>This action cannot be undone.</DialogContent>
      <DialogActions>
        <Button onClick={() => onCloseRequest()}>Close</Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onCloseRequest();
            onRemove(todoItem);
          }}
        >
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RemoveTodoItemDialog;
