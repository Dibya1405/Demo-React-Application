import { REQUEST_INIT } from "../constants/usersActionTypes";
import { REQUEST_SUCCESS } from "../constants/usersActionTypes";
import { REQUEST_FAILURE } from "../constants/usersActionTypes";
import { FETCH_USER_DATA } from "../constants/usersActionTypes";
import { REMOVE_USER } from "../constants/usersActionTypes";

const defaultState1 = {
  isLoading: false,
  isFetching: false,
  users: [],
  error: "",
};

const usersReducer = (state = defaultState1, action) => {
  switch (action.type) {
    case REQUEST_INIT: {
      return {
        ...state,
        isLoading: true,
        isFetching: false,
        users: [],
        error: "",
      };
    }

    case REQUEST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isFetching: true,
        users: action.payload,
        error: "",
      };
    }

    case REQUEST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isFetching: false,
        users: [],
        error: action.payload,
      };
    }

    case REMOVE_USER: {
      return {
        ...state,
        isLoading: false,
        isFetching: true,
        users: state.users.filter((user) => user.id !== action.payload),
        error: "",
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
