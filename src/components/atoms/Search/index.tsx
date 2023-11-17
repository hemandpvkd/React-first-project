import React from 'react';
import './Search.css'

import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const Search = () => {

  return (
    <form className="Search-form" action="action_page.php">
    <button className="Search-form-icon" type="submit"><SearchIcon sx={{ fontSize: 20 }}/></button>
    <input type="text" className="search-input" placeholder="Search.." name="search"/>
  </form>
  );
};

export default Search;
