import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActionArea from "@mui/material/CardActionArea";

import { TodoItem } from "./TodoItem";

interface Props {
  todoItem: TodoItem;
  toggleTodoAsCompleted: (todoItem: TodoItem) => void;
}

// The actual todo card that appears on the screen, can be expanded with buttons for different actions and such
const TodoItemCard = ({ todoItem, toggleTodoAsCompleted }: Props) => {
  const { title, description, completed } = todoItem;

  return (
    <CardActionArea onClick={() => toggleTodoAsCompleted(todoItem)}>
      <Card variant="outlined">
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
      </Card>
    </CardActionArea>
  );
};

export default TodoItemCard;
