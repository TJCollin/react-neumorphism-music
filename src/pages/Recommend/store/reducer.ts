import { IAction, Recomm, Song } from "../../../typings";
import { produce } from "immer";
import { SET_RECOMMEND_LIST, SET_RECOMMEND_SONGS } from "./actionTypes";
export interface RecommmendState {
  recommendList: Recomm[];
  recommendSongs: Song[];
  loading: boolean;
}

export interface RecommAction extends IAction {
  payload: Recomm[] | Song[] | boolean;
}

const initialState: RecommmendState = {
  recommendList: [],
  recommendSongs: [],
  loading: true,
};

export default produce((state: RecommmendState, action: RecommAction) => {
  switch (action.type) {
    case SET_RECOMMEND_LIST:
      state.recommendList = action.payload as Recomm[];
      break;
    case SET_RECOMMEND_SONGS:
      state.recommendSongs = action.payload as Song[];
      state.loading = false;
      break;
    default:
      break;
  }
}, initialState);
