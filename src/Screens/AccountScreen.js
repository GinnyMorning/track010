import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Account Screen</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        fontSize: 48,
    },
});

export default AccountScreen;
