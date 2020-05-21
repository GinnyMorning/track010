import createDataContext from "./createDataContext";

const TrackReducer = (state, action) => {
    switch (action.type) {
        case value:
            break;

        default:
            return state;
    }
};

const fetchTrack = (dispatch) => () => {};
const createNewTrack = (dispatch) => () => {};

export const { Provider, Context } = createDataContext(
    TrackReducer,
    { fetchTrack, createNewTrack },
    []
);
