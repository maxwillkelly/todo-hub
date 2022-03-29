import React from "react";
import { Control, Controller } from "react-hook-form";

import TextField from "@mui/material/TextField";

import { TodoItem } from "./TodoItem";

interface Props {
  control: Control<TodoItem, unknown>;
}

// The todo form that appears inside the create modal, could be used for edit too perhaps?
const TodoItemForm = ({ control }: Props) => {
  return (
    <>
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            sx={{ mt: 1, mb: 2 }}
            fullWidth
            variant="outlined"
            label="Title"
            {...field}
            error={Boolean(error)}
            helperText={error && "A title is required"}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            fullWidth
            variant="outlined"
            label="Description"
            multiline
            maxRows={4}
            {...field}
            error={Boolean(error)}
            helperText={error && "A description is required"}
          />
        )}
      />
    </>
  );
};

export default TodoItemForm;
