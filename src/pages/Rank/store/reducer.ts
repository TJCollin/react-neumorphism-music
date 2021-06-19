import produce from "immer";
import { IAction } from "../../../typings";
import { RankItem, RankPayload } from "../typing";
import { SET_RANK_DATA } from "./actionTypes";

export interface RankState {
  globalList: RankItem[];
  officialList: RankItem[];
  loading: boolean;
}

export interface RankAction extends IAction {
  payload: RankPayload;
}

const initState: RankState = {
  globalList: [],
  officialList: [],
  loading: true,
};

export default produce((state: RankState, action: RankAction) => {
  switch (action.type) {
    case SET_RANK_DATA:
      const { globalList, officialList } = action.payload as RankPayload;
      state.globalList = globalList;
      state.officialList = officialList;
      state.loading = false;
      break;
    default:
      break;
  }
}, initState);
