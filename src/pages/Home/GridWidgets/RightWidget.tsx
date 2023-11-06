import React from 'react';
import '../Home.css'
import { Grid, Paper, Typography } from '@mui/material';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';
import MyPieChart from '../../../components/atoms/MyPieChart';
import ProjectCards from '../../../components/atoms/ProjectCards';
import TodayCard from '../../../components/atoms/TodayCard';

const RightWidget = () => {
    return (
        <Grid style={{margin:0}} xs={12} md={3} sm={3} lg={3}>
            <div className='Right-top-widget'>
                <h5>SELECTED</h5>
                <h2>Design Team</h2>
            </div>
            <div className='Right-center-widget'>
                <h5>Time Log</h5>
                <MoreVertOutlined/>
            </div>
            <MyPieChart percentage={85} colour="#0e62fd" />
            <div className='Right-center-widget'>
                <h5>Projects</h5>
            </div>
            <ProjectCards/>
            <TodayCard/>
        </Grid>
    );
};

export default RightWidget;