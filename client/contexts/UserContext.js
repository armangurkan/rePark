import React, { createContext, useState } from "react";
import {useUserLocalStorageReducer} from '../hooks/useUserLocalStorageReducer'
export const UserContext = createContext();
export const UserDispatchContext = createContext();
const intialUserState = {
  id: null,
  isLoggedIn: false,
  name: null,
  phone: null,
  car: {
    car_make: '',
    car_model: '',
    car_color: '',
  }
};
export function UserProvider(props) {
  const [user, setUserInfo] = useState({
    id: null,
    isLoggedIn: false,
    name: null,
    phone: null,
    car: {
      car_make: '',
      car_model: '',
      car_color: '',
    }
  });
  const [userState, dispatchUserState] = useUserLocalStorageReducer('userState', intialUserState);
  //custom update function
  const updateUser = (newUser) => {
    setUserInfo({
      ...user,
      ...newUser
    })};

  return (
    <UserContext.Provider value={{
      user, userState, updateUser, dispatchUserState
    }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
