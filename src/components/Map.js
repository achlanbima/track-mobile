import React, { useContext } from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext);

    if(!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop: 200}} />
    }
    // console.log(currentLocation);
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius={30}
                strokeColor="rgba(255,0,0,1.0)"
                fillColor="rgba(255,0,0,0.3)"
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map:{
        height:300
    }
});

export default Map;