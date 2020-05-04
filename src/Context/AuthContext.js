import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "signin":
            return { token: action.payload, errorMessage: "" };
        case "clear_error_message":
            return { ...state, errorMessage: "" };
        default:
            return state;
    }
};

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    if (token) {
        dispatch({ type: "singin", payload: token });
        navigate("TrackList");
    } else navigate("SignUp");
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: "clear_error_message" });
};

const signUp = (dispatch) => async ({ email, password }) => {
    //step 1: make api request with email and password
    //step 2: if we sign up, modify the state, and return authenticated
    //step 3: if any error, show error message
    try {
        const response = await trackerApi.post("/signup", {
            email,
            password,
        });
        await AsyncStorage.setItem("token", response.data.token);
        dispatch({ type: "signin", payload: response.data.token });
        //navigate to main flow
        navigate("TrackList");
        // console.log(response.data);
    } catch (error) {
        dispatch({
            type: "add_error",
            payload: "Something went wrong with sign up",
        });
        // console.log(error.response.data);
    }
};

const signIn = (dispatch) => async ({ email, password }) => {
    //step 1: try to sign in
    try {
        const response = await trackerApi.post("/signin", { email, password });
        await AsyncStorage.setItem("token", response.data.token);
        dispatch({ type: "signin", payload: response.data.token });
        //navigate to main flow
        navigate("TrackList");
    } catch (error) {
        dispatch({
            type: "add_error",
            payload: "Something went wrong with sign in",
        });
    }
    //step 2: if success, update the state
    //step 3: if error, show error message to user
};

const signOut = (dispatch) => {
    return () => {
        //try to sign out
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signIn, signOut, signUp, clearErrorMessage, tryLocalSignin },
    { errorMessage: "", token: null },
);
