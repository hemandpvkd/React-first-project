import React, { useEffect, useState } from 'react';
import './Customers.css'
import { Grid, Paper, Typography } from '@mui/material';
import TopWidget from '../Home/GridWidgets/TopWidget';
import SearchActions from '../../components/molecules/SearchActions';
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'
import Cards from '../../components/molecules/Cards';
// import CenterWidget from './GridWidgets/CenterWidget';
import { useDispatch, useSelector } from 'react-redux';
import { setSession } from '../../redux/reducers/userSessionSlice';
import Api from '../../utils/api'
import UserTable from '../../components/molecules/UserTable';
import mockUsers from '../../mockData/mockUsers';
import PaginationComponent from '../../components/atoms/Pagination';

interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }

const Customers = () => {

    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<User[]>([]);
    const [searchText, setSearchText] = useState<string>();
    const [perPage, setPerlPages] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredData, setFilteredData] = useState<User[]>(data);
    const gridStyle = {
        border: '1px solid lightgray',
        margin: 20, borderRadius: 10,
        paddingLeft: -16
    }
    const gridContainerStyle = {
        borderLeft: '1px solid lightgray'
    }

    const fetchData = (page: number) => {
        fetch(`https://reqres.in/api/users?page=${page}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((resp) => {
                setLoading(false);
                if (resp?.data) {
                    setData(resp?.data)
                    setPerlPages(resp?.per_page)
                    setTotalPages(resp?.total_pages)
                }
                else alert('something went wrong ...')
            });
    };

    const searchUsers = (searchText: string) => {
        console.log('searchText', searchText);
        const lowerCaseSearchText = searchText.toLowerCase();
    
        // Filter the data based on first_name or last_name containing the search text
        const filteredData = data.filter((user) => {
          const lowerCaseFirstName = (user.first_name || '').toLowerCase();
          const lowerCaseLastName = (user.last_name || '').toLowerCase();
    
          return lowerCaseFirstName.includes(lowerCaseSearchText) || lowerCaseLastName.includes(lowerCaseSearchText);
        });
        setSearchText(searchText)
        setFilteredData(filteredData);
      };

    useEffect(() => {
        setData([])
        setLoading(true);
        fetchData(1)
    }, []);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        fetchData(page)
    }
    console.log('hahaha',filteredData)
    const userData= filteredData?.length?filteredData:data

    return (
        <Grid style={gridContainerStyle} sm={12} xs={10} md={10} lg={10} item>
            <Grid container spacing={2}>
                <TopWidget title='Customers' />
                <Grid style={gridStyle} item xs={12}>
                    <Backdrop open={isLoading} style={{ zIndex: 999, color: '#fff' }}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    <div style={{ marginRight: 25 }}>
                        <SearchActions searchUsers={searchUsers} />
                    </div>
                    <div className='user-table-container'>
                        {userData?.length > 0 &&
                            <UserTable searchText={searchText} users={userData} />}
                    </div>
                    <div className='pagination-container'>
                    <PaginationComponent
                        totalItems={userData.length}
                        itemsPerPage={perPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        color="primary" // Customize the color if needed
                    />
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Customers;
