import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { TodoItem } from "./TodoItem";
import RemoveTodoItemDialog from "./remove/RemoveTodoItemDialog";
import EditTodoItemDialog from "./edit/EditTodoItemDialog";

interface Props {
  todoItem: TodoItem;
  editTodoItem: (todoItem: TodoItem) => void;
  toggleTodoAsCompleted: (todoItem: TodoItem) => void;
  removeTodoItem: (removeTodoItem: TodoItem) => void;
}

// The actual todo card that appears on the screen, can be expanded with buttons for different actions and such
const TodoItemCard = ({
  todoItem,
  editTodoItem,
  toggleTodoAsCompleted,
  removeTodoItem,
}: Props) => {
  const [editTodoDialogOpen, setEditTodoDialogOpen] = useState(false);
  const [removeTodoDialogOpen, setRemoveTodoDialogOpen] = useState(false);

  const { title, description, completed } = todoItem;

  return (
    <>
      <Card variant="outlined">
        <CardActionArea onClick={() => toggleTodoAsCompleted(todoItem)}>
          <CardHeader
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
        <CardActions>
          <EditIcon
            aria-label="edit"
            onClick={() => setEditTodoDialogOpen(true)}
          />
          <DeleteIcon
            aria-label="delete"
            onClick={() => setRemoveTodoDialogOpen(true)}
          />
        </CardActions>
      </Card>
      <EditTodoItemDialog
        todoItem={todoItem}
        open={editTodoDialogOpen}
        onCloseRequest={() => setEditTodoDialogOpen(false)}
        onSave={editTodoItem}
      />
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
