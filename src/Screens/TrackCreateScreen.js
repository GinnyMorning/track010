import "../Screens/_mockLocations";
import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../Components/Map";
import { Context as LocationContext } from "../Context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../Components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, (location) =>
        addLocation(location, state.recording)
    );

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <View style={styles.container}>
                <Map />
                {err ? <Text>{err}</Text> : null}
                <TrackForm />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        fontSize: 48,
    },
});

export default withNavigationFocus(TrackCreateScreen);
