import createDataContext from "./createDataContext";

const locationReducer = (state, actions) => {
    switch (actions.type) {
        case "add_current_location":
            return { ...state, currentLocation: actions.payload };
        case "start_recording":
            return { ...state, recording: true };
        case "stop_recording":
            return { ...state, recording: false };
        case "add_location":
            return {
                ...state,
                locations: [...state.locations, actions.payload], //append new location into the last one
            };
        case "change_name":
            return { ...state, name: actions.payload };
        default:
            return state;
    }
};

const changeName = (dispatch) => (name) => {
    dispatch({ type: "change_name", payload: name });
};

const startRecording = (dispatch) => () => {
    dispatch({ type: "start_recording" });
};
const stopRecording = (dispatch) => () => {
    dispatch({ type: "stop_recording" });
};
const addLocation = (dispatch) => (location, recording) => {
    dispatch({ type: "add_current_location", payload: location });
    if (recording) dispatch({ type: "add_location", payload: location });
};

export const { Context, Provider } = createDataContext(
    locationReducer,
    { changeName, startRecording, stopRecording, addLocation },
    { name: "", recording: false, locations: [], currentLocation: "" }
);
