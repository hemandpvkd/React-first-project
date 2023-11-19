import React from 'react';
import { Pagination as MuiPagination, PaginationProps } from '@mui/material';
import Stack from '@mui/material/Stack';

interface PaginationComponentProps extends PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    totalPages?: number;
    onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
    totalItems,
    itemsPerPage,
    totalPages: propTotalPages,
    onPageChange,
    ...paginationProps
}) => {
    const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);
    const totalPages = propTotalPages;

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        onPageChange(page);
    };

    return (<Stack spacing={2}>
        <MuiPagination 
        shape="rounded" 
        count={totalPages} 
        onChange={handlePageChange} 
        {...paginationProps} />
    </Stack>)
};

export default PaginationComponent;
