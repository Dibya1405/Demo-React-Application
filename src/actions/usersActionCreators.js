import { REQUEST_INIT } from "../constants/usersActionTypes";
import { REQUEST_SUCCESS } from "../constants/usersActionTypes";
import { REQUEST_FAILURE } from "../constants/usersActionTypes";
import { REMOVE_USER } from "../constants/usersActionTypes";
import { FETCH_USER_DATA } from "../constants/usersActionTypes";
import axios from "axios";

// Sync action creators

export const reqInit = () => {
  return {
    type: REQUEST_INIT,
  };
};

export const reqSuccess = (users) => {
  return {
    type: REQUEST_SUCCESS,
    payload: users,
  };
};

export const reqFailure = (error) => {
  return {
    type: REQUEST_FAILURE,
    payload: error,
  };
};

export const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    payload: id,
  };
};

//Async action creators

export const fetchUsers = (url) => {
  return (dispatch) => {
    dispatch(reqInit());
    axios
      .get(url)
      .then((response) => {
        dispatch(reqSuccess(response.data));
      })
      .catch((err) => {
        dispatch(reqFailure(err.message));
      });
  };
};
