import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6,0,6),
    },
    button:{
        marginTop: theme.spacing(4),
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    ContainerGrid: {
        padding: theme.spacing(4),
    },
    Card: {
        display: "flex",
        height: "100%",
        width: '30vh',
        flexDirection: "column",
    },
    Photo: {
        paddingTop: "56.2%" //This is about 16:9 aspect ratio
    },
    Content: {
        flexGrow: 1,

    },
}))

export default useStyles;