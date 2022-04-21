import React,{useEffect, useState} from "react";
import {Typography, Card, CardContent,CardActions,CssBaseline,Grid, Container, Button, CardMedia} from '@material-ui/core';
import useStyles from "./singleStyle";
import Header from "./Header";
import axios from "axios";
import {Link, useNavigate, useParams } from "react-router-dom";


const ViewPhoto = () => {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [comment, setComment] = useState('');
    const photoStyle = useStyles();
    const { id } = useParams();
    const navigate = useNavigate();

    const deleteHandlier = (idbelow) => {
        axios.delete(`http://localhost:8000/api/photos/${idbelow}`)
            .then( response => {
                console.log(response)
                navigate('/')
            })
            .catch(err => console.log(err))
    };

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/photos/${id}`)
            .then(success => {
                console.log(success.data)
                setName(success.data.name);
                setPhoto(success.data.picture);
                setComment(success.data.comment);
            })
            .then(err => console.log(err));
    },[id])
    return(
        <>
            <CssBaseline />
            <Header/>
            <Container maxWidth="lg" className={photoStyle.ContainerGrid}>
                <Grid container spacing={6}>
                    <Grid item>
                        <Card className={photoStyle.Card}>
                            <CardMedia className={photoStyle.Photo}
                                image={photo}
                                title={name}
                            />
                            <CardContent className={photoStyle.Content} >
                                <Typography variant="h5" gutterBottom>
                                    {""}
                                </Typography>
                                <Typography>
                                    {comment}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary"onClick={()=>navigate(`/edit/${id}`)}>Edit</Button>
                                <Button size="small" color="warning" onClick={()=>deleteHandlier(id)}>Delete</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ViewPhoto;