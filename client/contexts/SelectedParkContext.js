import React, { createContext } from "react";
import { useParkLocalStorageReducer } from "../hooks/useParkLocalStorageReducer";
import parkReducer from "../reducers/map.reducer.js";

export const ParkContext = createContext();
export const ParkDispatchContext = createContext();
//current location;
export function ParkProvider(props) {
    const [parkState, parkDispatch] = useParkLocalStorageReducer(
        "parkState",
        {
            key: null,
            latitude: null,
            longitude: null,
            draggable: false,
        },
        parkReducer
    );
    return (
        <ParkContext.Provider value={parkState}>
            <ParkDispatchContext.Provider value={parkDispatch}>
                {props.children}
            </ParkDispatchContext.Provider>
        </ParkContext.Provider>
    );
}
