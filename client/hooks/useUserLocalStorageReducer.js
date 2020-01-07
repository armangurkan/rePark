import { useReducer, useEffect } from "react";

function useUserLocalStorageReducer(key, defaultUserState, reducer) {
    const [userState, userDispatch] = useReducer(reducer, defaultUserState, () => {
        let value;
        try {
            value = JSON.parse(
                window.localStorage.getItem(key) || String(defaultUserState)
            );
        } catch (e) {
            value = defaultUserState;
        }
        return value;
    });
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(userState));
    }, [userState]);

    return [userState, userDispatch];
}
export { useUserLocalStorageReducer };
