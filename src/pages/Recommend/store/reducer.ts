import { IAction, Recomm, Song } from "../../../typings";
import { produce } from "immer";
import { SET_RECOMMEND_LIST, SET_RECOMMEND_SONGS } from "./actionTypes";
import { actions } from ".";
export interface RecommmendState {
  recommendList: Recomm[];
  recommendSongs: Song[];
}

export interface RecommAction extends IAction {
  payload: Recomm[] | Song[];
}

const initialState: RecommmendState = {
  recommendList: [],
  recommendSongs: [],
};

export default produce((state: RecommmendState, action: RecommAction) => {
  switch (action.type) {
    case SET_RECOMMEND_LIST:
      state.recommendList = action.payload as Recomm[];
      break;
    case SET_RECOMMEND_SONGS:
      state.recommendSongs = action.payload as Song[];
      break;
    default:
      break;
  }
}, initialState);
