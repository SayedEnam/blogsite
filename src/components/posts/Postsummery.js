import React from 'react';
import {Typography} from '@material-ui/core';

const Postsummery = ( { posts }) => {
    return  (
        <>
        <Typography variant='h5' component='h3'>
            {posts.title}
        </Typography>
        <Typography variant="body2">
            {posts.body}
        </Typography>
        </>
        );
};
 
export default Postsummery;