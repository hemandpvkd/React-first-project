import React, { useState, useEffect } from 'react';
import './Cards.css';
import Profile from '../../../mockData/profile';
import Button from '../../atoms/Button';
import { Grid, Paper, Typography } from '@mui/material';

function Cards() {
  // Define a state variable using the useState hook
  const [message, setMessage] = useState('Hello, World');

  // Use the useEffect hook to perform side effects
  useEffect(() => {
    // Update the message after the component renders
    setMessage('Hello, React with Hooks');
  }, []);

  function showAlert() {
    alert('This is an alert message.'); // Display the alert message
  }

  return (
    <Grid container>
      {Profile.map((item, index) => (
        <Grid
          // style={{border: '1px solid #e0e0e0',borderRadius:8, height: 190,padding:10}}
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