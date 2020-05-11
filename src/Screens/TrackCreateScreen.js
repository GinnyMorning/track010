import "../Screens/_mockLocations";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { requestPermissionsAsync } from "expo-location";
import Map from "../Components/Map";

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);
    const startWatching = async () => {
        try {
            await requestPermissionsAsync(); // adb shell pm reset-permissions
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
