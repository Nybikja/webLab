import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton } from '@material-ui/core';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '30px',
        height: '13vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    iconInst: {
        color:'#fff',
    },
    iconFacebook: {
        color:'#fff',
    },
    iconTwitter: {
        marginRight:'27rem',
        color:'#fff',
    },
})); 

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar} elevation={0}>
                <Container>
                    <Toolbar>
                        <h1 className={classes.appbarTitle}>
                            Rozetka
                        </h1>
                        <IconButton>
                            <InstagramIcon className={classes.iconInst} />
                        </IconButton>
                        <IconButton>
                            <FacebookIcon className={classes.iconFacebook} />
                        </IconButton>
                        <IconButton >
                            <TwitterIcon className={classes.iconTwitter} />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
