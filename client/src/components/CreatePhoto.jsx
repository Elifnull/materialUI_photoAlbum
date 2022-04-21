import React,{useEffect, useState} from "react";
import {Typography, Box, CardContent,CardActions,CssBaseline,Grid, Container, Button, CardMedia, TextField, FormLabel} from '@material-ui/core';
import useStyles from "./photoStyle";
import Header from "./Header";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const CreatePhoto = () =>{
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState([]);

    const navigate = useNavigate();
    const submitHandler = (element) => {
        element.preventDefault();
        axios.post('http://localhost:8000/api/photos',{
            name,
            picture,
            comment
        })
            .then(response => {
                console.log(response);
                navigate('/')
            })
            .catch( error => {
                console.log(error.response.data.errors);
                setError(error.response.data.errors)
            });
    }

    return(
        <>
        <CssBaseline /> {/* this adds basic Css styling to the whole app*/}
            <Header/>
            <Box sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Box component="form" sx={{ mt: 3}} onSubmit={submitHandler}>
                    <Grid container spacing={2}>
                        <Grid item xs={10}>
                            <TextField fullWidth 
                            variant="outlined"
                            name="name"
                            label="Name"
                            type="text"
                            value={name}
                            autoFocus
                            onChange={(e)=>setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField fullWidth 
                            variant="outlined"
                            name="Picture"
                            label="Picture Link"
                            type="text"
                            value={picture}
                            autoFocus
                            onChange={(e)=>setPicture(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField fullWidth 
                            variant="outlined"
                            name="comment"
                            label="Comment"
                            type="textarea"
                            value={comment}
                            autoFocus
                            onChange={(e)=>setComment(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <FormLabel error sx={{mb: 3}}>
                                {error.name? <Typography variant="h6">Name is required field</Typography>:null}
                                {error.picture? <Typography variant="h6">a URL for the picture is required</Typography>:null}
                            </FormLabel>
                        </Grid>
                    </Grid>
                    <Button 
                    color="primary"
                    type="submit" 
                    variant="contained" 
                    sx={{mt:5, mb: 3}}>Add Photo</Button>
                </Box>
            </Box>
        </>
    )
}

export default CreatePhoto;