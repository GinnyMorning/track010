import { useState, useEffect } from "react";
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync,
} from "expo-location";

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);
    const startWatching = async () => {
        try {
            await requestPermissionsAsync(); // adb shell pm reset-permissions
            const sub = await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10,
                },
                // (location) => {
                //     addLocation(location);
                // },
                callback,
            );
            setSubscriber(sub);
        } catch (error) {
            setErr(error);
            console.log(err);
        }
    };
    /*this function will be invoke when shouldTrack value changed, then check the shouldTrack value to start
    tracking or not */
    useEffect(() => {
        if (shouldTrack) {
            startWatching();
        } else {
            subscriber.remove(); //remove subscriber object
            setSubscriber(null);
        }
    }, [shouldTrack]);

    return [err];
};
