import React, { createContext } from "react";
import { useMapLocalStorageReducer } from "../hooks/useMapLocalStorageReducer";
import mapReducer from "../reducers/map.reducer.js";

export const MapContext = createContext();
export const MapDispatchContext = createContext();
//current location;
export function MapProvider(props) {
    const [mapState, mapDispatch] = useMapLocalStorageReducer(
        "mapState",
        {
            viewport: {
                latitude: null,
                longitude: null,
                width: '100vw',
                height: '100vh',
                zoom: 10
            },
            selectedPark:[]
        },
        mapReducer
    );
    return (
        <MapContext.Provider value={mapState}>
            <MapDispatchContext.Provider value={mapDispatch}>
                {props.children}
            </MapDispatchContext.Provider>
        </MapContext.Provider>
    );
}
