import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');
    
    const track = state.find(t => t._id == _id);

    console.log(track)

    return (
        <View>
            <Text>Track Detail</Text>
        </View>
    )
}

export default TrackDetailScreen

const styles = StyleSheet.create({})
