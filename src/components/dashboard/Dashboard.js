import React from 'react';
import {Typography} from '@material-ui/core';
import { Posts } from '../posts';


const Dashboard = ({posts}) => {
    return ( 
        <>
            <Typography variant='h5' component='h3'>Dashboard</Typography>
            <Posts posts={posts}/>
        </>
        );
}
 
export default Dashboard;