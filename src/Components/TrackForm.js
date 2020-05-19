import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../Context/LocationContext";

const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName,
    } = useContext(LocationContext);

    // console.log(locations.length);

    return (
        <View>
            <Spacer>
                <Input
                    value={name}
                    placeholder='Enter Track Name'
                    onChangeText={changeName}
                />
            </Spacer>
            {recording ? (
                <Button title='Stop' onPress={stopRecording} />
            ) : (
                <Button title='Start Recording' onPress={startRecording} />
            )}
        </View>
    );
};

export default TrackForm;

const styles = StyleSheet.create({});
