import '../_mockLocation';
import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import { Context as LocationContext } from '../context/LocationContext'

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);
    const [err, setErr] = useState('');

    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          }
          await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          }, (location)=> {
            addLocation(location);
          });
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
