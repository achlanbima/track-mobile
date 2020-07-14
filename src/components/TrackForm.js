import React, { useContext } from 'react'
import { StyleSheet, } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'

const TrackForm = () => {
    const {
        state: {name, recording, locations}, 
        startRecording, 
        stopRecording,
        changeName } = useContext(LocationContext);

    console.log(locations.length);

    return (
        <>
            <Spacer>
                <Input 
                    value={name}
                    placeholder="Enter name" 
                    onChangeText={changeName}    
                />
            </Spacer>
            {recording 
                ? <Button title="Stop Recording" onPress={stopRecording} /> 
                : <Button title="Start Recording" onPress={startRecording} />
            }
            
        </>
    )
}

export default TrackForm

const styles = StyleSheet.create({})
