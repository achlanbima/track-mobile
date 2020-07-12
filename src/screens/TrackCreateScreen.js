import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import { Text } from 'react-native-elements'

const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{top:'always'}} >
            <Text h3>TrackCreate Screen</Text>
            <Map/>
        </SafeAreaView>
    )
}

export default TrackCreateScreen

const styles = StyleSheet.create({})
