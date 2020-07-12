import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { Text, Input, Button } from 'react-native-elements';

const AuthForm = ({headerText, errorMessage, onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
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
                errorMessage ? (<Text style={styles.errorMessage}>{errorMessage}</Text>) : null
            }
            <Spacer>
                <Button title="Sign Up" onPress={()=> onSubmit({email,password})} />
            </Spacer>
        </>
    );
}

const styles = StyleSheet.create({
    errorMessage:{
        color:'red',
        marginTop:-15,
        marginHorizontal:10
    },
})

export default AuthForm;