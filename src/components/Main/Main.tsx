import React from 'react'
import { useSelector } from 'react-redux'
import { InitialState } from '../../model/InitialState.model'
import SignIn from '../UserAccount/SignIn/SignIn';
import SignUp from '../UserAccount/SignUp/SignUp';

const Main = () => {

    const signUpModalVisible = useSelector((state: InitialState) => state.signUpModalVisible);
    const signInModalVisible = useSelector((state: InitialState) => state.signInModalVisible);
    

    return (
        <>
            { signUpModalVisible ? <SignUp /> : "" }
            { signInModalVisible ? <SignIn /> : "" }
        </>
    )
}

export default Main
