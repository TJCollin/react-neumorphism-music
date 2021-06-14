import { SET_ALBUM_DETAIL } from "./actionTypes";

import { getAlbumDetailRequest } from "../../../apis/requests/album";
import { Dispatch } from "redux";

export const changeAlbumDetailAction = (payload: any) => {
  return {
    type: SET_ALBUM_DETAIL,
    payload: payload,
  };
};

/**
 * 请求榜单详情数据
 * @param {Number} id
 */
export const getAlbumDetailAction = (id: number) => {
  return async (dispatch: Dispatch) => {
    const resp = await getAlbumDetailRequest(id);
    dispatch(changeAlbumDetailAction(resp));
  };
};
