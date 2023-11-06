import React from 'react';

import SearchIcon from '@mui/icons-material/Add';
import './AddNew.css'

const AddNew = () => {
  return (
    <button className="custom-button">
    <SearchIcon className='Plus-icon' sx={{ fontSize: 20 }}/> Add New
  </button>
  );
};

export default AddNew;
