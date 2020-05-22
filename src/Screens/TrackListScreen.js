import React, { useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../Context/TrackContext";
import { FontAwesome } from "@expo/vector-icons";

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTrack } = useContext(TrackContext);
    // console.log(state);
    return (
        <View>
            <NavigationEvents onWillFocus={fetchTrack} />

            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("TrackDetail", {
                                    _id: item._id,
                                })
                            }>
                            <ListItem chevron={true} title={item.name} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

TrackListScreen.navigationOptions = {
    title: "Track List Screen",
};

const styles = StyleSheet.create({
    container: {
        fontSize: 48,
    },
});

export default TrackListScreen;
