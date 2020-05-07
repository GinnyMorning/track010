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
            await requestPermissionsAsync();
        } catch (error) {
            setErr(error);
        }
    };

    useEffect(() => {
        startWatching();
    }, []);
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <View style={styles.container}>
                <Map />
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
