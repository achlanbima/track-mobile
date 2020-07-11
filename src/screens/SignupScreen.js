import React from 'react'
import { StyleSheet} from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Input label="Email" />
            <Spacer/>
            <Input label="Password" />
            <Spacer/>
            <Spacer>
                <Button title="Sign Up" />
            </Spacer>
        </>
    )
}

export default SignupScreen

const styles = StyleSheet.create({})
