import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const TrackReducer = (state, action) => {
    switch (action.type) {
        case "fetch_track":
            return action.payload;

        default:
            return state;
    }
};

const fetchTrack = (dispatch) => async () => {
    const response = await trackerApi.get("/tracks");
    dispatch({ type: "fetch_track", payload: response.data });
};
const createNewTrack = (dispatch) => async (name, locations) => {
    await trackerApi.post("/tracks", { name, locations });
};

export const { Provider, Context } = createDataContext(
    TrackReducer,
    { fetchTrack, createNewTrack },
    []
);
