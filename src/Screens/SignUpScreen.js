import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../Components/Spacer";

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={(newEmail) => setEmail(newEmail)} // or onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                label="Password"
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)} // or onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType='newPassword'
            />
            <Spacer>
                <Button title="Sign Up" />
            </Spacer>
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
