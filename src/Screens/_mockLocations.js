import * as Location from "expo-location";

const tenMeterWithDegress = 0.0001;

const getLocations = (increment) => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 106.747069 + increment + tenMeterWithDegress,
            latitude: 10.784670 + increment + tenMeterWithDegress,
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
});

