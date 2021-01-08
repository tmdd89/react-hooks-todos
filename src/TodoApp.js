import React from "react";
import useTodoState from "./hooks/useTodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import { TodosProvider } from "./context/todos.context";

function TodoApp() {
  const initialTodos = [{ id: 1, task: "make dinner", completed: false }];

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
