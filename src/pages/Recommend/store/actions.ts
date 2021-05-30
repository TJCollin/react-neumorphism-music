import { Dispatch } from "redux";
import {
  getRecommendListRequest,
  getRecommendNewSongsRequest,
} from "../../../apis/requests/recommend";
import { Recomm, Song } from "../../../typings";
import { SET_RECOMMEND_LIST, SET_RECOMMEND_SONGS } from "./actionTypes";

export const changeRecommendList = (payload: Recomm[]) => {
  return {
    type: SET_RECOMMEND_LIST,
    payload,
  };
};

export const changeRecommendSongs = (payload: Song[]) => {
  return {
    type: SET_RECOMMEND_SONGS,
    payload,
  };
};

export const getRecommendListAction = (type: number) => {
  return async (dispatch: Dispatch) => {
    const res: any = await getRecommendListRequest(type);
    dispatch(changeRecommendList(res.result));
  };
};

export const getRecommendSongsAcrion = () => {
  return async (dispath: Dispatch) => {
    const res: any = await getRecommendNewSongsRequest();
    dispath(changeRecommendSongs(res));
  };
};
