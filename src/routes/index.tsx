import { Routes, BrowserRouter as Router, Route, Navigate, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import LeftWidget from '../pages/Home/GridWidgets/LeftWidget';
import { Grid, Paper, Typography } from '@mui/material';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Customers from '../pages/Customers';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSession } from '../redux/reducers/userSessionSlice';


const PrivateRoutes = () => {
    let auth = !!localStorage.getItem('sessiontoken')
    return (
        auth ? <Outlet /> : <Navigate to='/login' />
    )
}

const PostLoginRouter = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const userString = localStorage.getItem('user');
        const user = userString && JSON.parse(userString);
        dispatch(setSession(user))
    }, []);

    return (
        <div>
            <Router>
                <Grid container spacing={2}> 
                <LeftWidget />
                    <Routes>
                        <Route element={<PrivateRoutes />}>
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<Home />} />
                            <Route path="/customers" element={<Customers />} />
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Signup />} />
                    </Routes>
                </Grid>
            </Router>
        </div>
    );
};

export default PostLoginRouter;
