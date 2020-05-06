import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input
                label="E-mail"
                value={email}
                onChangeText={(newEmail) => setEmail(newEmail)} // or onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
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
            {errorMessage ? (
                <Text style={styles.errorMess}>{errorMessage}</Text>
            ) : null}
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>
        </>
    );
};

export default AuthForm;

const styles = StyleSheet.create({
    errorMess: {
        color: "red",
        fontSize: 15,
        marginLeft: 15,
        marginTop: 15,
    },
});
