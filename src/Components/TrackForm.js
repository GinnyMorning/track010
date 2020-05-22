import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../Context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName,
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack(); //declare function from SaveTrack hook

    // console.log(locations.length);

    return (
        <View>
            <Spacer>
                <Input
                    value={name}
                    placeholder="Enter Track Name"
                    onChangeText={changeName}
                    autoCorrect={false}
                    autoCompleteType="off"
                    
                />
            </Spacer>
            <Spacer>
                {recording ? (
                    <Button title="Stop" onPress={stopRecording} />
                ) : (
                    <Button title="Start Recording" onPress={startRecording} />
                )}
            </Spacer>
            <Spacer>
                {!recording && locations.length ? (
                    <Button title="Save" onPress={saveTrack} />
                ) : null}
            </Spacer>
        </View>
    );
};

export default TrackForm;

const styles = StyleSheet.create({});
