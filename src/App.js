import { Typography } from "@mui/material";
import React from "react";
import "./App.css";
import TodoForm from "./components/form";

function App() {
  return (
    <div className="App">
      <Typography
        variant="h4"
        style={{ color: "#003865", fontWeight: "700", marginTop: "32px" }}
      >
        To-do App!
      </Typography>
      <TodoForm />
    </div>
  );
}

export default App;
