import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import './ProjectCards.css'

const data = [
    { name: 'TOTAL', value: 148 },
    { name: 'COMLETED', value: 56 },
    { name: 'INPROGRESS', value: 74 },
    { name: 'WAITING', value: 16 }
]
const ICON_COLOR = [
    '#4073ff',
    '#2ac0b9',
    '#fca133',
    '#f23045',
];
const BG_COLOR = [
    '#e5eeff',
    '#e7f8f7',
    '#fff3e6',
    '#feeaec',
];

const gridStyle={
    height: 80,
    margin: 4,
    padding:20,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
}

const ProjectCards = () => {
    return (
        <Grid container style={{margin:10,marginBottom:30}}>
            {data.map((item, index) => (
                <Grid style={{...gridStyle,backgroundColor: BG_COLOR[index]}}sm={5.5} xs={12} item>
                    <text className='Project-cards-name' style={{color:'lightgray'}}>{item.name}</text>
                    <div className='Project-cards-tag-container'>
                        <div className='Project-cards-color-tag' style={{ backgroundColor: ICON_COLOR[index] }} />
                        <text className='Project-cards-value'>{item.value}</text>
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProjectCards;
