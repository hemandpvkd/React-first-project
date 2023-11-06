import React from 'react';
import '../Home.css'
import Header from '../../../components/atoms/Header';
import { Grid, Paper, Typography } from '@mui/material';

const TopWidget = () => {
    return (
            <Grid item xs={12}>
                <Header />
            </Grid>
    );
};

export default TopWidget;
