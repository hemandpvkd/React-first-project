import React, { useEffect, useState } from 'react';
import '../Home.css'
import { Grid, Paper, Typography } from '@mui/material';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, NavLink, useNavigation } from 'react-router-dom';
import { clearSession } from '../../../redux/reducers/userSessionSlice';
import { 
    Menu, 
    ShoppingCart, 
    PersonAdd, 
    Person2, 
    ChatBubble, 
    Message, 
    Work, 
    CalendarViewDayRounded, 
    Task, 
    Contacts 
} from '@mui/icons-material';

const drawerData = [
    'Dashboard',
    'Ecommerce',
    'Customers',
    'CRM',
    'Chat',
    'Companies',
    'Projects',
    'Calender',
    'Tasks',
    'Contacts'
]



const LeftWidget = ({hasSessionToken}:{hasSessionToken?:string}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const users = useSelector((state?: any) => state.users);
    // const hasSessionToken = useSelector((state?: any) => state.hasSessionToken);
    const getRouteNav=(item:string)=>{
        switch(item){
            case drawerData[0]:
            return '/'
            case drawerData[2]:
            return '/customers'
            default :return '/'
        }

    }
    const IconLabel = ({ item }: { item: string }) => {
        let iconComponent;
        switch (item) {
            case drawerData[0]:
                iconComponent = <Menu className='Drawer-icon' sx={{ fontSize: 20 }} />;
                break;
            case drawerData[1]:
                iconComponent = <ShoppingCart className='Drawer-icon' sx={{ fontSize: 20 }} />;
                break;
            case drawerData[2]:
                iconComponent = <PersonAdd className='Drawer-icon' sx={{ fontSize: 20 }} />;
                break;
            case drawerData[3]:
                iconComponent = <Person2 className='Drawer-icon' sx={{ fontSize: 20 }} />;
                break;
            case drawerData[4]:
                iconComponent = <ChatBubble className='Drawer-icon' sx={{ fontSize: 20 }} />;
                break;
            case drawerData[5]:
                iconComponent = <Message className='Drawer-icon' sx={{ fontSize: 20 }} />;
                break;
            case drawerData[6]:
                iconComponent = <Work className='Drawer-icon' sx={{ fontSize: 20 }} />;
                break;
            case drawerData[7]:
                iconComponent = <CalendarViewDayRounded className='Drawer-icon' sx={{ fontSize: 20 }} />;
                break;
            case drawerData[8]:
                iconComponent = <Task className='Drawer-icon' sx={{ fontSize: 20 }} />;
                break;
            case drawerData[9]:
                iconComponent = <Contacts className='Drawer-icon' sx={{ fontSize: 20 }} />;
                break;
        }
        return (
            <div onClick={()=>navigate(getRouteNav(item))} className='Left-widget'>
                {iconComponent}
                <text className='Left-widget-item'>{item}</text>
            </div>
        )
    }
    const handleButtonClick = () => {
        navigate('/to/this/route'); // Replace with the desired route path
    };

    //   if(!isVisible) {
    //     return null
    //   }
console.log('hasSessionToken',hasSessionToken)
    if (!hasSessionToken) {
        return null
    }

    const onClick = () => {
        navigate('/login')
        dispatch(clearSession())

    }


    return (
        <Grid style={{ backgroundColor: '#fcfdff' }} xs={12} sm={2} lg={2} item>
            <div>
                {drawerData.map((item, index) => (
                    <IconLabel item={item} />
                ))}
                <button
                    onClick={onClick}
                >
                    Log out
                </button>
            </div>
        </Grid>
    );
};

const mapStateToProps = (state?:any) => {
    return {
      hasSessionToken: state.getUser.hasSessionToken,
    };
  };

  export default connect(mapStateToProps)(LeftWidget);
