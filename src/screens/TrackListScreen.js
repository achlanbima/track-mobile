import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text>TrackList Screen</Text>
            <Button
                title="Go to Track Detail"
                onPress={()=>navigation.navigate('TrackDetail')}
            />
        </>
    )
}

export default TrackListScreen

const styles = StyleSheet.create({})
