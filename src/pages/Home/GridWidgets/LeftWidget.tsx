import React from 'react';
import '../Home.css'
import { Grid, Paper, Typography } from '@mui/material';
import {Menu,ShoppingCart,PersonAdd,Person2,ChatBubble,Message,Work,CalendarViewDayRounded,Task,Contacts} from '@mui/icons-material';

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


const LeftWidget = () => {

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
        <div className='Left-widget'>
            {iconComponent}
            <text className='Left-widget-item'>{item}</text>
        </div>
    )
}

return (
    <Grid style={{ backgroundColor: '#fcfdff' }} xs={12} sm={2} lg={2} item>
        <div>
            {drawerData.map((item, index) => (
                <IconLabel item={item} />
            ))}
        </div>
    </Grid>
);
};

export default LeftWidget;
