import React from 'react';
import './SearchActions.css'
import Search from '../../atoms/Search';
import AddNew from '../../atoms/AddNew';

const SearchActions = ({searchUsers}:{searchUsers?:any}) => {
  return (
    <div className='Search-actions'>
        <Search onSearch={searchUsers}/>
        <AddNew/>
    </div>
  );
};

export default SearchActions;
