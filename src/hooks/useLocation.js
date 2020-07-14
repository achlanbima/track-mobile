import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchHeadingAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState('');

    useEffect(()=>{

      let subscriber;

      const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          }
          const sub = await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          }, 
            callback
          );
          subscriber = sub;
          setErr('');
        } catch (e) {
          console.log(e);
          setErr(e);
        }
      };

      if(shouldTrack){
        startWatching()
      }else{
        if(subscriber){
          subscriber.remove();
        }
        subscriber = null;
      }

      return () => {
        if(subscriber != null){
          subscriber.remove();
        }
      };
    },[shouldTrack, callback ]);

    return [err];

}