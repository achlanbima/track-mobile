import React, { useState, useContext } from 'react'
import { StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { ScrollView } from 'react-native-gesture-handler';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const {state, signup} = useContext(AuthContext); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.containerScroll}>
                <View style={styles.container}>
                    <Spacer>
                        <Text h3>Sign Up for Tracker</Text>
                    </Spacer>
                    <Input 
                        label="Email" 
                        value={email} 
                        onChangeText={(value)=>setEmail(value)} 
                        autoCapitalize={"none"}
                        autoCorrect={false}    
                    />
                    <Input 
                        label="Password" 
                        value={password} 
                        onChangeText={(value)=>setPassword(value)} 
                        autoCapitalize={"none"}
                        autoCorrect={false} 
                        secureTextEntry={true}
                    />
                    {
                        state.errorMessage ? (<Text style={styles.errorMessage}>{state.errorMessage}</Text>) : null
                    }
                    <Spacer>
                        <Button title="Sign Up" onPress={()=> signup({email,password})} />
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
    errorMessage:{
        color:'red',
        marginTop:-15,
        marginHorizontal:10
    }
})
