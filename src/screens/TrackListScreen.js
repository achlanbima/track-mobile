import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import {Context as TrackContext} from '../context/TrackContext'
import { NavigationEvents } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ListItem } from 'react-native-elements'

const TrackListScreen = ({ navigation }) => {
    const {fetchTracks, state} = useContext(TrackContext);
    
    return (
        <>
        <NavigationEvents onWillFocus={fetchTracks} />
            <Text style={{fontSize: 48}}>TrackList Screen</Text>
            <FlatList
                data={state}
                keyExtractor={item=> item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
                            <ListItem chevron title={item.name} />
                        </TouchableOpacity>
                    )
                } }
            />
            </>
    )
}

export default TrackListScreen

const styles = StyleSheet.create({})
