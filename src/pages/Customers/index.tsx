import React, { useEffect, useState } from 'react';
import './Customers.css'
import { Grid, Paper, Typography } from '@mui/material';
import TopWidget from '../Home/GridWidgets/TopWidget';
import SearchActions from '../../components/molecules/SearchActions';
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'
import Cards from '../../components/molecules/Cards';
// import CenterWidget from './GridWidgets/CenterWidget';
import { useDispatch, useSelector } from 'react-redux';
import { setSession } from '../../redux/reducers/userSessionSlice';
import Api from '../../utils/api'
import UserTable from '../../components/molecules/UserTable';
import mockUsers from '../../mockData/mockUsers';

const Customers = () => {

    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const gridStyle = {
        border: '1px solid lightgray',
        margin: 20, borderRadius: 10,
        paddingLeft:-16
    }
    const gridContainerStyle = {
        borderLeft: '1px solid lightgray'
    }

    const fetchData = () => {
        fetch("https://reqres.in/api/users", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                if (data?.data) {
                    setData(data?.data)
                    console.log('response', data)
                }
                else alert('something went wrong ...')
            });
    };

    useEffect(() => {
        setLoading(true);
        fetchData()
    }, []);

    console.log('data', data)

    return (
        <Grid style={gridContainerStyle} sm={12} xs={10} md={10} lg={10} item>
            <Grid container spacing={2}>
                <TopWidget title='Customers' />
                <Grid style={gridStyle} item xs={12}>
                    <Backdrop open={isLoading} style={{ zIndex: 999, color: '#fff' }}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    <div style={{ marginRight: 25 }}>
                        <SearchActions />
                    </div>
                    <div className='user-table-container'>
                        <UserTable users={mockUsers}/>
                        </div>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Customers;
