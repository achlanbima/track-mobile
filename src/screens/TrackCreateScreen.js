import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import { requestPermissionsAsync } from 'expo-location'

const TrackCreateScreen = () => {

    const [err, setErr] = useState('');

    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (e) {
          setErr(e);
        }
      };

    useEffect(()=>{
        startWatching()
    },[]);

    console.log(err);

    return (
        <SafeAreaView forceInset={{top:'always'}} >
            <Text h3>TrackCreate Screen</Text>
            <Map/>
            { err ? (<Text>Please grant permisson</Text>) : null }
        </SafeAreaView>
    )
}

export default TrackCreateScreen

const styles = StyleSheet.create({})
