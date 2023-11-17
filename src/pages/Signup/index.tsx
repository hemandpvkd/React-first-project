import React, { useState, useEffect, ChangeEvent } from 'react';
import './Signup.css'
import { add, customValue, minus } from '../../redux/reducers/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../../mockData/profile';
import { Button, TextField, Typography, Container, Paper, Box, Grid, Link, Alert } from '@mui/material';
import Api from '../../utils/api'
import { SIGNUP } from '../../common/endpoints'
import { useNavigate } from 'react-router-dom';
import { setSession } from '../../redux/reducers/userSessionSlice';

const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const fetchData = () => {
        setLoading(true)
        let registerData = new FormData()
        registerData.append('email', formData.email)
        registerData.append('password', formData.password)
        registerData.append('fullname', formData.name)
        registerData.append('appid', '1')
        Api('post', SIGNUP, registerData).then((response?: { statusCode?: number; user?: any } | undefined) => {
            setLoading(false)
            if (response?.statusCode === 200 && response?.user) {
                localStorage.setItem('user', JSON.stringify(response?.user))
                localStorage.setItem('sessiontoken', JSON.stringify(response?.user?.sessionToken))
                navigate('/')
                dispatch(setSession(response?.user))
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
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        if (formData.name === '') {
            newErrors = { ...newErrors, name: 'Name is required' };
        }

        if (formData.email === '') {
            newErrors = { ...newErrors, email: 'Email is required' };
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors = { ...newErrors, email: 'Email is not valid' };
        }

        if (formData.password === '') {
            newErrors = { ...newErrors, password: 'Password is required' };
        }

        if (formData.confirmPassword === '') {
            newErrors = { ...newErrors, confirmPassword: 'Confirm Password is required' };
        } else if (formData.password !== formData.confirmPassword) {
            newErrors = {
                ...newErrors,
                confirmPassword: 'Passwords do not match',
            };
        }
        setErrors(newErrors);
        const isFormValid = Object.values(newErrors).every((error) => error === '');
        return isFormValid
    };

    const handleSignup = () => {
        fetchData()
        console.log('formData', formData)
        // Implement your login logic here
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Perform form submission or further actions
            // This is where you can send the data to your server or perform other actions.
            console.log('Form is valid. Submitting data:', formData);
            handleSignup()
        } else {
            console.log('Form contains errors. Please fix them.');
        }
    };

    const dispatch = useDispatch();

    return (
        <Container style={{ justifyContent: 'center', alignItems: 'center', display: 'flex',marginTop:20 }} maxWidth="lg">
            <Box maxWidth={800} boxShadow={5} className='Signup-box'>
                <Grid className='Signup-grid' container>
                    <Grid item xs={12} sm={6}>
                        <div className='Signup-content'>
                            <Typography className='Signup-heading' variant="h4" gutterBottom>
                                Register
                            </Typography>
                            <form onSubmit={handleSubmit} className='Signup-form'>
                                <TextField
                                    label="Name"
                                    fullWidth
                                    variant="outlined"
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    margin="normal"
                                    onChange={(e) => handleInputChange(e, 'name')}
                                />
                                <TextField
                                    label="Email"
                                    fullWidth
                                    variant="outlined"
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    margin="normal"
                                    onChange={(e) => handleInputChange(e, 'email')}
                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    variant="outlined"
                                    error={!!errors.password}
                                    helperText={errors.password}
                                    margin="normal"
                                    onChange={(e) => handleInputChange(e, 'password')}
                                />
                                <TextField
                                    label="confirm Password"
                                    type="password"
                                    fullWidth
                                    variant="outlined"
                                    error={!!errors.confirmPassword}
                                    helperText={errors.confirmPassword}
                                    margin="normal"
                                    onChange={(e) => handleInputChange(e, 'confirmPassword')}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    type="submit"
                                    disabled={isLoading} 
                                // onClick={handleSignup}
                                >
                                     {isLoading ? 'Please wait...' : 'REGISTER'}
                                </Button>
                                <Typography variant="body2">
                                    Don't have an account? <Link href="/signup">Sign Up</Link>
                                </Typography>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={Profile[0].profilePic} className='Signup-pic' alt="Professional" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Signup;

