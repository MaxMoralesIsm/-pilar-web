import React, { useEffect } from "react";
import { Grid, Paper, Box, Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TodoImg from "../../assets/images/todo.jpg";
import FetchlistImg from "../../assets/images/fetchlist.jpg";

import Typography from "@mui/material/Typography";
import { color } from "@mui/system";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={3}>
      <Grid item md={12} xs={12}>
        <Paper sx={{ p: 2 }}>
          <Box>Dashboard</Box>
        </Paper>
      </Grid>
      <Grid item md={6} xs={12}>
        <Paper sx={{ p: 2 }}>
          <img src={TodoImg} height="240" width="520" />
          <Avatar sx={{ width: 50, height: 50,bgcolor:"#ffe692",color:"black" }}>T</Avatar>
          <Typography gutterBottom variant="h5" component="div">
           TODO
          </Typography>
          <Typography variant="body2" color="text.secondary">
          El boton de abajo navegara hacia Todo
        </Typography>
        <br></br>
          <Button size="small" onClick={() => navigate("/todo")}>
            Navegar 
          </Button>
        </Paper>
      </Grid>
      <Grid item md={6} xs={12}>
        <Paper sx={{ p: 2 }}>
          <img src={FetchlistImg} height="240" width="520" />
          <Avatar sx={{ width: 50, height: 50,bgcolor:"#0176bc" ,color:"black"  }}>F</Avatar>
          <Typography gutterBottom variant="h5" component="div">
            FETCHLIST
          </Typography>
          <Typography variant="body2" color="text.secondary">
          El boton de abajo navegara hacia Fetch List
        </Typography>
          <br></br>
          <Button size="small" onClick={() => navigate("/fetch-list")}>
            Navegar 
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Dashboard;
