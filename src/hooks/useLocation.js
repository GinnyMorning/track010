import { useState, useEffect } from "react";
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync,
} from "expo-location";

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    /*this function will be invoke when shouldTrack value changed, then check the shouldTrack value to start
    tracking or not */
    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                await requestPermissionsAsync(); // adb shell pm reset-permissions
                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 10,
                    },
                    // (location) => {
                    //     addLocation(location);
                    // },
                    callback
                );
                
            } catch (error) {
                setErr(error);
                console.log(err);
            }
        };

        if (shouldTrack) {
            startWatching();
        } else {
            if (subscriber) subscriber.remove(); //remove subscriber object
            subscriber = null;
        }

        return () => {
            if (subscriber) subscriber.remove();
        };
    }, [shouldTrack, callback]);

    return [err];
};
