import React from 'react'
import Stack from '@mui/material/Stack';
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { setSignInModalVisibility, setSignUpModalVisibility } from '../../../redux/slice';


const AuthNav = () => {
    const dispatch = useDispatch();

    const handleSignInModalOpen = (): void => {
        dispatch(setSignInModalVisibility(true));
    }

    const handleSignUpModalOpen = (): void => {
        dispatch(setSignUpModalVisibility(true));
    }

    return (
        <Stack spacing={ 2 } direction="row">
            <Button color="inherit" variant="outlined" onClick={ handleSignInModalOpen }>Sign In</Button>
            <Button color="default" variant="contained" onClick={ handleSignUpModalOpen }>Sign Up</Button>
        </Stack>
    )
}

export default AuthNav
