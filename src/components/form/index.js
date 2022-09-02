import { Button, Grid, styled, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import TodoList from "../Todo";

const Todo = () => {
  const [todo, setTodo] = useState({ id: "", task: "", isCompleted: false });
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setTodo({
      ...todo,
      task: e.target.value,
    });
  };

  useEffect(() => {
    if (edit) {
      setTodo({ ...todo, task: edit.task });
    } else {
      setTodo({ ...todo, task: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setTodo, edit]);

  const handleSave = () => {
    if (!edit) {
      setList([...list, { id: v4(), task: todo.task, isCompleted: false }]);
      setTodo({ ...todo, task: "" });
    } else {
      handleUpdate(todo.task, edit.id, edit.isCompleted);
    }
  };

  const handleDelete = (id) => {
    const res = list?.filter((item) => item.id !== id);
    return setList(res);
  };

  const handleEdit = (item) => {
    const result = list?.find((x) => item.id === x.id);
    setEdit(result);
  };

  const handleUpdate = (task, id, isCompleted) => {
    const updatedItem = list.map((i) => {
      if (i.id === id) {
        return { task, id, isCompleted };
      }
      return i;
    });
    setList(updatedItem);
    setEdit("");
  };

  const handleComplete = (item) => {
    setList(
      list.map((x) => {
        if (x.id === item.id) {
          return { ...x, isCompleted: !x.isCompleted };
        }
        return x;
      })
    );
  };

  return (
    <>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          xs={12}
          sm={12}
          display="flex"
          justifyContent="center"
          mt={3}
        >
          <TextField
            name="todo"
            variant="outlined"
            value={todo?.task}
            onChange={handleChange}
            placeholder="Add new task"
          />
        </Grid>
        <Grid item xs={12} mt={1} display="flex" justifyContent="center">
          <StyledButtonGrid>
            <StyledSaveButton
              disabled={!todo.task && list}
              onClick={handleSave}
            >
              Add
            </StyledSaveButton>
          </StyledButtonGrid>
          <StyledButtonGrid>
            <StyledClearButton
              onClick={() => {
                setList([]);
                setTodo({ id: "", task: "", isCompleted: false });
              }}
            >
              Clear
            </StyledClearButton>
          </StyledButtonGrid>
        </Grid>
      </Grid>
      <TodoList
        list={list}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleComplete={handleComplete}
        setEdit={setEdit}
      />
    </>
  );
};
export default Todo;

const StyledButtonGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  marginRight: "20px",
});

const StyledSaveButton = styled(Button)({
  background: "#003865",
  borderRadius: "21px",
  padding: "10px 15px",
  color: "#DDDDDD",
  width: "100px",
  height: "35px",
  fontWeight: "400",
  "&:disabled": {
    background: "transparent",
    border: "1px solid #003865",
    color: "#A2B5BB",
  },
  "&:focus,&:hover": {
    background: "#003865",
  },
});
const StyledClearButton = styled(Button)({
  background: "#003865",
  borderRadius: "21px",
  padding: "10px 15px",
  color: "#E2DCC8",
  width: "100px",
  height: "35px",
  fontWeight: "400",
  "&:focus,&:hover": {
    background: "#003865",
  },
});
