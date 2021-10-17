import React from 'react'
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@material-ui/core';

const TabsContentLoading = () => {
    return (
        <Stack spacing={ 0 } direction="row" flexWrap="wrap" justifyContent="center" alignItems="center">
            { Array.from(new Array(24)).map((el, idx) => (
            <Box key={ idx } sx={{ margin: 10, width: 250, flexGrow: 1 }}>
                <Skeleton variant="rectangular" width="100%" height={ 150 }/>
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
            </Box>
            )) }
        </Stack>
    )
}

export default TabsContentLoading
