import React, { useContext } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {

    const { state, signin } = useContext(AuthContext);

    return (
        <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.containerScroll}>
                <View style={styles.container}>
                    <AuthForm
                        headerText='Sign In for Tracker'
                        errorMessage={state.errorMessage}
                        onSubmit={signin}
                        submitText='Sign In'
                    />
                    <Spacer>
                        <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                            <Text style={styles.link}>Dont have an account? Sign up now</Text>
                        </TouchableOpacity>
                    </Spacer>
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
    link:{
        color:'blue'
    }
})

export default SigninScreen

