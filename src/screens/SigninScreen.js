import React, { useContext } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';

const SigninScreen = () => {

    const { state, signin } = useContext(AuthContext);

    return (
        <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.containerScroll}>
                <View style={styles.container}>
                    <AuthForm
                        headerText='Sign In to your account'
                        errorMessage={state.errorMessage}
                        onSubmit={signin}
                        submitText='Sign In'
                    />
                    <NavLink
                        routeName={'Signup'}
                        text='Dont have an account? Sign up now'
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:250,
    },
    containerScroll:{
        paddingVertical:100
    },
})

export default SigninScreen

