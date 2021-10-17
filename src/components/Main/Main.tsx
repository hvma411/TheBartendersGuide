import React from 'react'
import { useSelector } from 'react-redux'
import { InitialState } from '../../model/InitialState.model'
import SignInModal from '../UserAccount/SignInModal/SignInModal';
import SignUpModal from '../UserAccount/SignUpModal/SignUpModal';
import TabsComponent from './Tabs/Tabs';

const Main = () => {

    const signUpModalVisible = useSelector((state: InitialState) => state.signUpModalVisible);
    const signInModalVisible = useSelector((state: InitialState) => state.signInModalVisible);
    

    return (
        <>
            { signUpModalVisible ? <SignUpModal /> : "" }
            { signInModalVisible ? <SignInModal /> : "" }
            <TabsComponent/>
        </>
    )
}

export default Main
