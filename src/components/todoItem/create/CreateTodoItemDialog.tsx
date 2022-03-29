import React from "react";
import { useForm } from "react-hook-form";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import { TodoItem } from "../TodoItem";
import TodoItemForm from "../TodoItemForm";

// we extend DialogProps so that we can change and access the normal dialog properties when calling this component
interface Props extends DialogProps {
  onSave: (newTodoItem: TodoItem) => void;
  onCloseRequest: () => void;
}

// Dialog wrapper for creating a to do
const CreateTodoItemDialog = ({
  onSave,
  onCloseRequest,
  open,
  ...other
}: Props) => {
  // useForm is used to hold the state of the form and perform validation
  const { control, handleSubmit, reset } = useForm<TodoItem>();

  return (
    <>
      <Dialog
        open={open}
        {...other}
        TransitionProps={{
          onExiting: () => reset(),
        }}
      >
        <DialogTitle>Create a new todo item</DialogTitle>
        <DialogContent>
          <TodoItemForm control={control}></TodoItemForm>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => onCloseRequest()}>Close</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSave)}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateTodoItemDialog;
