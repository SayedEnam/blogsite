import React from 'react';
import { Paper } from '@material-ui/core';
import Postsummery from './Postsummery';

const Posts = ({ posts }) => {
    return (
        <>
            {posts.map(post => ( 
            <Paper elevation={4} key={post.id}>
                <Postsummery post={post} />
            </Paper>


            ))}
        </>
    );
            }
 
export default Posts;


