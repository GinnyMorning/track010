import React, { useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../Context/AuthContext";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";

const SignUpScreen = ({ navigation }) => {
    const { state, signUp, clearErrorMessage, tryLocalSignin } = useContext(
        AuthContext,
    );

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={() => clearErrorMessage()} // When user prepare to navigate out this screen
            />
            <AuthForm
                headerText="Sign Up For Tracker"
                errorMessage={state.errorMessage}
                onSubmit={({ email, password }) => signUp({ email, password })}
                submitButtonText="Sign up"
            />
            <NavLink
                routeName="Signin"
                text="Already have account? sign in instead?"
            />
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false, //because of header:null will be remove show use this one
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingBottom: 200,
    },
});

export default SignUpScreen;
