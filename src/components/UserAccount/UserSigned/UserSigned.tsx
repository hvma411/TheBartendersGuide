import React, { useState } from 'react'
import { Box, Divider, ListItemIcon, Tooltip, Typography } from '@material-ui/core'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux'
import { InitialState } from '../../../model/InitialState.model'
import { setCurrentUser } from '../../../redux/slice';

const UserSigned = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const userEmail = useSelector((state: InitialState) => state.currentUser?.email);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const handleSignOut = (): void => {
        dispatch(setCurrentUser(undefined));
    }

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Typography component="h3" variant="h6">
                    Hello, {userEmail}
                </Typography>
                <Tooltip title="Your profile options">
                    <IconButton 
                        color="inherit"
                        onClick={ handleMenuOpen } 
                        sx={{ marginLeft: 3 }}
                    >
                        <AccountCircle color="inherit" fontSize="large" />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={ anchorEl }
                open={ open }
                onClose={ handleMenuClose }
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 20,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem disabled>
                    <ListItemIcon>
                        <AccountCircle fontSize="medium" />
                    </ListItemIcon>
                    My profile
                </MenuItem>
                <MenuItem disabled>
                    <ListItemIcon>
                        <FavoriteIcon fontSize="medium" />
                    </ListItemIcon>
                    Saved drinks 
                </MenuItem>
                    <Divider />
                <MenuItem disabled>
                    <ListItemIcon>
                        <Settings fontSize="medium" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={ handleSignOut }>
                    <ListItemIcon>
                        <Logout fontSize="medium" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}

export default UserSigned;
