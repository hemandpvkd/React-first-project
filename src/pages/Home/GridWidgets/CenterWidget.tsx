import React from 'react';
import '../Home.css'
import SearchActions from '../../../components/molecules/SearchActions';
import Cards from '../../../components/molecules/Cards';
import { Grid, Paper, Typography } from '@mui/material';
import RightWidget from './RightWidget';

const CenterWidget = () => {
    const gridStyle = {
        borderRight: '1px solid lightgray'
    }
    return (
        <Grid  container style={{ marginTop: 0 }} spacing={2}>
        <Grid sx={gridStyle} item xs={9}>
            <SearchActions />
            <Cards />
        </Grid>
        <RightWidget/>
    </Grid>
    );
};

export default CenterWidget;
