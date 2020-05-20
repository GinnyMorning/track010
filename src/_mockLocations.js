import * as Location from "expo-location";

const tenMeterWithDegrees = 0.0001;

const getLocations = (increment) => {
    return {
        timestamp: Date.now(),
        mocked: true,
        coords: {
            latitude: 10.783 + increment * tenMeterWithDegrees,
            longitude: 106.747 + increment * tenMeterWithDegrees,
            altitude: 5,
            accuracy: 5,
            heading: 0,
            speed: 0,
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
    // console.log("-------------------");
    // console.log(getLocations(counter));
    // console.log("-------------------");
}, 1000);
