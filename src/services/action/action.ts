import { Dispatch } from "redux";
import { BASE_API } from "../config/api.cofig";
import { Action, ActionTypes } from "../types/types";
import axios from "axios";

const API_URL = BASE_API;

export const userData = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.USER_DATA_REQUEST });
    try {
      const response = await axios.get(API_URL);
      const data = response.data;

      dispatch({
        type: ActionTypes.USER_DATA_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.USER_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
};
