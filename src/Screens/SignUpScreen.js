import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../Components/Spacer";
import { Context as AuthContext } from "../Context/AuthContext";

const SignUpScreen = ({ navigation }) => {
    const { state, signUp } = useContext(AuthContext);
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
                secureTextEntry={true}
                label="Password"
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)} // or onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
            />
            <Spacer />
            <Spacer>
                <Button
                    title="Sign Up"
                    onPress={() => signUp({ email, password })}
                />
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
