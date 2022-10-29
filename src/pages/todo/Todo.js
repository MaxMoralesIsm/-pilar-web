import React, { useEffect } from "react";
import { Grid, Paper, Box } from "@mui/material";


const Todo = () => {
  return (
    <Grid container spacing={3}>
      <Grid item md={12} xs={12}>
        <Paper sx={{ p: 5 }}>
          <Box>Todo</Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Todo;
