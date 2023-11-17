import React, { useState, useEffect,ChangeEvent } from 'react';
import './Login.css'
import { add, customValue, minus } from '../../redux/reducers/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../../mockData/profile';
import Api from '../../utils/api'
import { LOGIN } from '../../common/endpoints'
import { Button, TextField, Typography, Container, Paper, Box, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { setSession } from '../../redux/reducers/userSessionSlice';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleLogin = () => {
        // Implement your login logic here
    };

    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.clear()
    }, []);
    const fetchData = () => {
        setLoading(true)
        let registerData = new FormData()
        registerData.append('email', formData.email)
        registerData.append('password', formData.password)
        registerData.append('appid', '1')
        Api('post', LOGIN, registerData).then((response?: { statusCode?: number; userinfo?: any } | undefined) => {
            setLoading(false)
            if (response?.statusCode === 200 && response?.userinfo) {
                localStorage.setItem('user', JSON.stringify(response?.userinfo))
                localStorage.setItem('sessiontoken', JSON.stringify(response?.userinfo?.sessionToken))
                dispatch(setSession(response?.userinfo))
                navigate('/')
            }
            else alert('Login failed. Please try again.')
        });
    };

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        fieldName: string
    ) => {
        const { value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const validateForm = () => {
        let newErrors: typeof errors = {
            email: '',
            password: '',
        };

        if (formData.email === '') {
            newErrors = { ...newErrors, email: 'Email is required' };
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors = { ...newErrors, email: 'Email is not valid' };
        }
        if (formData.password === '') {
            newErrors = { ...newErrors, password: 'Password is required' };
        }
        setErrors(newErrors);
        const isFormValid = Object.values(newErrors).every((error) => error === '');
        return isFormValid
    };

    const handleSignup = () => {
        fetchData()
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            handleSignup()
        } else {
            console.log('Form contains errors. Please fix them.');
        }
    };

    return (
        <Container style={{justifyContent:'center',alignItems:'center',display:'flex', marginTop:20}} maxWidth="lg">
            <Box maxWidth={800} boxShadow={5} className='Login-box'>
                <Grid className='Login-grid' container>
                    <Grid item xs={12} sm={6}>
                        <div className='Login-content'>
                        <Typography className='Login-heading' variant="h4" gutterBottom>
                            Login
                        </Typography>
                        <form  onSubmit={handleSubmit} className='Login-form'>
                            <TextField
                                label="Email"
                                fullWidth
                                variant="outlined"
                                error={!!errors.email}
                                helperText={errors.email}
                                onChange={(e) => handleInputChange(e, 'email')}
                                margin="normal"
                            // Add your state and onChange handlers for email input
                            />
                            <TextField
                                label="Password"
                                type="password"
                                fullWidth
                                error={!!errors.password}
                                helperText={errors.password}
                                variant="outlined"
                                onChange={(e) => handleInputChange(e, 'password')}
                                margin="normal"
                            // Add your state and onChange handlers for password input
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                type="submit"
                                disabled={isLoading} 
                            // Add your login function here
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </Button>
                            <Typography variant="body2">
                                Don't have an account? <Link href="/register">Sign Up</Link>
                            </Typography>
                        </form>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={Profile[0].profilePic} className='Login-pic' alt="Professional" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;

