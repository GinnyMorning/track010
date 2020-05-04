import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";
import { Context as AuthContext } from "../Context/AuthContext";

const SignInScreen = () => {
    const { state, signIn, clearErrorMessage } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage} // When user prepare to navigate out this screen
            />
            <AuthForm
                headerText="Sign In To Your Account"
                errorMessage={state.errorMessage}
                onSubmit={signIn}
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
