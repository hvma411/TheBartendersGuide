import React from 'react'
import { Box, Checkbox, Container, FormControlLabel, TextField, Typography } from '@material-ui/core'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch } from 'react-redux';
import { setSignUpModalVisibility } from '../../../redux/slice';


const SignUp = () => {
    const dispatch = useDispatch();

    const handleCloseModal = (): void => {
        dispatch(setSignUpModalVisibility(false));
    }

    return (
        <Backdrop sx={{ color: '#fff', zIndex: (theme: any) => theme.zIndex.drawer + 1 }} open onClick={ handleCloseModal }>
            <Container 
                component="main" 
                maxWidth="xs"
                style={{ 
                    height: '100vh', display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center', 
                }}
            >
                <Box 
                    bgcolor="white"
                    padding="20px 30px"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 4,
                        position: 'relative',
                    }}>
                        <IconButton color="default" onClick={ handleCloseModal } sx={{ position: 'absolute', top: 0, right: 0}}>
                            <CancelIcon fontSize="medium" />
                        </IconButton>
                        <Avatar sx={{ mt: 1, bgcolor: 'secondary.main' }}>
                            <AccountCircle fontSize="medium" />
                        </Avatar>
                        <Typography component="h1" variant="h5" color="textPrimary">
                            Sign Up
                        </Typography>
                        <Box component="form" sx={{ mt: 0 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                name="email"
                                label="Your email address"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                name="password"
                                label="Your password"
                                autoComplete="password"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                name="password"
                                label="Repeat your password"
                                autoComplete="password"
                            />
                            <FormControlLabel
                                control={ <Checkbox value="agree" color="default"/> }
                                label="I accept privacy policy and rules"
                                style={{ color: 'black' }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Box>
            </Container>
        </Backdrop>
    )
}

export default SignUp
