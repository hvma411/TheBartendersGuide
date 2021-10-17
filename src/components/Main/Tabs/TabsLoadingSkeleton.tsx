import React from 'react'
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

const TabsLoadingSkeleton = () => {
    return (
        <Stack spacing={ 1 } direction="row" sx={{ paddingTop: 1, marginLeft: 1, marginRight: 1, marginBottom: 1 }} >
            <Skeleton variant="rectangular" width="100%" height={ 40 }/>
            <Skeleton variant="rectangular" width="100%" height={ 40 }/>
            <Skeleton variant="rectangular" width="100%" height={ 40 }/>
            <Skeleton variant="rectangular" width="100%" height={ 40 }/>
            <Skeleton variant="rectangular" width="100%" height={ 40 }/>
            <Skeleton variant="rectangular" width="100%" height={ 40 }/>
            <Skeleton variant="rectangular" width="100%" height={ 40 }/>
            <Skeleton variant="rectangular" width="100%" height={ 40 }/>
            <Skeleton variant="rectangular" width="100%" height={ 40 }/>
            <Skeleton variant="rectangular" width="100%" height={ 40 }/>
            <Skeleton variant="rectangular" width="100%" height={ 40 }/>
        </Stack>
    )
}

export default TabsLoadingSkeleton
