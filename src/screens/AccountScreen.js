import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {

    const { signout } = useContext(AuthContext);

    return (
        <>
            <Text>Account Screen</Text>
            <Button title="Sign out" onPress={signout} />
        </>
    )
}

export default AccountScreen

const styles = StyleSheet.create({})
