import React from "react";
import {PhotoCamera} from "@material-ui/icons";
import {Typography, AppBar, Card, CardContent,CardActions,CssBaseline,Grid, Toolbar, Container, Button, CardMedia} from '@material-ui/core';
import useStyles from "./photoStyle";

const PhotoPage = (props) => {
    const photoStyle = useStyles(); //Like react Modules but in MaterialUi
    const test = "https://source.unsplash.com/random";
    const title = "this is a test";
    const cards = [1,2,3,4,5,6,7,8,9,10];
    return(
        <>
        <CssBaseline /> {/* this adds basic Css styling to the whole app*/}
            <AppBar position="relative">
            <Toolbar>
                <PhotoCamera className={photoStyle.icon}/>
                <Typography variant="h6">Photo Album</Typography>
            </Toolbar>
            </AppBar>
            <body>
            <div className={photoStyle.container}>
                <Container maxWidth='xs'>
                <Typography gutterBottom variant="h2" color="textPrimary" align="center" >Photos</Typography>
                <Typography paragraph variant="h6" color="textSecondary" align="center" >Hi this is my test for my Photo album. is it wrapping well? or is it not wrapping well</Typography>
                <div className={photoStyle.button}>
                <Grid container spacing={2} justify='center'>
                    <Grid item>
                        <Button variant="outlined" color="primary">
                            View Photos
                        </Button>
                    </Grid>
                    <Grid item>
                    <Button variant="outlined" color="secondary">
                            Add Photo
                        </Button>
                    </Grid>
                </Grid>
                </div>
                </Container>
            </div>
            </body>
            <Container maxWidth="md" className={photoStyle.ContainerGrid}>
                <Grid container spacing={4}>
                    {cards.map(()=>(
                    <Grid item>
                        <Card className={photoStyle.Card}>
                            <CardMedia className={photoStyle.Photo}
                                image={test}
                                title={title}
                            />
                            <CardContent className={photoStyle.Content} >
                                <Typography variant="h5" gutterBottom>
                                    Heading Variable
                                </Typography>
                                <Typography>
                                    Media card content data
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">Edit</Button>
                                <Button size="small" color="error" >Delete</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default PhotoPage;