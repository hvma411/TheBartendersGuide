import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from '../model/InitialState.model';

const initialState: InitialState = {
    currentUser: undefined,
    signInModalVisible: false,
    signUpModalVisible: false,
}

const userSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setCurrentUser: (state, { payload }) => {
            state.currentUser = payload;
        },
        setSignInModalVisibility: (state, { payload }) => {
            state.signInModalVisible = payload;
        },
        setSignUpModalVisibility: (state, { payload }) => {
            state.signUpModalVisible = payload;
        }
    }
});

export const { setCurrentUser, setSignInModalVisibility, setSignUpModalVisibility } = userSlice.actions;

export default userSlice.reducer;