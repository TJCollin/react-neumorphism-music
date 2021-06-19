import { Dispatch } from "redux";
import { getSingerDetailRequest } from "../../../apis/requests/singer";
import { Singer } from "../../../typings";
import { SET_SINGER_DETAIL, SET_SINGER_LOADING } from "./actionTypes";

export const changeSingerDetailAction = (payload: Singer) => {
  return {
    type: SET_SINGER_DETAIL,
    payload,
  };
};

export const changeLoadingAction = (payload: boolean) => {
  return {
    type: SET_SINGER_LOADING,
    payload,
  };
};

export const getSingerDetailAction = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(changeLoadingAction(true));
    const resp = await getSingerDetailRequest(id);
    dispatch(changeSingerDetailAction(resp));
  };
};
