import React, { useEffect } from 'react';
import './Home.css'
import { Grid, Paper, Typography } from '@mui/material';
import TopWidget from './GridWidgets/TopWidget';
import CenterWidget from './GridWidgets/CenterWidget';
import { useDispatch, useSelector } from 'react-redux';
import { setSession } from '../../redux/reducers/userSessionSlice';

const Home = () => {
    const dispatch = useDispatch();
    const gridStyle = {
        borderBottom: '1px solid lightgray', borderLeft: '1px solid lightgray'
    }

    return (
        <Grid sm={12} xs={10} md={10} lg={10} item>
            <Grid style={gridStyle} container spacing={2}>
                <TopWidget title='Contacts' />
                <CenterWidget />
            </Grid>
        </Grid>
    );
};

export default Home;
