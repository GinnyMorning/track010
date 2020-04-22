import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signUp = (dispatch) => {
    return async ({ email, password }) => {
        //step 1: make api request with email and password
        //step 2: if we sign up, modify the state, and return authenticated
        //step 3: if any error, show error message
        try {
            const response = await trackerApi.post("/signup", {
                email,
                password,
            });
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    };
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
    { isSignIn: false }
);
