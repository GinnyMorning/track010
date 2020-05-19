import React, { useContext } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../Context/LocationContext";

const Map = () => {
    const {
        state: { currentLocation },
    } = useContext(LocationContext); //only get current location from the state of context

    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />;
    } else {
        console.log(currentLocation.coords);
        return (
            <MapView
                style={styles.map}
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                region={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}>
                <Circle
                    center={currentLocation.coords}
                    radius={15}
                    strokeColor='rgba(158,158,255,1.0)'
                    fillColor='rgba(158,158,255,0.3)'
                />
            </MapView>
        );
    }
};

export default Map;

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});
