import '../_mockLocation';
import React, { useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation, state } = useContext(LocationContext);
    const callback = useCallback(location=> {
        addLocation(location, state.recording);
    }, [state.recording]);
    const [err] = useLocation(isFocused, callback);

    return (
        <SafeAreaView forceInset={{top:'always'}} >
            <Text h3>TrackCreate Screen</Text>
            <Map/>
            { err ? (<Text>Please grant permisson</Text>) : null }
            <TrackForm/>
        </SafeAreaView>
    )
}

export default withNavigationFocus(TrackCreateScreen)

const styles = StyleSheet.create({})
