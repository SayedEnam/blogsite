import React, { useState } from 'react';
import {AppBar, Toolbar, Typography, Container, Link} from '@material-ui/core';
import Register_links from './Register_links';
import Login_links from './Login_links';
import { Link as LinkRouter} from 'react-router-dom';





const Header = () => {

    const [auth, setAuth] = useState(false)
    return (
            <AppBar position='static'>
                <Container>
                <Toolbar>
                    <Link to='/' variant="h6" color="inherit" component={LinkRouter} underline='none'>BlogApp</Link>
                    {auth ? <Login_links/> : <Register_links/>}
         
                </Toolbar>
                </Container>
            </AppBar>
        );
};
 
export default Header;