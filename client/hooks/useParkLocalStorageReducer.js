import { useReducer, useEffect } from "react";

function useParkLocalStorageReducer(key, location, reducer) {
    const [parkState, parkDispatch] = useReducer(reducer, location =null, () => {
        let value;
        try {
            value = JSON.parse(
                window.localStorage.getItem(key) || String(location)
            );
        } catch (e) {
            value = location;
        }
        return value;
    });
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(parkState));
    }, [parkState]);

    return [parkState, parkDispatch];
}
export { useParkLocalStorageReducer };
