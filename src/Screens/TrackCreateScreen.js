import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Map from "../Components/Map";

const TrackCreateScreen = () => {
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
