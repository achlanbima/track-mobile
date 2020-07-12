import React, { useState, useContext } from 'react'
import { StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
    const {state, signup} = useContext(AuthContext); 

    return (
        <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.containerScroll}>
                <View style={styles.container}>
                    <AuthForm
                        headerText='Sign Up for Tracker'
                        errorMessage={state.errorMessage}
                        onSubmit={signup}
                    />
                    <Spacer>
                        <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
                            <Text style={styles.link}>Already have an account? Sign in instead</Text>
                        </TouchableOpacity>
                    </Spacer>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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
        marginBottom:250,
    },
    containerScroll:{
        paddingVertical:100
    },
    link:{
        color:'blue'
    }
})
