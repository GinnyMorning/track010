import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../Context/AuthContext";
import Spacer from "../Components/Spacer";

const AccountScreen = () => {
    const { signOut } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text style={styles.text}>Account Screen</Text>
            <Spacer>
                <Button title='Sign Out' onPress={() => signOut()} />
            </Spacer>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 48,
    },
});

export default AccountScreen;
