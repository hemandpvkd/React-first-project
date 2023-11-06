import React from 'react';
import './Home.css'
import { Grid, Paper, Typography } from '@mui/material';
import TopWidget from './GridWidgets/TopWidget';
import CenterWidget from './GridWidgets/CenterWidget';
import LeftWidget from './GridWidgets/LeftWidget';

const Home = () => {
    const gridStyle = {
        borderBottom: '1px solid lightgray', borderLeft: '1px solid lightgray'
    }
    return (
        <Grid container spacing={2}>
             <LeftWidget/>
            <Grid sm={12} xs={10} md={10} lg={10} item>
                <Grid style={gridStyle} container spacing={2}>
                    <TopWidget />
                    <CenterWidget />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
