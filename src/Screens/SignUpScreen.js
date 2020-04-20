import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Go to Sign In"
                onPress={() => navigation.navigate("Signin")}></Button>
            <Button
                title="Go to Main Flow"
                onPress={() => navigation.navigate("mainFlow")}></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        fontSize: 48,
    },
});

export default SignUpScreen;
