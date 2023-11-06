import React from 'react';
import './SearchActions.css'
import Search from '../../atoms/Search';
import AddNew from '../../atoms/AddNew';

const SearchActions = () => {
  return (
    <div className='Search-actions'>
        <Search/>
        <AddNew/>
    </div>
  );
};

export default SearchActions;
