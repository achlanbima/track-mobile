import React from 'react'
import { StyleSheet, View} from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
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
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

export default SignupScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:250
    }
})
