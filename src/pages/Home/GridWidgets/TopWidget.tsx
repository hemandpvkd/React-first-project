import React from 'react';
import '../Home.css'
import Header from '../../../components/atoms/Header';
import { Grid, Paper, Typography } from '@mui/material';

const TopWidget = ({title}:{title:string}) => {
    return (
            <Grid item xs={12}>
                <Header title={title}/>
            </Grid>
    );
};

export default TopWidget;
