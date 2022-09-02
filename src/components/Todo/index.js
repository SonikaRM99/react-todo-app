import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import React from "react";

const TodoList = ({ list, handleDelete, handleEdit, handleComplete }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Stack mt={2}>
        <StyledTypography1>List of Todos: {list.length}</StyledTypography1>
        {list?.length > 0 ? (
          <StyledGrid item xs={12} sm={6} mt={2}>
            {list?.map((item, index) => (
              <Stack
                key={index}
                spacing={1}
                pl={1}
                pr={1}
                mb={1}
                display="flex"
                justifyContent="center"
              >
                <Stack direction="row">
                  <StyledTypography
                    style={
                      item.isCompleted
                        ? { textDecoration: "line-through" }
                        : { textDecoration: "none" }
                    }
                  >
                    {item.task}
                  </StyledTypography>
                  <Stack
                    direction="row"
                    spacing={0.5}
                    display="flex"
                    alignItems="center"
                  >
                    <IconButton onClick={() => handleComplete(item)}>
                      {item.isCompleted ? (
                        <StyledCheckBox />
                      ) : (
                        <StyledErrorIcon />
                      )}
                    </IconButton>
                    <IconButton onClick={() => handleEdit(item)}>
                      <StyledEditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(item.id)}>
                      <StyledDeleteIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </StyledGrid>
        ) : (
          <Box mt={2}>
            <StyledErrorTypography>
              No Todo's. Before you follow up the plan for the day, List down
              all Todo's!
            </StyledErrorTypography>
          </Box>
        )}
      </Stack>
    </div>
  );
};
export default TodoList;

const StyledTypography = styled(Typography)(({ theme }) => ({
  background: "#E2DCC8",
  padding: "10px 0",
  borderRadius: "4px",
  width: "650px",
  color: "#003865",
  fontWeight: "300",
  [theme.breakpoints.down("sm")]: {
    width: "200px",
  },
}));
const StyledTypography1 = styled(Typography)({
  borderRadius: "4px",
  color: "#003865",
  fontWeight: "500px",
});
const StyledErrorTypography = styled(Typography)({
  marginBottom: "8px",
  background: "#E2DCC8",
  padding: "10px",
  borderRadius: "4px",
  color: "#EB4747",
  margin: "0 10px 8px",
});
const StyledGrid = styled(Grid)(({ theme }) => ({
  width: "600px",
  background: "#0F3D3E",
  padding: "10px 0",
  borderRadius: "8px",
  [theme.breakpoints.down("sm")]: {
    width: "350px",
  },
}));

const StyledDeleteIcon = styled(DeleteIcon)({
  color: "#3FA796",
});

const StyledEditIcon = styled(EditIcon)({
  color: "#3FA796",
});

const StyledCheckBox = styled(CheckCircleIcon)({
  color: "#3FA796",
});
const StyledErrorIcon = styled(ErrorIcon)({
  color: "#E2DCC8",
});
