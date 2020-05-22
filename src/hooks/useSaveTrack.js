import { useContext } from "react";
import { Context as LocationContext } from "../Context/LocationContext";
import { Context as TrackContext } from "../Context/TrackContext";
import { navigate } from "../navigationRef";

export default () => {
    const {
        state: { name, locations },
        reset,
    } = useContext(LocationContext);
    const { createNewTrack } = useContext(TrackContext);

    const saveTrack = async () => {
        await createNewTrack(name, locations);
        reset();
        navigate("TrackList");
    };

    return [saveTrack];
};
