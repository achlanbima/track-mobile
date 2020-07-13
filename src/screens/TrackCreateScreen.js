import '../_mockLocation';
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext);
    
    const [err] = useLocation(isFocused, addLocation);

    return (
        <SafeAreaView forceInset={{top:'always'}} >
            <Text h3>TrackCreate Screen</Text>
            <Map/>
            { err ? (<Text>Please grant permisson</Text>) : null }
        </SafeAreaView>
    )
}

export default withNavigationFocus(TrackCreateScreen)

const styles = StyleSheet.create({})
