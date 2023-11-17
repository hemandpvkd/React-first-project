import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActive from '@mui/icons-material/NotificationsActive';
import ArrowDropDownTwoTone from '@mui/icons-material/ArrowDropDownTwoTone';

const profilePic= "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

const Header = ({title}:{title:string}) => {
  return (
    <div className='Header'>
        <h3>{title}</h3>
        <SearchIcon sx={{ fontSize: 20, color:'lightgrey',marginRight:1 }}/>
        <NotificationsActive sx={{ fontSize: 20, color:'lightgrey',marginRight:1  }}/>
          <img className='User-profile-pic' src={profilePic} alt={'profile'} />
        <ArrowDropDownTwoTone sx={{ fontSize: 20, color:'lightgrey',marginLeft:1  }}/>
    </div>
  );
};

export default Header;
