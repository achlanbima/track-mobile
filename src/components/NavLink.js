import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';

const Navlink = ({ navigation, routeName, text }) => {
    return(
        <Spacer>
            <TouchableOpacity onPress={()=>navigation.navigate(routeName)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        </Spacer>
    )
}

const styles = StyleSheet.create({
    link:{
        color:'blue'
    }
});

export default withNavigation(Navlink);