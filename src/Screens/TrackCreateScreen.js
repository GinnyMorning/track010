// import "../_mockLocations";
import React, { useContext, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../Components/Map";
import { Context as LocationContext } from "../Context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../Components/TrackForm";
import TrackListScreen from "./TrackListScreen";
import { FontAwesome } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
    const {
        state: { recording },
        addLocation,
    } = useContext(LocationContext);
    const callback = useCallback((location) => {
        addLocation(location, recording);
    });
    const [err] = useLocation(isFocused || recording, callback);

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

TrackCreateScreen.navigationOptions = {
    title: "Add Track",
    tabBarIcon: <FontAwesome name="road" size={24} color="black" />,
};

const styles = StyleSheet.create({
    container: {
        fontSize: 48,
    },
});

export default withNavigationFocus(TrackCreateScreen);
