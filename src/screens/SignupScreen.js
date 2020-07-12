import React, {  useContext } from 'react'
import { StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import { ScrollView, } from 'react-native-gesture-handler';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
    const {state, signup} = useContext(AuthContext); 

    return (
        <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.containerScroll}>
                <View style={styles.container}>
                    <AuthForm
                        headerText='Sign Up for Tracker'
                        errorMessage={state.errorMessage}
                        onSubmit={signup}
                        submitText='Sign Up'
                    />
                    <NavLink
                        routeName="Signin"
                        text="Already have an account? Sign in instead"
                    />
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
})
