import React, { useState, useEffect } from 'react';
import './Cards.css';
import Profile from '../../../mockData/profile';
import Button from '../../atoms/Button';
import { Grid, Paper, Typography } from '@mui/material';

function Cards() {

  function showAlert() {
    alert('This is an alert message.'); 
  }

  return (
    <Grid container>
      {Profile.map((item, index) => (
        <Grid
          spacing={20} xs={12} sm={6} md={4} lg={3} item>
          <div className='Cards'>
            <img className='Profile-pic' src={item.profilePic} alt={item.name} />
            <h5>{item.name}</h5>
            <p className='Position'>@ {item.position}</p>
            <Button onClick={showAlert} label='Message' className='Message' />
            <Button onClick={showAlert} label='Follow' className='Follow' />
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default Cards;