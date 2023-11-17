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

interface User {
  id: number;
  name: string;
  profilePic: string;
  phone: string;
  balance: number;
  orders: number;
  date: string;
  status: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
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
      const newSelecteds = users.map((user) => user.id);
      setSelectedRows(newSelecteds);
    } else {
      setSelectedRows([]);
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>,userId:number) => {
    setAnchorEl(event.currentTarget);
    const user = users.find((u) => u.id === userId);
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

  const handleEdit = (users:any) => {
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
            <TableCell>Name</TableCell>
            <TableCell>Profile Picture</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell>Orders</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell style={{ height: 20}}>
                <Checkbox 
                  checked={selectedRows.indexOf(user.id) !== -1}
                  onChange={(event) => handleCheckboxClick(event, user.id)}
                />
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>
                <Avatar alt={user.name} src={user.profilePic} />
              </TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.balance}</TableCell>
              <TableCell>{user.orders}</TableCell>
              <TableCell>{user.date}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                <IconButton onClick={(event) =>handleMenuOpen(event, user.id)}>
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
