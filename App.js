import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AccountScreen from "./src/Screens/AccountScreen";
import SignInScreen from "./src/Screens/SignInScreen";
import SignUpScreen from "./src/Screens/SignUpScreen";
import TrackCreateScreen from "./src/Screens/TrackCreateScreen";
import TrackDetailScreen from "./src/Screens/TrackDetailScreen";
import TrackListScreen from "./src/Screens/TrackListScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { render } from "react-dom";

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        Signup: SignUpScreen,
        Signin: SignInScreen,
    }),
    mainFlow: createBottomTabNavigator({
        trackListFlow: createStackNavigator({
            TrackList: TrackListScreen,
            TrackDetail: TrackDetailScreen,
        }),
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen,
    }),
});
export default createAppContainer(switchNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 28,
    },
});
