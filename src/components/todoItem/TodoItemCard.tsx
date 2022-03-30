import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActionArea from "@mui/material/CardActionArea";
import DeleteIcon from "@mui/icons-material/Delete";

import { TodoItem } from "./TodoItem";
import RemoveTodoItemDialog from "./remove/RemoveTodoItemDialog";

interface Props {
  todoItem: TodoItem;
  toggleTodoAsCompleted: (todoItem: TodoItem) => void;
  removeTodoItem: (removeTodoItem: TodoItem) => void;
}

// The actual todo card that appears on the screen, can be expanded with buttons for different actions and such
const TodoItemCard = ({
  todoItem,
  toggleTodoAsCompleted,
  removeTodoItem,
}: Props) => {
  const [removeTodoDialogOpen, setRemoveTodoDialogOpen] = useState(false);

  const { title, description, completed } = todoItem;

  return (
    <>
      <Card variant="outlined">
        <CardActionArea onClick={() => toggleTodoAsCompleted(todoItem)}>
          <CardHeader
            action={
              <DeleteIcon
                aria-label="settings"
                onClick={() => setRemoveTodoDialogOpen(true)}
              />
            }
            title={title}
            subheader={description}
            titleTypographyProps={{
              sx: { textDecoration: completed && "line-through" },
            }}
            subheaderTypographyProps={{
              sx: { textDecoration: completed && "line-through" },
            }}
          ></CardHeader>
        </CardActionArea>
      </Card>
      <RemoveTodoItemDialog
        todoItem={todoItem}
        open={removeTodoDialogOpen}
        onCloseRequest={() => setRemoveTodoDialogOpen(false)}
        onRemove={removeTodoItem}
      />
    </>
  );
};

export default TodoItemCard;
