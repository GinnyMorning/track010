import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AccountScreen from "./src/Screens/AccountScreen";
import SignInScreen from "./src/Screens/SignInScreen";
import SignUpScreen from "./src/Screens/SignUpScreen";
import TrackCreateScreen from "./src/Screens/TrackCreateScreen";
import TrackDetailScreen from "./src/Screens/TrackDetailScreen";
import TrackListScreen from "./src/Screens/TrackListScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
