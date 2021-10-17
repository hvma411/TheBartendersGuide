import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import Typography from '@mui/material/Typography';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { useSelector } from 'react-redux';
import { InitialState } from '../../model/InitialState.model';
import UserSigned from '../UserAccount/UserSigned/UserSigned';
import AuthNav from '../UserAccount/AuthNav/AuthNav';

const Header = () => {

    const currentUser = useSelector((state: InitialState) => state.currentUser)

    return (
        <AppBar position="fixed">
            <Toolbar>
                <LocalBarIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
                    The Bartender's Guide
                </Typography>
                { currentUser ? <UserSigned /> : <AuthNav /> }
            </Toolbar>
        </AppBar>
    )
}

export default Header
