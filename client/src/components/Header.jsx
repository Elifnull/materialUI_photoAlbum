import React from "react";
import {PhotoCamera} from "@material-ui/icons";
import {Typography, AppBar, Card, CardContent,CardActions,CssBaseline,Grid, Toolbar, Container, Button, CardMedia} from '@material-ui/core';
import useStyles from "./photoStyle";
import {Link, useNavigate } from "react-router-dom";

const Header = (props)=>{
const photoStyle = useStyles();

    return(
            <AppBar position="relative">
            <Toolbar>
            <Link to='/'className={photoStyle.icon}>
                <PhotoCamera/>
            </Link>
            <Typography variant="h6">Photo Album</Typography>
                
            </Toolbar>
            </AppBar>
    );
}

export default Header;
