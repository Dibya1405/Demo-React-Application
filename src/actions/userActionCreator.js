import { REQUEST_INIT } from "../constants/userActionTypes";
import { REQUEST_SUCCESS } from "../constants/userActionTypes";
import { REQUEST_FAILURE } from "../constants/userActionTypes";
import { REMOVE_DATA } from "../constants/userActionTypes";
import axios from "axios";

// Sync action creators

export const reqInit = () => {
  return {
    type: REQUEST_INIT,
  };
};

export const reqSuccess = (user) => {
  return {
    type: REQUEST_SUCCESS,
    payload: user,
  };
};

export const reqFailure = (error) => {
  return {
    type: REQUEST_FAILURE,
    payload: error,
  };
};

export const removeData = () => {
  return {
    type: REMOVE_DATA,
  };
};
//Async action creators

// export const fetchOneUser = (url) => {
//   return (dispatch) => {
//     return new Promise((resolve, reject) => {
//       axios
//         .get(url)
//         .then((response) => {
//           dispatch(reqSuccess(response.data));
//           resolve(response.data.name);
//         })
//         .catch((err) => {
//           dispatch(reqFailure(err.message));
//           reject();
//         });
//     });
//   };
// };
export const fetchOneUser = (url) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(reqSuccess(response.data));
        document.title = response.data.name;
        // resolve(response.data.name);
      })
      .catch((err) => {
        dispatch(reqFailure(err.message));
        document.title = "Person Page";
        // reject();
      });
  };
};
