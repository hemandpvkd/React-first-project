import React, { useState, useEffect } from 'react';
import './Search.css'

import SearchIcon from '@mui/icons-material/Search';
var _ = require('lodash');

const Search = ({ onSearch }: { onSearch: any }) => {

  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    // Use Lodash debounce to delay the API call
    const debounceSearch = _.debounce(onSearch, 300);

    // Call the debounced function when the search term changes
    debounceSearch(searchTerm);

    // Cleanup the debounce function on component unmount
    return () => {
      debounceSearch.cancel();
    };
  }, [onSearch, searchTerm]);

  return (
    <form className="Search-form" action="action_page.php">
      <button className="Search-form-icon" type="submit"><SearchIcon sx={{ fontSize: 20 }} /></button>
      <input
        type="text"
        className="search-input"
        placeholder="Search.."
        name="search"
        onChange={handleChange} />
    </form>
  );
};

export default Search;
