import { Dispatch } from "redux";
import { getSingerListRequest } from "../../../apis/requests/singer";
import { Singer } from "../../../typings";
import { SET_SINGER_LIST } from "./actionTypes";

export const changeSingerListAction = (payload: Singer[]) => {
  return {
    type: SET_SINGER_LIST,
    payload,
  };
};

/**
 * 请求歌手列表
 * @param initial 首字母
 */
export const getSingerListAction = (initial?: string) => {
  return async (dispatch: Dispatch) => {
    const resp = await getSingerListRequest(0, initial);
    dispatch(changeSingerListAction(resp.artists));
  };
};
