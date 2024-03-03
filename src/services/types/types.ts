import { IUser } from "@/src/models/User";

export interface UserState {
  loading: boolean;
  error: string | unknown;
  users: IUser | null;
}

export enum ActionTypes {
  USER_DATA_REQUEST = "USER_DATA_REQUEST",
  USER_DATA_SUCCESS = "USER_DATA_SUCCESS",
  USER_DATA_FAILURE = "USER_DATA_FAILURE",
}

interface UserDataRequestAction {
  type: ActionTypes.USER_DATA_REQUEST;
}

interface UserDataSuccessAction {
  type: ActionTypes.USER_DATA_SUCCESS;
  payload: IUser;
}

interface UserDataFailure {
  type: ActionTypes.USER_DATA_FAILURE;
  payload: string;
}

export type Action =
  | UserDataRequestAction
  | UserDataSuccessAction
  | UserDataFailure;
