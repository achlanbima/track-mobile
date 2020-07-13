import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchHeadingAsync } from 'expo-location';

export default (callback) => {
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
          }, 
            callback
          );
        } catch (e) {
          setErr(e);
        }
      };

    useEffect(()=>{
        startWatching()
    },[]);

    return [err];

}