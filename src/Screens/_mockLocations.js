import * as Location from "expo-location";

const tenMeterWithDegrees = 0.0001;

const getLocations = (increment) => {
    return {
        timestamp: Date.now(),
        coords: {
            latitude: 10.78467 + increment * tenMeterWithDegrees,
            longitude: 106.747069 + increment * tenMeterWithDegrees,
            altitude: 5,
            accuracy: 5,
            heading: 0,
            speed: 0,
            altitudeAccuracy: 5,
        },
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit("Expo.locationChanged", {
        watchId: Location._getCurrentWatchId(),
        location: getLocations(counter),
    });
    counter++;
}, 1000);
