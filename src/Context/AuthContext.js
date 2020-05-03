import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "signup":
            return { token: action.payload, errorMessage: "" };
        default:
            return state;
    }
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
        dispatch({ type: "signup", payload: response.data.token });
        //navigate to main flow
        navigate('TrackList')
        // console.log(response.data);
    } catch (error) {
        dispatch({
            type: "add_error",
            payload: "Something went wrong with sign up",
        });
        // console.log(error.response.data);
    }
};

const signIn = (dispatch) => {
    return ({ email, password }) => {
        //step 1: try to sign in
        //step 2: if success, update the state
        //step 3: if error, show error message to user
    };
};
const signOut = (dispatch) => {
    return () => {
        //try to sign out
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signIn, signOut, signUp },
    { errorMessage: "", token: null }
);
