import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../Context/AuthContext";
import Spacer from "../Components/Spacer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AccountScreen = () => {
    const { signOut } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text style={styles.text}>Account Screen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={() => signOut()} />
            </Spacer>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 48,
    },
});

AccountScreen.navigationOptions = {
    title: "Account",
    tabBarIcon: (
        <MaterialCommunityIcons name="account" size={24} color="black" />
    ),
};

export default AccountScreen;
