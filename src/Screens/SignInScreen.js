import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In To Your Account"
                errorMessage=""
                onSubmit={() => {}}
                submitButtonText="Sign In"
            />
            <NavLink
                text="Don't have an account? sign up instead!"
                routeName="Signup"
            />
        </View>
    );
};

SignInScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        fontSize: 48,
        flex: 1,
        justifyContent: "center",
        marginBottom: 250,
    },
});

export default SignInScreen;
