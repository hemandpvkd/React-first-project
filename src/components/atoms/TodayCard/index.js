import React from 'react';
import './TodayCard.css'
import { Grid, Paper, Typography } from '@mui/material';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';
import MyPieChart from '../../../components/atoms/MyPieChart';
import ProjectCards from '../../../components/atoms/ProjectCards';
import TodaysData from '../../../mockData/todaysData';

const TodayCard = () => {
    return (
        <div className='Today-card-container'>
            <div className='Today-card'>
                <h5>Todays</h5>
            </div>
            {TodaysData.map((item, index) => (
                <div className='Today-card-content-wrapper'>
                    <img className='Todays-profile-pic' src={item.profilePic} alt={item.name} />
                    <div className='Today-card-content'>
                        <text className='Today-card-work'>{item.work}</text>
                        <text className='Today-card-position'>
                            {item.position}<text  className='Today-card-time'>{item.time}</text>
                         </text>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodayCard;