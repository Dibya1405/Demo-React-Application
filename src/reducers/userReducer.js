import React from "react";
import { REQUEST_INIT } from "../constants/userActionTypes";
import { REQUEST_SUCCESS } from "../constants/userActionTypes";
import { REQUEST_FAILURE } from "../constants/userActionTypes";
import { REMOVE_DATA } from "../constants/userActionTypes";
// import { FETCH_USER_DATA } from "../constants/userActionTypes";

const defaultState2 = {
  isLoading: false,
  isFetching: false,
  user: {
    Img: "",
    Name: "",
    Location: "",
    Followers: "",
    Following: "",
    Profile: "",
  },
  error: "",
};

const userReducer = (state = defaultState2, action) => {
  switch (action.type) {
    case REQUEST_INIT: {
      return {
        ...state,
        isLoading: true,
        isFetching: false,
        user: {
          Img: "",
          Name: "",
          Location: "",
          Followers: "",
          Following: "",
          Profile: "",
        },
        error: "",
      };
    }

    case REQUEST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isFetching: true,
        user: {
          ...state.user,
          Img: action.payload.avatar_url,
          Name: action.payload.name,
          Location: action.payload.location,
          Followers: action.payload.followers,
          Following: action.payload.following,
          Profile: action.payload.html_url,
        },
        error: "",
      };
    }

    case REQUEST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isFetching: false,
        user: {
          Img: "",
          Name: "",
          Location: "",
          Followers: "",
          Following: "",
          Profile: "",
        },
        error: action.payload,
      };
    }

    case REMOVE_DATA: {
      return {
        ...state,
        isLoading: false,
        isFetching: false,
        user: {
          Img: "",
          Name: "",
          Location: "",
          Followers: "",
          Following: "",
          Profile: "",
        },
        error: "",
      };
    }

    default:
      return state;
  }
};

export default userReducer;
