import React,{useEffect, useState} from "react";
import {Typography, Card, CardContent,CardActions,CssBaseline,Grid, Container, Button, CardMedia} from '@material-ui/core';
import useStyles from "./photoStyle";
import Header from "./Header";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";

const PhotoPage = (props) => {
    const [photoArray, setPhotoArray] = useState([]);
    const photoStyle = useStyles(); //Like react Modules but in MaterialUi
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/photos")
            .then(response =>{
            console.log(response.data)
            setPhotoArray(response.data);
            })
            .catch(error => console.log(error))
    },[])

    return(
        <>
        <CssBaseline /> {/* this adds basic Css styling to the whole app*/}
            <Header/>
            <main>
            <div className={photoStyle.container}>
                <Container maxWidth='sm'>
                <Typography gutterBottom variant="h2" color="textPrimary" align="center" >Photos</Typography>
                <Typography paragraph variant="h6" color="textSecondary" align="center" >Hi this is my test for my Photo album. is it wrapping well? or is it not wrapping well</Typography>
                <div className={photoStyle.button}>
                <Grid container spacing={2} justifyContent='center'>
                    <Grid item>
                    <Button onClick={()=>navigate('/create')} variant="outlined" color="secondary">
                            Add Photo
                        </Button>
                    </Grid>
                </Grid>
                </div>
                </Container>
            </div>
            </main>
            <Container maxWidth="lg" className={photoStyle.ContainerGrid}>
                <Grid container spacing={6}>
                    {photoArray?photoArray.map((value, index)=>(
                    <Grid item key={index}>
                        <Card className={photoStyle.Card}>
                            <CardMedia className={photoStyle.Photo}
                                image={value.picture}
                                title={value.name}
                            />
                            <CardContent className={photoStyle.Content} >
                                <Typography variant="h5" gutterBottom>
                                    {value.name}
                                </Typography>
                                <Typography>
                                    {value.comment}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary"onClick={()=>navigate(`/view/${value._id}`)}>View</Button>
                                <Button size="small" color="secondary" onClick={()=>navigate(`/edit/${value._id}`)}>Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    )):null}
                </Grid>
            </Container>
        </>
    )
}

export default PhotoPage;