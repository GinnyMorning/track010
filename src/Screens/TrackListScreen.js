import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
    return (
        <View>
            <Text></Text>
            <Button
                title="Go to track Detail"
                onPress={() => navigation.navigate("TrackDetail")}></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        fontSize: 48,
    },
});

export default TrackListScreen;
