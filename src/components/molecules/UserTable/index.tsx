import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './UserTable.css'
import mockUsers from '../../../mockData/mockUsers';

// interface User {
//   first_name: string;
//   avatar: string | undefined;
//   id: number;
//   name: string;
//   profilePic: string;
//   phone: string;
//   balance: number;
//   orders: number;
//   date: string;
//   status: string;
// }

interface User {
  users: [];
}

const UserTable: React.FC<any> = ({ users, searchText }) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleCheckboxChange = (userId: number) => {
    const selectedIndex = selectedRows.indexOf(userId);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, userId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelected);
  };

  const handleCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>, userId: number) => {
    event.stopPropagation();
    handleCheckboxChange(userId);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = users.map((user: { id: number | string; }) => user.id);
      setSelectedRows(newSelecteds);
    } else {
      setSelectedRows([]);
    }
  };

  const highlightText = (text: string) => {
    const lowerCaseText = text.toLowerCase();
    const index = lowerCaseText.indexOf(searchText.toLowerCase());

    if (index !== -1) {
      return (
        <>
          {text.substring(0, index)}
          <span style={{ backgroundColor: 'yellow' }}>{text.substr(index, searchText.length)}</span>
          {text.substring(index + searchText.length)}
        </>
      );
    }

    return text;
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, userId: number) => {
    setAnchorEl(event.currentTarget);
    const user = users.find((u: { id: number; }) => u.id === userId);
    setSelectedUser(user || null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    // Implement your delete logic here
    console.log('Delete clicked for:', selectedRows);
    handleMenuClose();
  };

  const handleEdit = (users: any) => {
    // Implement your edit logic here
    console.log('Edit clicked for:', selectedUser);
    handleMenuClose();
  };

  return (
    <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                indeterminate={selectedRows.length > 0 && selectedRows.length < users.length}
                checked={selectedRows.length === users.length}
                onChange={handleSelectAllClick}
              />
            </TableCell>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell>Orders</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {users.map((user: { id: number; name: string; avatar: string; first_name: string, last_name: string }, index: number) => (
            <TableRow key={user.id}>
              <TableCell style={{ height: 20 }}>
                <Checkbox
                  checked={selectedRows.indexOf(user.id) !== -1}
                  onChange={(event) => handleCheckboxClick(event, user.id)}
                />
              </TableCell>
              <TableCell>
                <Avatar alt={user.name} src={user?.avatar} />
              </TableCell>
              <TableCell>{highlightText(user?.first_name)} {highlightText(user?.last_name)}</TableCell>
              <TableCell>{mockUsers?.[index]?.phone ?? mockUsers?.[0]?.phone} </TableCell>
              <TableCell>{mockUsers?.[index]?.balance ?? mockUsers?.[0]?.phone}</TableCell>
              <TableCell>{mockUsers?.[index]?.orders ?? mockUsers?.[0]?.phone}</TableCell>
              <TableCell>{mockUsers?.[index]?.date ?? mockUsers?.[0]?.phone}</TableCell>
              <TableCell>{mockUsers?.[index]?.status ?? mockUsers?.[0]?.phone}</TableCell>
              <TableCell>
                <IconButton onClick={(event) => handleMenuOpen(event, user.id)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleEdit}>Edit</MenuItem>
                  <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
