import { useReducer, useEffect } from "react";

function useMapLocalStorageReducer (key, defaultVal, reducer) {
    const[mapState, mapDispatch] = useReducer(reducer, defaultVal, () => {
        let value;
        try {
            value = JSON.parse(
                window.localStorage.getItem(key) || String(defaultVal)
            );
        } catch (e) {
            value = defaultVal;
        }
        return value;
    });
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(mapState));
    }, [mapState]);

    return [mapState, mapDispatch];
}
export { useMapLocalStorageReducer };
