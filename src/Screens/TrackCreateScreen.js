import "../Screens/_mockLocations";
import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import {
    requestPermissionsAsync,
    watchPositionAsync,
    Accuracy,
} from "expo-location";
import Map from "../Components/Map";
import { Context as LocationContext } from "../Context/LocationContext";

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);
    const [err, setErr] = useState(null);
    const startWatching = async () => {
        try {
            await requestPermissionsAsync(); // adb shell pm reset-permissions
            await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10,
                },
                (location) => {
                    addLocation(location);
                }
            );
        } catch (error) {
            setErr(error);
            console.log(err);
        }
    };

    useEffect(() => {
        startWatching();
    }, []);

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <View style={styles.container}>
                <Map />
                {err ? <Text>{err}</Text> : null}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        fontSize: 48,
    },
});

export default TrackCreateScreen;
