import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Text>Signup Screen</Text>
            <Button
                title={"go to sign in"}
                onPress={()=>navigation.navigate('Signin')}
            />
            <Button
                title={"go to main flow"}
                onPress={()=>navigation.navigate('mainFlow')}
            />
        </>
    )
}

export default SignupScreen

const styles = StyleSheet.create({})
